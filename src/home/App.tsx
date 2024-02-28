import React, { useState } from 'react'
import './styles/App.css'
import heartImage from '../resources/images/heart.png'

export default function App () {
	const hearts: string[] = []
	const [numHearts, setNumHearts] = useState(9)

	for (let i = 0; i < numHearts; i++) {
		hearts.push(heartImage)
	}

	const handleClick = () => {
		setNumHearts(numHearts - 1)
	}

	return (
		<div className='container'>
			<div className='heart-container'>
				{
					hearts.map((heart, index) =>
						<img key={index} src={heart} alt='heart'/>
					)
				}
				<button onClick={handleClick}>Essai</button>
			</div>
		</div>
	)
}
