import React, { useState } from 'react'

export default function WordHistory () {
	// state
	const [answers, addAnswer] = useState<string[]>([])
	const [inputValue, setInputValue] = useState<string>('')

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
			<input type="text" value={inputValue} onChange={handleInputChange}
				   placeholder="Entrez votre réponse"></input>
			<button onClick={handleClick}>Envoyer</button>
			<p>{inputValue}</p>
			<ul>
				{answers.map((answer) => (
					<li key={answer}>{answer}</li>
				))}
			</ul>
		</div>
	)
}
