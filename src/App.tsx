import * as React from 'react'
import { Canvas } from 'react-three-fiber'

export default function App() {
	return (
		<Canvas>
			<mesh>
				<boxBufferGeometry />
				<meshNormalMaterial />
			</mesh>
		</Canvas>
	)
}