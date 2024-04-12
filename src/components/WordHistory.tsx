import React from 'react'
import { type LocationDifficulty } from '../entities/LocationDifficulty'

export type WordHistoryProps = {
	answer: string
	historyInput: string[]
	inputValue: string
	locationDifficulty: LocationDifficulty
}
export default function WordHistory ({
	answer,
	historyInput,
	inputValue,
	locationDifficulty
}: WordHistoryProps) {
	const wordLetter = answer.split('')

	const verifyLetter = (letter: string, index: number, wordLetter: string[]) => {
		if (locationDifficulty.isColor()) {
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
		<div className="history">
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
