import React from 'react'
import './Motus.css'
import easy from '../resources/images/black_swan.png'
import medium from '../resources/images/jingliu.png'
import hard from '../resources/images/sparkle.png'
import impossible from '../resources/images/ruan_mei.png'
import { Link } from 'react-router-dom'

export default function App () {
	const handleEasy = () => {
		alert('easy')
	}
	const handleMedium = () => {
		alert('medium')
	}
	const handleHard = () => {
		alert('hard')
	}
	const handleImpossible = () => {
		alert('impossible')
	}
	// affichage (render)
	return (
		<div className="container">
			<h1>Bienvenue sur Motus</h1>
			<p>Le jeu de mots où il faut deviner un mot en un minimum d&quot;essais !</p>
			<div className="difficulty-container">
				<Link onClick={handleEasy} to="/motus/game">
					<img src={easy} alt="easy" width="200"/>
				</Link>
				<img onClick={handleMedium} src={medium} alt="medium" width="200"/>
				<img onClick={handleHard} src={hard} alt="hard" width="200"/>
				<img onClick={handleImpossible} src={impossible} alt="impossible" width="200"/>
			</div>
			<button className="play-button">Jouer</button>
		</div>
	)
}
