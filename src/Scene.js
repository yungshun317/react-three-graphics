import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Scene = () => {
    const cubeRef = useRef();
    const planeRef = useRef();
    const { gl, camera } = useThree();
    camera.position.x = 5;

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta;
        planeRef.current.rotation.y += delta;
        state.camera.position.x = Math.sin(state.clock.elapsedTime);
        console.log(state.clock.elapsedTime);
    });

    return (
        <>
            <mesh ref={planeRef} position-x={-2}>
                <planeGeometry args={[2, 2]} />
                <meshBasicMaterial color="orange" side={THREE.DoubleSide} />
            </mesh>
            <mesh ref={cubeRef} position-x={2}>
                <boxGeometry />
                <meshBasicMaterial color="purple" />
            </mesh>
        </>
    );
};

export default Scene;