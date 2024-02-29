import React, { useState } from 'react'
import { type LocationDifficulty } from '../entities/LocationDifficulty'
import { WordsUtils } from '../utils/WordsUtils'

export type WordHistoryProps = {
	answer: string
	historyInput: string[]
	setHistoryInput: (answer: string[]) => void
	inputValue: string
	setInputValue: (answer: string) => void
	locationDifficulty: LocationDifficulty
}
export default function InputAnswer ({
	answer,
	historyInput,
	setHistoryInput,
	inputValue,
	setInputValue,
	locationDifficulty
}: WordHistoryProps) {
	const [textErrorInput, setTextErrorInput] = useState<string>('')
	const nbInputStringLeft = answer.length - inputValue.length
	const wordsUtils = new WordsUtils()
	const [win, setWin] = useState(false)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	function verifyInput (answer: string) {
		if (inputValue.length !== answer.length) return false // si pas la bonne longueur
		if (!/^[a-zA-Z]*$/.test(inputValue)) return false // si pas que des lettres
		if (!errorInput(inputValue)) return false // si pas dans le dictionnaire
		if (historyInput.includes(inputValue.toUpperCase())) { // si déjà utilisé
			setTextErrorInput(`Le mot ${inputValue} a déjà été utilisé. Choisissez un autre mot.`)
			return false
		}
		return true
	}

	function errorInput (wordInput: string) {
		const wordExists = wordsUtils.wordDontExist(wordInput.toLowerCase())
		setTextErrorInput(wordExists ? '' : `Le mot ${wordInput} n'existe pas dans le dictionnaire. Veuillez réessayer.`)
		return wordExists
	}

	const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleClick()
		}
	}

	const handleClick = () => {
		if (verifyInput(answer)) {
			setHistoryInput([...historyInput, inputValue.toUpperCase()])
			if (inputValue.toUpperCase() === answer.toUpperCase()) {
				setWin(true)
				return
			}
			setInputValue('')
			locationDifficulty.setAttempts(locationDifficulty.getAttempts() - 1)
		}
	}

	if (win) {
		return (
			<div className="win-game">
				<p>Vous avez <strong>gagné</strong> la partie, félicitations !</p>
			</div>
		)
	} else if (locationDifficulty.getAttempts() !== 0) {
		return (
			<div className="container-input visible-game">
				<input type="text" value={inputValue} onChange={handleInputChange} maxLength={answer.length}
					placeholder="Entrez votre réponse" onKeyDown={handlePressEnter}></input>
				<button onClick={handleClick}>Envoyer</button>
				<p>{nbInputStringLeft}</p>
				<p>{textErrorInput}</p>
			</div>
		)
	} else {
		return (
			<div className="lose-game">
				<p>Vous avez <strong>perdu</strong> la partie, rejouer ? La réponse
                    était <strong>{answer.toLowerCase()}</strong>.</p>
			</div>
		)
	}
}
