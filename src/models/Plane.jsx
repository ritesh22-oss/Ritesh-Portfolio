// Import React hooks and components
import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// Import the 3D model file for the plane
import planeScene from "../assets/3d/plane.glb";

// Plane component definition
const Plane = ({ isRotating, ...props }) => {
  // Create a reference for the plane mesh
  const ref = useRef();

  // Load the 3D model and animations using useGLTF and useAnimations hooks
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  // Use useEffect to play or stop the animation based on isRotating
  useEffect(() => {
    if (actions && actions["Take 001"]) {
      if (isRotating) {
        actions["Take 001"].play();
      } else {
        actions["Take 001"].stop();
      }
    }
  }, [actions, isRotating]);

  // Subtle flight float animation keeping plane visible and dynamic
  useFrame(({ clock }) => {
    if (ref.current) {
      // Gentle natural hovering oscillation
      ref.current.position.y = (props.position?.[1] || -1.5) + Math.sin(clock.elapsedTime * 2) * 0.2;
      ref.current.rotation.z = Math.sin(clock.elapsedTime * 1.5) * 0.05;
    }
  });

  // Return the JSX for the Plane component with mesh and primitive
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

// Export the Plane component as the default export
export default Plane;
