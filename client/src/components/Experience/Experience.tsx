import * as THREE from 'three'
import { OrbitControls, Environment } from "@react-three/drei";
import Avatar from "./Avatar";
import Harley from "./Harley";
import Title from './Title';
import { Perf } from 'r3f-perf';

function Experience() {
    
	return (
		<>
            <Perf position='top-left' />
            <OrbitControls />

            <axesHelper args={[5]} position={[0, 0, 0]} />

            <Environment preset="warehouse"  />
            
            <Title />

			<Harley position={[3, 0.5, 2]} rotation={[0, Math.PI - 0.4, 0]} scale={1}/>
            <Avatar position={[3.5, 0, 2]} rotation={[0,-0.3, 0]} scale={1} />

            <mesh position-y={-0.5}  >
                <boxGeometry args={[10, 1, 10]} />
                <meshBasicMaterial side={THREE.DoubleSide} color={'lightblue'} />
            </mesh>
		</>
	);
}

export default Experience;
