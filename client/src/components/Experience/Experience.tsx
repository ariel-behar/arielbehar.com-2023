import * as THREE from 'three'
import { OrbitControls } from "@react-three/drei";
import Avatar from "./Avatar";
import Harley from "./Harley";

function Experience() {

    
	return (
		<>
            <OrbitControls />
            <axesHelper args={[5]} position={[0, 0, 0]} />
			<Harley />
            <Avatar />

            <mesh position-y={-0.5}  >
                <boxGeometry args={[10, 1, 10]} />
                <meshBasicMaterial side={THREE.DoubleSide} color={'lightblue'} />
            </mesh>
		</>
	);
}

export default Experience;
