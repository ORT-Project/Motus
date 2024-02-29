import React, { useState } from 'react'
import { LocationDifficulty } from '../entities/LocationDifficulty'
import { useLocation } from 'react-router-dom'

export type DifficultyRulesProps = {
	answer: string
}
export default function DifficultyRules ({ answer }: DifficultyRulesProps) {
	const [consonants, setConsonants] = useState(0)
	const [vowels, setVowels] = useState(0)
	const locationDifficulty = new LocationDifficulty(useLocation())
	locationDifficulty.checkLocationState(useLocation())

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
		locationDifficulty.setTip(locationDifficulty.getTip() - 1)
	}

	if (consonants === 0 && vowels === 0) {
		return (
			<div className="column-right">
				<div className="rules">
					<p>😈 Difficulté : {locationDifficulty.getDifficulty()}</p>
					<p>🤖 Nombre d&rsquo;indices restants : {locationDifficulty.getTip()}</p>
					<p>🩹 Essais restants : {locationDifficulty.getAttempts()}</p>
					<p>☄️ {locationDifficulty.isColor() ? 'Couleur autorisée' : 'Couleur non autorisée'}</p>
				</div>
				<div className="rules">
					<button onClick={handleClick} className='button-style'>Besoin d&rsquo;un indice ?</button>
				</div>
			</div>
		)
	} else {
		return (
			<div className="column-right">
				<div className="rules">
					<p>😈 Difficulté : {locationDifficulty.getDifficulty()}</p>
					<p>🤖 Nombre d&rsquo;indices restants : {locationDifficulty.getTip()}</p>
					<p>🩹 Essais restants : {locationDifficulty.getAttempts()}</p>
					<p>☄️ {locationDifficulty.isColor() ? 'Couleur autorisée' : 'Couleur non autorisée'}</p>
				</div>
				<div className="rules">
					<p>Il y a {consonants} consonnes et {vowels} voyelles.</p>
				</div>
			</div>
		)
	}
}
