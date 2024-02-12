import React, { useEffect } from 'react' // , { useState }
import words from 'an-array-of-french-words'

export type DictionaryRuleProcessorPros = { answer: string, setAnswer: (answer: string) => void }

export default function DictionaryRuleProcessor ({ setAnswer, answer }: DictionaryRuleProcessorPros) {
	// state (état, données)
	// const [minLetters, setMinLetters] = useState(5)
	// const [maxLetters, setMaxLetters] = useState(10)
	const minLetters = 5
	const maxLetters = 10

	// comportements
	const wordList: string[] = (words as any[]).filter((word: string) => (
		/^[a-z]+$/.test(word) &&
        word.length > minLetters &&
        word.length <= maxLetters)
	) as string[]

	const generateWord = () => {
		const randInt = Math.floor(Math.random() * wordList.length)
		setAnswer(wordList[randInt].toUpperCase())
	}

	useEffect(() => {
		generateWord()
	}, [])

	// affichage (render)
	return (
		<div>
			<p>{answer}</p>
		</div>
	)
}
