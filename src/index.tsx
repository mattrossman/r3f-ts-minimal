import * as React from 'react'
import { render } from 'react-dom'
import { Canvas } from 'react-three-fiber'


function App() {
	return (
		<Canvas>
			<mesh>
				<boxBufferGeometry />
				<meshNormalMaterial />
			</mesh>
		</Canvas>
	)
}

render(<App />, document.getElementById('root'))