import { useGLTF } from "@react-three/drei"

function Harley() {
    const { nodes, scene } = useGLTF('./models/harley/scene.gltf')
    
    return <>
        <primitive object={scene} />
    
    </>;
}

export default Harley;
