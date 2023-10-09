import * as THREE from 'three'
import { OrbitControls, Environment } from "@react-three/drei";
import Avatar from "./Avatar";
import Harley from "./Harley";

function Experience() {

    
	return (
		<>
            <OrbitControls />
            <axesHelper args={[5]} position={[0, 0, 0]} />
            <Environment preset="warehouse" background />

			<Harley position={[0, 0.5, 1]} rotation={[0, Math.PI, 0]} scale={1}/>
            <Avatar position={[1, 0, 1]} rotation={[0,0, 0]} scale={1} />

            <mesh position-y={-0.5}  >
                <boxGeometry args={[10, 1, 10]} />
                <meshBasicMaterial side={THREE.DoubleSide} color={'lightblue'} />
            </mesh>
		</>
	);
}

export default Experience;
