import React, { useState } from 'react'
import { type LocationDifficulty } from '../entities/LocationDifficulty'
import useApi from '../hook/useApi'
import type { Theme, Word } from '../type'

export type WordHistoryProps = {
	answer: string
	historyInput: string[]
	setHistoryInput: (answer: string[]) => void
	inputValue: string
	setInputValue: (answer: string) => void
	locationDifficulty: LocationDifficulty
	style: string
}
export default function InputAnswer ({
	answer,
	historyInput,
	setHistoryInput,
	inputValue,
	setInputValue,
	locationDifficulty,
	style
}: WordHistoryProps) {
	const [textErrorInput, setTextErrorInput] = useState<string>('')
	const nbInputStringLeft = answer.length - inputValue.length
	const [win, setWin] = useState(false)
	const { data: wordsDataApi } = useApi<Theme[]>('theme/alias/' + style)
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	async function verifyInput (answer: string) {
		if (inputValue.length !== answer.length) return false // si pas la bonne longueur
		if (!/^[a-zA-Z]*$/.test(inputValue)) return false // si pas que des lettres
		if (!(await errorInput(inputValue))) return false // si pas dans le dictionnaire
		if (historyInput.includes(inputValue.toUpperCase())) { // si déjà utilisé
			setTextErrorInput(`Le mot ${inputValue} a déjà été utilisé. Choisissez un autre mot.`)
			return false
		}
		return true
	}

	async function errorInput (wordInput: string): Promise<boolean> {
		const wordExists = await wordDontExist(wordInput.toLowerCase())
		setTextErrorInput(wordExists ? '' : `Le mot ${wordInput} n'existe pas dans le dictionnaire. Veuillez réessayer.`)
		return wordExists
	}

	async function wordDontExist (searchedWord: string): Promise<boolean> {
		if (!wordsDataApi) {
			throw new Error('No data')
		}

		const wordDoesExistApi = wordsDataApi[0].words.some((word: Word) => word.word === searchedWord.toLowerCase()) // si le mot existe dans l'api return true, sinon false
		if (!wordDoesExistApi) return false // si le mot n'existe pas dans l'api ou dans la librairie return false

		return true
	}

	const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleClick()
		}
	}

	const handleClick = async () => {
		if (await verifyInput(answer)) {
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
			<div>
				<div className="container-input visible-game">
					<input type="text" value={inputValue} onChange={handleInputChange} maxLength={answer.length}
						placeholder="Entrez votre réponse" onKeyDown={handlePressEnter}
						className="input-answer"></input>
					<button onClick={() => {
						handleClick()
					}}>Envoyer
					</button>
					<div className="number-left">
						<p>{nbInputStringLeft}</p>
					</div>

				</div>
				<div className="error-input">
					<p>{textErrorInput}</p>
				</div>
			</div>

		)
	} else {
		return (
			<div className="lose-game">
				<p>Vous avez <strong>perdu</strong> la partie, rejouer ? <br/>
                    La réponse était <strong>{answer.toLowerCase()}</strong>.</p>
			</div>
		)
	}
}
