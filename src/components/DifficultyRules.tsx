import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'

export default function DifficultyRules () {
	const location = useLocation()
	if (location.state === undefined || location.state === null) {
		return <Navigate to="/motus"/> // Rediriger vers la page de base
	}
	const data = location.state
	const difficulty: string = data.difficulty
	const tip: number = data.tip
	const attempts: number = data.attempts
	const color: boolean = data.color

	return (
		<div className="rules">
			<h2>Difficulté : {difficulty}</h2>
			<p>Nombre d&rsquo;astuces restantes : {tip}</p>
			<p>Essais restants : {attempts}</p>
			<p>{color ? 'Couleur autorisée' : 'Couleur non autorisée'}</p>
		</div>
	)
}
