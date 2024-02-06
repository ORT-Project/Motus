import React from 'react'
import './Motus.css'

export default function App () {
	const handleHard = () => {
		alert('hard')
	}

	const handleEasy = () => {
		alert('easy')
	}

	// affichage (render)
	return (
		<div className="container">
			<h1>Bienvenue sur Motus</h1>
			<p>Le jeu de mots où il faut deviner un mot en un minimum d&quot;essais !</p>
			<div className="difficulty-container">
				<div className="difficulty-banner difficulty-easy" onClick={handleEasy}>
				</div>
				<div className="difficulty-banner difficulty-hard" onClick={handleHard}>
				</div>
			</div>
			<button className="play-button">Jouer</button>
		</div>
	)
}
