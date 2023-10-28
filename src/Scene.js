import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Scene = () => {
    const cubeRef = useRef();
    // const planeRef = useRef();
    const { gl, camera } = useThree();

    useFrame((state, delta) => {
        state.camera.position.x = Math.sin(state.clock.elapsedTime);
        console.log(state.clock.elapsedTime);
    });

    return (
        <>
            <mesh ref={cubeRef} position-x={2}>
                <boxGeometry />
                <meshBasicMaterial color="purple" />
            </mesh>
        </>
    );
};

export default Scene;