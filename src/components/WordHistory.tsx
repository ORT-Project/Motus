import React from 'react'

export type WordHistoryProps = {
	answer: string
	historyInput: string[]
	inputValue: string
}
export default function WordHistory ({ answer, historyInput, inputValue }: WordHistoryProps) {
	// state
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const word_letter = answer.split('')

	// eslint-disable-next-line @typescript-eslint/naming-convention
	const verify_letter = (letter: string, index: number, word_letter: string[]) => {
		if (letter === word_letter[index]) {
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
					{/* eslint-disable-next-line @typescript-eslint/naming-convention */}
					{answer.split('').map((letter, index_letter) => (
						<p key={index_letter} className={verify_letter(letter, index_letter, word_letter)}>{letter}</p>
					))}
				</div>
			))}
		</div>
	)
}
