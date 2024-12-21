/*
  Auto-generated by: https://github.com/pmndrs/gltfjsx
  Author: victory_mirosya (https://sketchfab.com/victory_mirosya)
  License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
  Source: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
  Title: Fox
*/

// Import React hooks and components
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

// Import the 3D model file for the fox
import foxScene from "../assets/3d/fox.glb";

// Fox component definition
const Fox = ({ currentAnimation, ...props }) => {
  // Create a reference for the group that contains the fox model
  const group = useRef();

  // Load the 3D model and animations using useGLTF and useAnimations hooks
  const { nodes, materials, animations } = useGLTF(foxScene);
  const { actions } = useAnimations(animations, group);

  // Use useEffect to play the specified animation when it changes
  useEffect(() => {
    // Stop all existing animations
    Object.values(actions).forEach((action) => action.stop());

    // Play the selected animation if it exists
    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  // Return the JSX for the Fox component with group, mesh, and skeleton
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />

        {/* SkinnedMesh components for different parts of the fox */}
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
};

// Export the Fox component as the default export
export default Fox;
