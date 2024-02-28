import React from 'react'
import '../home/styles/App.css'
import heartImage from '../resources/images/new_heart.png'
import { useLocation } from 'react-router-dom'

export default function HealthTry () {
	const hearts: string[] = []
	const location = useLocation()
	const locationState = location.state

	for (let i = 0; i < locationState.attempts; i++) {
		hearts.push(heartImage)
	}

	return (
		<div className='heart-container'>
			{
				hearts.map((heart, index) =>
					<img key={index} src={heart} alt='heart'/>
				)
			}
		</div>
	)
}
