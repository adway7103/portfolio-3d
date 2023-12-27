import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  OrbitControls,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
export const Experience = (props) => {
  const { section, menuOpened } = props;
  const { viewport } = useThree();

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>
      <group rotation-y={Math.PI / 50}>
        <ambientLight intensity={1} />
        <motion.group
          position={[0.8, 5, 3.4]}
          scale={[0.9, 0.9, 0.9]}
          rotation-y={-Math.PI / 6.5}
          animate={{
            y: section === 0 ? 0 : -1,
          }}
        >
          <group
            scale={[1, 1, 1]}
            position={[-0.25, 0.25, -0.6]}
            rotation-y={Math.PI - Math.PI / 10}
          >
            <Avatar animation={section === 0 ? "Typing" : "Falling"} />
          </group>
          <Office section={section} />
        </motion.group>

        {/* SKILLS */}
        <motion.group
          position={[0, -1.5, -10]}
          animate={{
            z: section === 1 ? 0 : -10,
            y: section === 1 ? -viewport.height : -1.5,
          }}
        >
          <directionalLight position={[-5, 3, 5]} intensity={0.4} />
          <Float>
            <mesh position={[-5, -1, -2]} scale={[2, 2, 2]}>
              <sphereGeometry />
              <MeshDistortMaterial
                opacity={0.8}
                transparent
                distort={0.4}
                speed={4}
                color={"red"}
              />
            </mesh>
          </Float>
          <Float>
            <mesh scale={[1, 1, 1]} position={[-3, 1, -2]}>
              <sphereGeometry />
              <MeshDistortMaterial
                opacity={0.8}
                transparent
                distort={1}
                speed={5}
                color="green"
              />
            </mesh>
          </Float>
          <Float>
            <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -1]}>
              <boxGeometry />
              <MeshWobbleMaterial
                opacity={0.8}
                transparent
                factor={1}
                speed={5}
                color={"blue"}
              />
            </mesh>
          </Float>
        </motion.group>
      </group>
    </>
  );
};
