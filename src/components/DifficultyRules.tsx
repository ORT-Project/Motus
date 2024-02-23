import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'

export default function DifficultyRules () {
	const location = useLocation()
	const locationState = location.state
	if (locationState === undefined || locationState === null) {
		return <Navigate to="/motus"/> // Rediriger vers la page de base
	}

	return (
		<div className="column-right">
			<div className="rules">
				<p>😈 Difficulté : {locationState.difficulty}</p>
				<p>🤖 Nombre d&rsquo;indices restants : {locationState.tip}</p>
				<p>🩹 Essais restants : {locationState.attempts}</p>
				<p>☄️ {locationState.color ? 'Couleur autorisée' : 'Couleur non autorisée'}</p>
			</div>
			<div className="rules">

			</div>
		</div>
	)
}
