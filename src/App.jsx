import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useEffect, useState } from "react";
import { Cursor } from "./components/Cursor.jsx";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager.jsx";
import { framerMotionConfig } from "./config";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [7, 2.5, 7], fov: 30 }}>
          <color attach="background" args={["#e6e7ff"]} />
          <ScrollControls pages={5.2} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Cursor />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
