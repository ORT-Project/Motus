import React from 'react'

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

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	const handleClick = () => {
		setHistoryInput([...historyInput, inputValue])
		setInputValue('')
	}

	return (
		<div className="container-input">
			<input type="text" value={inputValue} onChange={handleInputChange} maxLength={answer.length}
				placeholder="Entrez votre réponse"></input>
			<button onClick={handleClick}>Envoyer</button>
			<p>{nbInputStringLeft}</p>
		</div>
	)
}
