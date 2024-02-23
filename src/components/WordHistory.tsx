import React from 'react'

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

	const verifyLetter = (letter: string, index: number, wordLetter: string[]) => {
		if (letter === wordLetter[index]) {
			return 'green'
		} else if (answer.includes(letter)) {
			return 'orange'
		} else {
			return 'red'
		}
	}

	// render
	return (
		<div>
			<p>{inputValue}</p>
			{historyInput.map((answer, index) => (
				<div key={index} className={'container-history'}>
					{answer.split('').map((letter, indexLetter) => (
						<p key={indexLetter} className={verifyLetter(letter, indexLetter, wordLetter)}>{letter}</p>
					))}
				</div>
			))}
		</div>
	)
}
