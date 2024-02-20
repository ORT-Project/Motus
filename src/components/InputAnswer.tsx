import React, { useState } from 'react'
import words from 'an-array-of-french-words'

export type WordHistoryProps = {
	answer: string
	historyInput: string[]
	setHistoryInput: (answer: string[]) => void
	inputValue: string
	setInputValue: (answer: string) => void
}
export default function InputAnswer ({
	answer,
	historyInput,
	setHistoryInput,
	inputValue,
	setInputValue
}: WordHistoryProps) {
	const [textErrorInput, setTextErrorInput] = useState<string>('')
	const nbInputStringLeft = answer.length - inputValue.length

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	function verifyInput (answer: string) {
		if (inputValue.length !== answer.length) return false // si pas la bonne longueur
		if (!/^[a-zA-Z]*$/.test(inputValue)) return false // si pas que des lettres
		if (!errorInput(inputValue.toLowerCase())) return false // si pas dans le dictionnaire
		if (historyInput.includes(inputValue.toUpperCase())) { // si déjà utilisé
			setTextErrorInput('Le mot ' + inputValue + ' a déjà été utilisé. Choisissez un autre mot.')
			return false
		}
		return true
	}

	function errorInput (InputValue: string) {
		if (!(words as any[]).includes(inputValue.toLowerCase())) {
			setTextErrorInput('Le mot ' + inputValue + ' n\'existe pas dans le dictionnaire. Veuillez réessayer.') // erreur
			return false
		}
		setTextErrorInput('') // reset de l'erreur
		return true
	}

	const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleClick()
		}
	}
	const handleClick = () => {
		if (verifyInput(answer)) { // si l'input est correct
			setHistoryInput([...historyInput, inputValue.toUpperCase()]) // ajout de l'input dans l'historique
			setInputValue('') // reset de l'input
		}
	}
	return (
		<div className="container-input">
			<input type="text" value={inputValue} onChange={handleInputChange} maxLength={answer.length}
				placeholder="Entrez votre réponse" onKeyDown={handlePressEnter}></input>
			<button onClick={handleClick}>Envoyer</button>
			<p>{nbInputStringLeft}</p>
			<p>{textErrorInput}</p>
		</div>
	)
}
