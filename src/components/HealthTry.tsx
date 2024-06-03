import React from 'react'
import '../home/styles/App.css'
import heartImage from '../resources/images/purple_heart.png'
import { type LocationDifficulty } from '../entities/LocationDifficulty'

export type HealthTryProps = {
	locationDifficulty: LocationDifficulty
}
export default function HealthTry ({ locationDifficulty }: HealthTryProps) {
	const hearts: string[] = []

	for (let i = 0; i < locationDifficulty.getAttempts(); i++) {
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
