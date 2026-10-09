import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Helmet } from "react-helmet-async";

// components
import { Loader, HomeInfo } from "../components";

// models
import { Island, Sky, Bird, Plane } from "../models";

// assets
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

// constants
import { SITE_NAME } from "../constants";

// home
const Home = () => {
  // refs
  const audioRef = useRef(new Audio(sakura));
  // update audio ref
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  // states
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);

  // Auto-play music on mount with browser autoplay policy handling
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let hasStarted = false;

    // Function to attempt playback
    const startAudio = () => {
      if (hasStarted) return;
      audio
        .play()
        .then(() => {
          hasStarted = true;
          setIsPlayingMusic(true);
          // Remove interaction listeners once successfully playing
          window.removeEventListener("click", startAudio);
          window.removeEventListener("touchstart", startAudio);
          window.removeEventListener("keydown", startAudio);
        })
        .catch(() => {
          // If browser blocked immediate unprompted autoplay, wait for first user gesture
        });
    };

    // Try starting immediately
    startAudio();

    // Browser autoplay policy fallback: start as soon as user touches or clicks anywhere
    window.addEventListener("click", startAudio, { once: true });
    window.addEventListener("touchstart", startAudio, { once: true });
    window.addEventListener("keydown", startAudio, { once: true });

    return () => {
      window.removeEventListener("click", startAudio);
      window.removeEventListener("touchstart", startAudio);
      window.removeEventListener("keydown", startAudio);
    };
  }, []);

  // On music state toggle
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlayingMusic) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlayingMusic]);

  // Dynamic screen dimensions state to handle window resizing / orientation change
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // Function to adjust island parameters based on screen size
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    // Responsive scaling based on device viewport
    if (screenSize.width < 440) {
      // Small mobile phones (320px - 430px)
      screenScale = [0.65, 0.65, 0.65];
      screenPosition = [0, -4.5, -43];
    } else if (screenSize.width < 768) {
      // Tablets / larger phones
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [0, -5.5, -43];
    } else {
      // Desktop
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43];
    }

    return [screenScale, screenPosition, rotation];
  };

  // Function to adjust plane parameters based on screen size
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (screenSize.width < 440) {
      screenScale = [1.1, 1.1, 1.1];
      screenPosition = [0, -1.2, 0];
    } else if (screenSize.width < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <>
      {/* update site title */}
      <Helmet>
        <title>{SITE_NAME} | Portfolio</title>
      </Helmet>

      {/* home section */}
      <section className="w-full h-screen relative overflow-hidden">
        {/* current stage info banner */}
        <div className="absolute top-20 sm:top-28 left-0 right-0 z-20 flex items-center justify-center px-4 pointer-events-none">
          <div className="pointer-events-auto max-w-lg w-full flex justify-center">
            {currentStage && <HomeInfo currentStage={currentStage} />}
          </div>
        </div>
        {/* Three.js Canvas Component */}
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          {/* Suspense for handling loading state */}
          <Suspense fallback={<Loader />}>
            {/* Directional light for realistic lighting */}
            <directionalLight position={[1, 1, 1]} intensity={2} />

            {/* Ambient light for overall scene illumination */}
            <ambientLight intensity={0.5} />

            {/* Hemisphere light for sky and ground color */}
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={1}
            />

            {/* Bird component */}
            <Bird />

            {/* Sky component with rotation control */}
            <Sky isRotating={isRotating} />

            {/* Island component with dynamic position, scale, rotation, and interaction props */}
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />

            {/* Plane component with rotation control, scale, position, and initial rotation */}
            <Plane
              isRotating={isRotating}
              scale={planeScale}
              position={planePosition}
              rotation={[0, 20, 0]}
            />
          </Suspense>
        </Canvas>

        {/* Sound On/Off toggle button */}
        <aside
          className="absolute bottom-2 left-2"
          title={isPlayingMusic ? "Sound On" : "Sound Off"}
        >
          <img
            src={isPlayingMusic ? soundon : soundoff}
            alt={isPlayingMusic ? "Sound On" : "Sound Off"}
            className="w-10 h-10 cursor-pointer object-contain"
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          />
        </aside>
      </section>
    </>
  );
};

export default Home;
