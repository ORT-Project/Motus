import React from 'react'
import { useLocation } from 'react-router-dom'

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
	const nbInputStringLeft = answer.length - inputValue.length
	const location = useLocation()
	const locationState = location.state

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	function verifyInput (answer: string) {
		if (inputValue.length !== answer.length) return false // si pas la bonne longueur
		if (!/^[a-zA-Z]*$/.test(inputValue)) return false // si pas que des lettres
		return true
	}

	const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleClick()
		}
	}

	const handleClick = () => {
		if (verifyInput(answer)) {
			setHistoryInput([...historyInput, inputValue.toUpperCase()])
			setInputValue('')
			// attempts -1
			locationState.attempts = locationState.attempts - 1
		}
	}

	if (locationState.attempts !== 0) { // attempts !== 0
		return (
			<div className="input">
				<div className="container-input visible-game">
					<input type="text" value={inputValue} onChange={handleInputChange} maxLength={answer.length}
						   placeholder="Entrez votre réponse" onKeyDown={handlePressEnter}></input>
					<button onClick={handleClick}>Envoyer</button>
					<p>{nbInputStringLeft}</p>
				</div>
			</div>
		)
	} else {
		return (
			<div className="lose-game">
				<p>Vous avez <strong>perdu</strong> la partie, rejouer ?</p>
			</div>
		)
	}
}
