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
			<p>Le jeu de mots où il faut deviner un mot en un minimum d&rsquo;essais !</p>
			<div className="difficulty-container">
				<Link onClick={handleEasy} to="/motus/game">
					<img src={easy} alt="easy" width="300"/>
				</Link>
				<Link onClick={handleMedium} to="/motus/game">
					<img src={medium} alt="medium" width="300"/>
				</Link>
				<Link onClick={handleHard} to="/motus/game">
					<img src={hard} alt="hard" width="300"/>
				</Link>
				<Link onClick={handleImpossible} to="/motus/game">
					<img src={impossible} alt="impossible" width="300"/>
				</Link>
			</div>
			<button className="play-button">Jouer</button>
		</div>
	)
}
