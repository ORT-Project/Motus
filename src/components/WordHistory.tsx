import React from 'react'
import { useLocation } from 'react-router-dom'

export type WordHistoryProps = {
	answer: string
	historyInput: string[]
	inputValue: string
}
export default function WordHistory ({
	answer,
	historyInput,
	inputValue
}: WordHistoryProps) {
	const wordLetter = answer.split('')
	const location = useLocation()
	const locationState = location.state

	const verifyLetter = (letter: string, index: number, wordLetter: string[]) => {
		if (locationState.color) {
			if (letter === wordLetter[index]) {
				return 'green'
			} else if (answer.includes(letter)) {
				return 'orange'
			} else {
				return 'red'
			}
		} else {
			if (letter === wordLetter[index]) {
				return 'green'
			} else {
				return 'red'
			}
		}
	}

	// render
	return (
		<div>
			<table>
				<tbody>
					{historyInput.map((answer, index) => (
						<tr key={index} className={'container-history'}>
							{answer.split('').map((letter, indexLetter) => (
								<td key={indexLetter}
									className={verifyLetter(letter, indexLetter, wordLetter)}>{letter}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
