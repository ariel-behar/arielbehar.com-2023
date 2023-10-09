import { Float, Text } from "@react-three/drei";

function Title() {
	return (
		<>
			<Float rotationIntensity={0.4}>
				<Text
					font="../../assets/fonts/bangers-v20-latin-regular.woff"
					fontSize={1}
					position={[0, 0.75, 2]}
					rotation-y={1.25}
					maxWidth={3}
					textAlign="center"
				>
					Ariel Behar
				</Text>
			</Float>
		</>
	);
}

export default Title;
