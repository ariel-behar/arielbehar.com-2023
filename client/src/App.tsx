import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience/Experience";

function App() {
	return (
		<>
			<Canvas
				camera={{
					fov: 45,
					near: 0.1,
					far: 200,
					position: [4, 1, 7],
				}}
			>
				<Experience />
			</Canvas>
		</>
	);
}

export default App;
