import React from "react";
import {
  useGLTF,
  Float,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
} from "@react-three/drei";

const Mac = () => {
  const mac = useGLTF("./mac.gltf");

  return (
    <>
    {/* Controls */}
      <PresentationControls
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]} //up-down limitation
        azimuth={[-1, 0.75]} //right-left limitation
        config={{ mass: 2, tension: 400 }} // add animation when you drag the model
        snap={{ mass: 4, tension: 400 }} // it get the model back to the right position
      >
        <Float rotationIntensity={0.4}>
          {/* Lights */}
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#D3D3D3"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          {/* Model */}
          <primitive object={mac.scene} position-y={-1.2}>

            {/* WebSite Screen */}
            <Html
              transform
              wrapperClass="macScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://aliabdallateef97.github.io/MovieClub/" />
            </Html>
          </primitive>

          {/* Project Title */}
          <Text
            font="bangers-v20-latin-regular.woff"
            fontSize={0.8}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
          >
            Movie Club
          </Text>
        </Float>
      </PresentationControls>

      {/* Shadow */}
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};

export default Mac;

useGLTF.preload("./mac.gltf")
