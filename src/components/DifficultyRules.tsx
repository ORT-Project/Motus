import React, { useState } from 'react'
import { useLocation, Navigate } from 'react-router-dom'

export type DifficultyRulesProps = {
	answer: string
}
export default function DifficultyRules ({ answer }: DifficultyRulesProps) {
	const location = useLocation()
	const locationState = location.state
	if (locationState === undefined || locationState === null) {
		return <Navigate to="/motus"/> // Rediriger vers la page de base
	}
	const [consonants, setConsonants] = useState(0)
	const [vowels, setVowels] = useState(0)

	const compterSyllabesEtVoyelles = (word: string) => {
		word = word.toLowerCase().trim()
		const consonants = (word.match(/[^aeiouy]/ig) ?? []).length
		const vowels = (word.match(/[aeiouy]/ig) ?? []).length
		return {
			consonants,
			vowels
		}
	}

	const handleClick = () => {
		const result = compterSyllabesEtVoyelles(answer)
		setConsonants(result.consonants)
		setVowels(result.vowels)
		locationState.tip = locationState.tip - 1
	}

	if (consonants === 0 && vowels === 0) {
		return (
			<div className="column-right">
				<div className="rules">
					<p>😈 Difficulté : {locationState.difficulty}</p>
					<p>🤖 Nombre d&rsquo;indices restants : {locationState.tip}</p>
					<p>🩹 Essais restants : {locationState.attempts}</p>
					<p>☄️ {locationState.color ? 'Couleur autorisée' : 'Couleur non autorisée'}</p>
				</div>
				<div className="rules">
					<button onClick={handleClick}>Besoin d&rsquo;un indice ?</button>
				</div>
			</div>
		)
	} else {
		return (
			<div className="column-right">
				<div className="rules">
					<p>😈 Difficulté : {locationState.difficulty}</p>
					<p>🤖 Nombre d&rsquo;indices restants : {locationState.tip}</p>
					<p>🩹 Essais restants : {locationState.attempts}</p>
					<p>☄️ {locationState.color ? 'Couleur autorisée' : 'Couleur non autorisée'}</p>
				</div>
				<div className="rules">
					<p>Il y a {consonants} consonnes et {vowels} voyelles.</p>
				</div>
			</div>
		)
	}
}
