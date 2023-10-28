import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
// import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Canvas
        camera={{
            fov: 75,
            near: 0.1,
            far: 100
        }}
    >
        <Scene />
    </Canvas>
);