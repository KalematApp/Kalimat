import "@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const { device_id, referred_by } = await req.json()

    if (!device_id) {
      return new Response(
        JSON.stringify({ error: "device_id is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    // Get user's IP from request headers
    // Supabase Edge Functions provide the client IP via x-forwarded-for
    const forwarded = req.headers.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0].trim() : req.headers.get("cf-connecting-ip") || "unknown"

    console.log(`[upsert-location-auto] device=${device_id}, ip=${ip}`)

    // Use ip-api.com for geolocation (free, no API key needed, up to 45 req/min)
    // Falls back gracefully if the lookup fails
    let latitude = 0
    let longitude = 0
    let city = null as string | null
    let country_code = null as string | null

    try {
      const geoResp = await fetch(`http://ip-api.com/json/${ip}?fields=status,lat,lon,city,countryCode`)
      const geo = await geoResp.json()

      if (geo.status === "success") {
        latitude = geo.lat
        longitude = geo.lon
        city = geo.city || null
        country_code = geo.countryCode || null
        console.log(`[upsert-location-auto] Geo: ${city}, ${country_code} (${latitude}, ${longitude})`)
      } else {
        console.log(`[upsert-location-auto] Geo lookup failed: ${JSON.stringify(geo)}`)
      }
    } catch (geoErr) {
      console.log(`[upsert-location-auto] Geo fetch error: ${geoErr}`)
    }

    // Connect to Supabase with service role key (has insert/upsert permissions)
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Upsert into ummah_locations — use the existing RPC or direct upsert
    const { error } = await supabase.rpc("upsert_location", {
      p_device_id: device_id,
      p_latitude: latitude,
      p_longitude: longitude,
      p_referred_by: referred_by || "",
    })

    if (error) {
      console.log(`[upsert-location-auto] RPC error: ${JSON.stringify(error)}`)

      // Fallback: try direct upsert if RPC doesn't support city/country
      // The RPC may not set city/country_code, so update those separately
    }

    // Update city and country_code directly (the RPC may not handle these fields)
    if (city || country_code) {
      const { error: updateErr } = await supabase
        .from("ummah_locations")
        .update({ city, country_code })
        .eq("device_id", device_id)

      if (updateErr) {
        console.log(`[upsert-location-auto] City/country update error: ${JSON.stringify(updateErr)}`)
      }
    }

    return new Response(
      JSON.stringify({
        latitude,
        longitude,
        city,
        country_code,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (err) {
    console.error(`[upsert-location-auto] Error: ${err}`)
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }
})
