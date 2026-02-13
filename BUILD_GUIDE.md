# قارئ القرآن الكريم — Native App Build Guide

## Prerequisites

- **Android**: [Android Studio](https://developer.android.com/studio) (Arctic Fox or later)
- **iOS**: [Xcode 15+](https://developer.apple.com/xcode/) (Mac only)
- **Node.js**: v18+ ([download](https://nodejs.org))
- **Both**: Active developer accounts (Google Play Console / Apple Developer)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Sync web files to native projects
npx cap sync

# 3. Open in IDE
npx cap open android   # Opens Android Studio
npx cap open ios       # Opens Xcode
```

---

## Android (Google Play)

### Build

1. Open Android Studio: `npx cap open android`
2. Wait for Gradle sync to finish
3. **Build** → **Generate Signed Bundle / APK**
4. Choose **Android App Bundle (.aab)**
5. Create or select your keystore:
   - Keystore path: create new → save as `quran-reader.jks`
   - Set password, alias, and alias password
   - **⚠️ SAVE THE KEYSTORE AND PASSWORDS** — you need them for every update
6. Select **release** build variant
7. Click **Finish** — your `.aab` file will be in `android/app/release/`

### Publish to Google Play

1. Go to [Google Play Console](https://play.google.com/console)
2. **Create app** → fill in:
   - App name: `قارئ القرآن الكريم`
   - Default language: Arabic (ar)
   - App type: App
   - Free
   - Category: Education → Books & Reference
3. Complete the **Dashboard** checklist:
   - Store listing (title, description, screenshots)
   - Content rating questionnaire
   - Privacy policy URL (add to your Vercel site)
   - Target audience: Everyone
4. **Production** → **Create new release** → upload `.aab`
5. Submit for review (usually 1-3 days)

### Store Listing (Arabic)

**Title:** قارئ القرآن الكريم — كلمة بكلمة

**Short Description:**
تدبّر القرآن كلمة بكلمة بسرعتك — بلا إعلانات ولا تتبّع. صدقة جارية.

**Full Description:**
قارئ القرآن الكريم هو تطبيق مجاني بالكامل يتيح لك قراءة القرآن كلمة بكلمة بتقنية التركيز البصري، مما يساعد على التدبّر والحفظ.

المميزات:
• عرض كلمات القرآن واحدة تلو الأخرى بالسرعة التي تناسبك
• التحكم بسرعة القراءة من ٥٠ إلى ١٠٠٠ كلمة بالدقيقة
• تكرار الآيات تلقائياً لتسهيل الحفظ والمراجعة
• وضع ليلي ونهاري لراحة العين
• حفظ تلقائي لموضع القراءة
• عداد لوقت ختم القرآن بالكامل
• يعمل بدون إنترنت للسور المحمّلة

بلا إعلانات — بلا تتبّع — صدقة جارية
جميع الحقوق لله ﷻ

### Store Listing (English)

**Title:** Quran Reader — Word by Word

**Short Description:**
Read the Quran word-by-word at your own pace. No ads, no tracking. Free forever.

**Full Description:**
Quran Reader is a completely free app that displays the Quran word-by-word using rapid serial visual presentation (RSVP) technology, helping you focus on each word for deeper contemplation and memorization.

Features:
• Word-by-word Quran display with focus point highlighting
• Adjustable reading speed from 50 to 1000 words per minute
• Ayah loop mode for memorization practice
• Dark and light themes
• Automatic bookmark saving
• Full Quran completion time estimate
• Offline support for previously loaded surahs

No ads — No tracking — Free forever
An ongoing charity (Sadaqah Jariyah)

---

## iOS (App Store)

### Build

1. Open Xcode: `npx cap open ios`
2. Select the **App** target
3. In **Signing & Capabilities**:
   - Team: Select your Apple Developer team
   - Bundle Identifier: `com.eyepoke.quranreader`
   - Check "Automatically manage signing"
4. Select a real device or "Any iOS Device (arm64)"
5. **Product** → **Archive**
6. In the Organizer window → **Distribute App** → **App Store Connect**
7. Follow the prompts to upload

### Publish to App Store

1. Go to [App Store Connect](https://appstoreconnect.apple.com)
2. **My Apps** → **+** → **New App**:
   - Platform: iOS
   - Name: `قارئ القرآن الكريم`
   - Primary Language: Arabic
   - Bundle ID: `com.eyepoke.quranreader`
   - SKU: `quran-reader-001`
3. Fill in App Information:
   - Category: Education (primary), Books (secondary)
   - Content Rights: Does not contain third-party content
   - Age Rating: 4+
4. Add the build you uploaded from Xcode
5. Fill in screenshots (upload the ones from the `www/` folder)
6. Submit for review

### ⚠️ Apple Review Tips

Apple sometimes rejects web-wrapper apps under **Guideline 4.2 (Minimum Functionality)**.
To avoid rejection, emphasize these **native-like features** in your review notes:

> "This app uses RSVP speed-reading technology to display Quran text word-by-word, 
> a unique interaction model not available through a standard browser. Features include:
> adjustable reading speed (50-1000 WPM), ayah loop mode for memorization, 
> experimental eye-tracking for hands-free reading, offline support via service worker,
> auto-bookmarking, and multiple themes. The app provides substantial value beyond 
> what a web bookmark could offer."

---

## Updating the App

When you update your web app:

```bash
# 1. Copy your updated files to www/
cp -r /path/to/your/updated/files/* www/

# 2. Sync to native projects
npx cap sync

# 3. Rebuild in Android Studio / Xcode
# 4. Upload new version to stores
```

---

## Project Structure

```
quran-app/
├── www/                    # Your web app (source of truth)
│   ├── index.html
│   ├── manifest.json
│   ├── sw.js
│   ├── icons/
│   └── screenshot-*.png
├── android/                # Android Studio project
│   └── app/src/main/
│       ├── AndroidManifest.xml
│       ├── res/mipmap-*/   # App icons (all sizes)
│       └── res/drawable*/  # Splash screens
├── ios/                    # Xcode project
│   └── App/App/
│       └── Assets.xcassets/
│           ├── AppIcon.appiconset/  # App icons
│           └── Splash.imageset/     # Splash screens
├── capacitor.config.json   # Capacitor configuration
└── package.json
```

## App ID

**Bundle/Package ID:** `com.eyepoke.quranreader`

Use this same ID for both stores. Once published, it cannot be changed.
