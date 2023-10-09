import { Float, Text } from "@react-three/drei";

function Title() {
	return (
		<>
			<Float rotationIntensity={0.4}>
				<Text
					font="./fonts/bangers-v20-latin-regular.woff"
					fontSize={1}
                    color={'blue'}
					position={[0, 0.75, 2]}
					rotation-y={0.75}
					maxWidth={2}
					textAlign="center"
				>
					Ariel Behar
				</Text>
			</Float>
		</>
	);
}

export default Title;
