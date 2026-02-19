import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

interface Companion {
  id: number;
  name_english: string;
  name_arabic: string;
  title?: string;
  latitude: number;
  longitude: number;
  city_english: string;
  region_english: string;
  burial_site?: string;
  death_year?: string;
  additional_info?: string;
}

interface GlobeProps {
  companions: Companion[];
  onCompanionClick: (companion: Companion) => void;
  selectedCompanion: Companion | null;
  focusedCompanion?: Companion | null;
  onPinPosition?: (position: { x: number; y: number } | null) => void;
}

export const Globe = ({ companions, onCompanionClick, selectedCompanion, focusedCompanion, onPinPosition }: GlobeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const labelRendererRef = useRef<CSS2DRenderer | null>(null);
  const globeRef = useRef<THREE.Group | null>(null);
  const markersRef = useRef<Map<number, THREE.Mesh>>(new Map());
  const labelsRef = useRef<Map<number, CSS2DObject>>(new Map());
  const arcsRef = useRef<THREE.Line[]>([]);
  const [isRotating, setIsRotating] = useState(true);
  const clockRef = useRef(new THREE.Clock());
  const companionGroupsRef = useRef<Map<number, THREE.Group>>(new Map());

  // Build a group containing all visuals for a companion (marker, glow, label, line, arc)
  const buildCompanionGroup = (companion: Companion) => {
    const group = new THREE.Group();
    const radius = 2;
    const position = latLongToVector3(companion.latitude, companion.longitude, radius);

    const isMartyr = companion.name_english.includes("Ja'far") ||
                     companion.name_english.includes("Zayd") ||
                     companion.name_english.includes("Rawaha") ||
                     companion.death_year === "8 AH / 629 CE";

    // Marker
    const markerGeometry = new THREE.SphereGeometry(0.025, 16, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({
      color: isMartyr ? 0xff3333 : 0x00ff00,
      transparent: true,
      opacity: 0.9,
    });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.copy(position);
    group.add(marker);
    markersRef.current.set(companion.id, marker);

    // Glow ring
    const glowGeometry = new THREE.RingGeometry(0.04, 0.06, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: isMartyr ? 0xff3333 : 0x00ff00,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.copy(position);
    glow.lookAt(0, 0, 0);
    group.add(glow);

    // Label
    const labelDiv = document.createElement('div');
    labelDiv.className = 'companion-label';
    labelDiv.style.cssText = `
      background: rgba(0, 0, 0, 0.85);
      color: white;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 12px;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      white-space: nowrap;
      border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    labelDiv.innerHTML = `
      <div style=\"font-weight: bold; margin-bottom: 2px; direction: rtl;\">${companion.name_arabic}</div>
      <div style=\"opacity: 0.8; font-size: 10px;\">${companion.name_english}</div>
    `;
    const label = new CSS2DObject(labelDiv);
    label.position.copy(position.clone().multiplyScalar(1.2));
    group.add(label);
    labelsRef.current.set(companion.id, label);

    // Connection line
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
      position.clone().multiplyScalar(1.0),
      position.clone().multiplyScalar(1.15),
    ]);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: isMartyr ? 0xff3333 : 0x00ff00,
      transparent: true,
      opacity: 0.6,
      linewidth: 2,
    });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    group.add(line);

    // Arc from Mecca/Medina
    const MECCA = { lat: 21.4225, lng: 39.8262 };
    const MEDINA = { lat: 24.5247, lng: 39.5692 };
    const originPoint = companion.city_english?.toLowerCase().includes('medina')
      ? latLongToVector3(MEDINA.lat, MEDINA.lng, radius)
      : latLongToVector3(MECCA.lat, MECCA.lng, radius);

    const midPoint = new THREE.Vector3()
      .addVectors(originPoint, position)
      .multiplyScalar(0.5)
      .normalize()
      .multiplyScalar(radius + 0.5);

    const arcCurve = new THREE.QuadraticBezierCurve3(originPoint, midPoint, position);
    const arcPoints = arcCurve.getPoints(50);
    const arcGeometry = new THREE.BufferGeometry().setFromPoints(arcPoints);
    const arcMaterial = new THREE.LineBasicMaterial({
      color: 0xffd700,
      transparent: true,
      opacity: 0.3,
      linewidth: 1,
    });
    const arc = new THREE.Line(arcGeometry, arcMaterial);
    arc.userData = { material: arcMaterial, baseOpacity: 0.3, offset: Math.random() };
    group.add(arc);
    arcsRef.current.push(arc);

    return group;
  };

  // Convert lat/lng to 3D coordinates
  const latLongToVector3 = (lat: number, lng: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    return new THREE.Vector3(x, y, z);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Label renderer setup
    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0';
    labelRenderer.domElement.style.pointerEvents = 'none';
    containerRef.current.appendChild(labelRenderer.domElement);
    labelRendererRef.current = labelRenderer;

    // Globe group
    const globeGroup = new THREE.Group();
    globeRef.current = globeGroup;
    scene.add(globeGroup);

    // Create Earth globe with texture
    const radius = 2;
    
    // Load Earth texture to determine land positions
    const textureLoader = new THREE.TextureLoader();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    
    textureLoader.load(
      'https://unpkg.com/three-globe@2.31.1/example/img/earth-topology.png',
      (texture) => {
        const img = texture.image;
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const dotPositions = [];
        
        // Much higher sample count for better definition
        const samples = 25000;
        for (let i = 0; i < samples; i++) {
          const phi = Math.acos(-1 + (2 * i) / samples);
          const theta = Math.sqrt(samples * Math.PI) * phi;
          
          const lat = 90 - (phi * 180 / Math.PI);
          const lng = ((theta * 180 / Math.PI) % 360);
          
          const u = ((lng + 180) / 360) * canvas.width;
          const v = ((90 - lat) / 180) * canvas.height;
          
          const pixelIndex = (Math.floor(v) * canvas.width + Math.floor(u)) * 4;
          const brightness = (imageData.data[pixelIndex] + imageData.data[pixelIndex + 1] + imageData.data[pixelIndex + 2]) / 3;
          
          if (brightness > 30) {
            const position = latLongToVector3(lat, lng, radius);
            dotPositions.push(position.x, position.y, position.z);
          }
        }
        
        const dotGeometry = new THREE.BufferGeometry();
        dotGeometry.setAttribute('position', new THREE.Float32BufferAttribute(dotPositions, 3));
        
        const dotMaterial = new THREE.PointsMaterial({
          color: 0xcccccc,
          size: 0.008,
          transparent: true,
          opacity: 0.7,
          sizeAttenuation: true,
        });
        
        const dots = new THREE.Points(dotGeometry, dotMaterial);
        globeGroup.add(dots);
      }
    );
    
    // Load and render country borders
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json')
      .then(response => response.json())
      .then(worldData => {
        const countries = (worldData as any).objects.countries;
        const geometries = (window as any).topojson.feature(worldData, countries).features;
        
        geometries.forEach((feature: any) => {
          const coordinates = feature.geometry.coordinates;
          
          const drawCoordinates = (coords: any, isPolygon: boolean) => {
            if (isPolygon) {
              coords.forEach((ring: any) => {
                const points = ring.map((coord: number[]) => 
                  latLongToVector3(coord[1], coord[0], radius + 0.005)
                );
                if (points.length > 1) {
                  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
                  const lineMaterial = new THREE.LineBasicMaterial({ 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.4,
                    linewidth: 1
                  });
                  const line = new THREE.Line(lineGeometry, lineMaterial);
                  globeGroup.add(line);
                }
              });
            } else {
              coords.forEach((polygon: any) => drawCoordinates(polygon, true));
            }
          };
          
          if (feature.geometry.type === 'Polygon') {
            drawCoordinates(coordinates, true);
          } else if (feature.geometry.type === 'MultiPolygon') {
            drawCoordinates(coordinates, false);
          }
        });
      })
      .catch(err => console.warn('Could not load country borders:', err));
    
    // Add latitude lines
    for (let lat = -80; lat <= 80; lat += 20) {
      const points = [];
      for (let lng = -180; lng <= 180; lng += 5) {
        points.push(latLongToVector3(lat, lng, radius + 0.01));
      }
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0x444444, transparent: true, opacity: 0.2 });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      globeGroup.add(line);
    }
    
    // Add longitude lines
    for (let lng = -180; lng <= 180; lng += 20) {
      const points = [];
      for (let lat = -90; lat <= 90; lat += 5) {
        points.push(latLongToVector3(lat, lng, radius + 0.01));
      }
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0x444444, transparent: true, opacity: 0.2 });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      globeGroup.add(line);
    }
    
    // Add orbital rings
    const ringRadius = radius + 0.3;
    const ringGeometry = new THREE.TorusGeometry(ringRadius, 0.005, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x444444,
      transparent: true,
      opacity: 0.2,
    });
    
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring1.rotation.x = Math.PI / 2;
    globeGroup.add(ring1);
    
    const ring2 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring2.rotation.x = Math.PI / 3;
    globeGroup.add(ring2);

    // Mecca and Medina coordinates
    const MECCA = { lat: 21.4225, lng: 39.8262 };
    const MEDINA = { lat: 24.5247, lng: 39.5692 };

    // Markers are managed by a separate sync effect; removed from init to avoid re-initialization resets


    // Perimeter visualization removed to improve performance and avoid shader uniform conflicts


    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Mouse interaction
    let isDragging = false;
    let hasMovedWhileDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      hasMovedWhileDragging = false;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      setIsRotating(false);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging && globeRef.current) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        // Only rotate if movement is significant (prevents micro-jitters)
        if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
          globeRef.current.rotation.y += deltaX * 0.005;
          globeRef.current.rotation.x += deltaY * 0.005;
          hasMovedWhileDragging = true;
        }

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (cameraRef.current) {
        // Calculate distance from origin
        const currentDistance = cameraRef.current.position.length();
        const zoomDelta = e.deltaY * 0.005;
        const newDistance = Math.max(3, Math.min(10, currentDistance + zoomDelta));
        
        // Scale camera position to maintain direction but change distance
        const scale = newDistance / currentDistance;
        cameraRef.current.position.multiplyScalar(scale);
        cameraRef.current.lookAt(0, 0, 0);
      }
    };

    // Touch controls for mobile
    let touchStartDistance = 0;
    let lastTouchX = 0;
    let lastTouchY = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        // Pinch zoom start
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        touchStartDistance = Math.sqrt(dx * dx + dy * dy);
      } else if (e.touches.length === 1) {
        // Single touch drag
        lastTouchX = e.touches[0].clientX;
        lastTouchY = e.touches[0].clientY;
        isDragging = true;
        setIsRotating(false);
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && touchStartDistance > 0) {
        // Pinch zoom
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const delta = touchStartDistance - distance;
        
        if (cameraRef.current) {
          // Calculate distance from origin
          const currentDistance = cameraRef.current.position.length();
          const newDistance = Math.max(3, Math.min(10, currentDistance + delta * 0.01));
          
          // Scale camera position to maintain direction
          const scale = newDistance / currentDistance;
          cameraRef.current.position.multiplyScalar(scale);
          cameraRef.current.lookAt(0, 0, 0);
        }
        
        touchStartDistance = distance;
      } else if (e.touches.length === 1 && isDragging && globeRef.current) {
        // Single touch drag
        const deltaX = e.touches[0].clientX - lastTouchX;
        const deltaY = e.touches[0].clientY - lastTouchY;

        globeRef.current.rotation.y += deltaX * 0.005;
        globeRef.current.rotation.x += deltaY * 0.005;

        lastTouchX = e.touches[0].clientX;
        lastTouchY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
      touchStartDistance = 0;
    };

    // Raycaster for marker clicks
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onClick = (event: MouseEvent) => {
      // Ignore clicks that were actually drags
      if (hasMovedWhileDragging) return;

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      
      const markerMeshes = Array.from(markersRef.current.values());
      const intersects = raycaster.intersectObjects(markerMeshes);

      if (intersects.length > 0) {
        const clickedMarker = intersects[0].object;
        const companionId = Array.from(markersRef.current.entries())
          .find(([_, marker]) => marker === clickedMarker)?.[0];
        
        if (companionId !== undefined) {
          const companion = companions.find(c => c.id === companionId);
          if (companion) {
            onCompanionClick(companion);
          }
        }
      }
    };

    const onHover = (event: MouseEvent) => {
      // Don't update hover state while dragging
      if (isDragging || hasMovedWhileDragging) return;

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      
      const markerMeshes = Array.from(markersRef.current.values());
      const intersects = raycaster.intersectObjects(markerMeshes);

      // Reset all markers to default scale
      markersRef.current.forEach((marker, id) => {
        if (!selectedCompanion || selectedCompanion.id !== id) {
          marker.scale.set(1, 1, 1);
        }
      });

      // Scale up hovered marker and show label
      if (intersects.length > 0) {
        renderer.domElement.style.cursor = 'pointer';
        const hoveredMarker = intersects[0].object as THREE.Mesh;
        const companionId = Array.from(markersRef.current.entries())
          .find(([_, marker]) => marker === hoveredMarker)?.[0];
        
        if (companionId !== undefined) {
          const label = labelsRef.current.get(companionId);
          if (label) {
            (label.element as HTMLElement).style.opacity = '1';
          }
          
          if (!selectedCompanion || selectedCompanion.id !== companionId) {
            hoveredMarker.scale.set(1.5, 1.5, 1.5);
          }
        }
      } else {
        renderer.domElement.style.cursor = 'default';
        // Hide all labels when not hovering
        labelsRef.current.forEach((label) => {
          (label.element as HTMLElement).style.opacity = '0';
        });
      }
    };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('wheel', onWheel);
    renderer.domElement.addEventListener('click', onClick);
    
    // Add touch event listeners
    renderer.domElement.addEventListener('touchstart', onTouchStart, { passive: false });
    renderer.domElement.addEventListener('touchmove', onTouchMove, { passive: false });
    renderer.domElement.addEventListener('touchend', onTouchEnd);
    
    // Add throttled hover effect
    let hoverTimeout: number;
    const throttledHover = (e: MouseEvent) => {
      if (hoverTimeout) return;
      hoverTimeout = window.setTimeout(() => {
        onHover(e);
        hoverTimeout = 0;
      }, 16);
    };
    renderer.domElement.addEventListener('mousemove', throttledHover);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clockRef.current.getElapsedTime();

      // Auto-rotation removed - only follow focused companion

      // Update perimeter pulse animation
      globeRef.current?.children.forEach((child) => {
        if (child.userData.material?.uniforms) {
          child.userData.material.uniforms.time.value = elapsedTime;
        }
      });

      // Animate arc glow with fade in/out
      arcsRef.current.forEach((arc) => {
        const material = arc.userData.material as THREE.LineBasicMaterial;
        const baseOpacity = arc.userData.baseOpacity;
        const offset = arc.userData.offset;
        
        // Create slow pulsing effect
        const pulse = Math.sin(elapsedTime * 0.8 + offset * Math.PI * 2) * 0.5 + 0.5;
        material.opacity = baseOpacity + pulse * 0.2;
      });

      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current || !labelRendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
      labelRendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('mouseup', onMouseUp);
      renderer.domElement.removeEventListener('wheel', onWheel);
      renderer.domElement.removeEventListener('click', onClick);
      renderer.domElement.removeEventListener('touchstart', onTouchStart);
      renderer.domElement.removeEventListener('touchmove', onTouchMove);
      renderer.domElement.removeEventListener('touchend', onTouchEnd);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
        if (labelRenderer.domElement.parentNode) {
          containerRef.current.removeChild(labelRenderer.domElement);
        }
      }
      renderer.dispose();
    };
  }, []);

  // Sync markers with companions (add/hide without rebuilding scene)
  useEffect(() => {
    if (!globeRef.current) return;
    const globeGroup = globeRef.current;
    const nextIds = new Set(companions.map(c => c.id));

    // Add new companions
    companions.forEach((c) => {
      if (!companionGroupsRef.current.has(c.id)) {
        const group = buildCompanionGroup(c);
        group.visible = true;
        companionGroupsRef.current.set(c.id, group);
        globeGroup.add(group);
      } else {
        const group = companionGroupsRef.current.get(c.id)!;
        group.visible = true;
      }
    });

    // Hide companions not in current list
    companionGroupsRef.current.forEach((group, id) => {
      if (!nextIds.has(id)) {
        group.visible = false;
        const label = labelsRef.current.get(id);
        if (label) (label.element as HTMLElement).style.opacity = '0';
      }
    });
  }, [companions]);

  // Highlight selected companion and animate camera to focused companion
  useEffect(() => {
    if (!selectedCompanion || !globeRef.current) return;

    markersRef.current.forEach((marker, id) => {
      const material = marker.material as THREE.MeshBasicMaterial;
      if (id === selectedCompanion.id) {
        material.color.setHex(0xffff00);
        marker.scale.set(2, 2, 2);
      } else {
        const isMartyr = companions.find(c => c.id === id)?.death_year === "8 AH / 629 CE";
        material.color.setHex(isMartyr ? 0xff0000 : 0x00ff00);
        marker.scale.set(1, 1, 1);
      }
    });
  }, [selectedCompanion, companions]);

  // Camera focus animation for timeline - smooth transition from current position
  useEffect(() => {
    if (!focusedCompanion || !cameraRef.current || !globeRef.current) return;

    setIsRotating(false);
    
    const targetPosition = latLongToVector3(
      focusedCompanion.latitude,
      focusedCompanion.longitude,
      2
    );

    // Calculate camera position to look at the marker
    const cameraDistance = 4.5;
    const targetCameraPosition = targetPosition.clone().normalize().multiplyScalar(cameraDistance);

    // Use current camera position as start (not reset)
    const startPosition = cameraRef.current.position.clone();
    const startTime = Date.now();
    const duration = 2000; // Slower, smoother transition

    let animationId: number;

    const animateCamera = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smoother easing function
      const eased = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      if (cameraRef.current) {
        cameraRef.current.position.lerpVectors(startPosition, targetCameraPosition, eased);
        cameraRef.current.lookAt(0, 0, 0);
      }

      if (progress < 1) {
        animationId = requestAnimationFrame(animateCamera);
      }
    };

    animateCamera();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [focusedCompanion]);

  // Calculate and emit pin screen position
  useEffect(() => {
    if (!focusedCompanion || !cameraRef.current || !containerRef.current) {
      onPinPosition?.(null);
      return;
    }

    const updatePinPosition = () => {
      if (!cameraRef.current || !containerRef.current) return;

      const targetPosition = latLongToVector3(
        focusedCompanion.latitude,
        focusedCompanion.longitude,
        2
      );

      // Project 3D position to 2D screen coordinates
      const vector = targetPosition.clone();
      vector.project(cameraRef.current);

      const rect = containerRef.current.getBoundingClientRect();
      const widthHalf = rect.width / 2;
      const heightHalf = rect.height / 2;

      const x = rect.left + (vector.x * widthHalf + widthHalf);
      const y = rect.top + (-vector.y * heightHalf + heightHalf);

      onPinPosition?.({ x, y });
    };

    // Update position initially and on a delay (after camera animation)
    updatePinPosition();
    const timer = setTimeout(updatePinPosition, 500);
    const interval = setInterval(updatePinPosition, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [focusedCompanion, onPinPosition]);


  return (
    <div ref={containerRef} className="w-full h-full" />
  );
};
