import React, { useState } from 'react'

export type WordHistoryProps = {
	answer: string
}
export default function WordHistory ({ answer }: WordHistoryProps) {
	// state
	const [answers, addAnswer] = useState<string[]>([])
	const [inputValue, setInputValue] = useState<string>('')
	const nbInputStringLeft = answer.length - inputValue.length
	// comportements
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	const handleClick = () => {
		addAnswer([...answers, inputValue])
		setInputValue('')
	}

	// render
	return (
		<div>
			<input type="text" value={inputValue} onChange={handleInputChange} maxLength={answer.length}
				placeholder="Entrez votre réponse"></input>
			<button onClick={handleClick}>Envoyer</button>
			<p>{nbInputStringLeft}</p>
			<p>{inputValue}</p>
			<ul>
				{answers.map((answer) => (
					<li key={answer}>{answer}</li>
				))}
			</ul>
		</div>
	)
}
