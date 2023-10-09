import { useGLTF } from "@react-three/drei"

interface Props {
    position?: number[]
    rotation?: number[]
    scale?: number
}


function Harley(props: Props) {
    const { nodes, scene }: any = useGLTF('./models/harley/scene.gltf')
    
    return <>
        <primitive object={scene} {...props}/>
    </>;
}

export default Harley;
