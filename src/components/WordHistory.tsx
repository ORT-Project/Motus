import React from 'react'

export type WordHistoryProps = {
	answer: string
	historyInput: string[]
	inputValue: string
}
export default function WordHistory ({ answer, historyInput, inputValue }: WordHistoryProps) {
	// state

	// render
	return (
		<div>
			<p>{inputValue}</p>
			<ul>
				{historyInput.map((answer) => (
					<li key={answer}>{answer}</li>
				))}
			</ul>
		</div>
	)
}
