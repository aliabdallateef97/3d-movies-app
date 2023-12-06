import React from "react";
import {
  useGLTF,
  Float,
  PresentationControls,
  ContactShadows,
  Html,
} from "@react-three/drei";

const Iphone = () => {
  const iphone = useGLTF("./iphone.gltf");
  return (
    <>
      <PresentationControls
        rotation={[-0.2, -0.6, -0.1]}
        polar={[-0.4, 0.2]} //up-down limitation
        azimuth={[-1, 0.75]} //right-left limitation
        config={{ mass: 2, tension: 400 }} // add animation when you drag the model
        snap={{ mass: 4, tension: 400 }} // it get the model back to the right position
      >
        <Float rotationIntensity={0.4}>
          <primitive object={iphone.scene} position-y={-1.4}>
            <Html transform wrapperClass="iphoneScreen"
             distanceFactor={1.55}
             position={[0.18, 1.316, 0]}
            //  rotation-x={-0.256}
              >
              <iframe src="https://aliabdallateef97.github.io/MovieClub/" />
            </Html>
          </primitive>
        </Float>
      </PresentationControls>

      {/* Shadow */}
      <ContactShadows position-y={-2} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};

export default Iphone;

useGLTF.preload("./iphone.gltf")