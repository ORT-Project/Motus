import React from 'react' // , { useState }
import words from 'an-array-of-french-words'

export default function DictionaryRuleProcessor () {
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

	const randInt = Math.floor(Math.random() * wordList.length)
	const answer = wordList[randInt].toUpperCase()

	// affichage (render)
	return (
		<div>
			<p>{answer}</p>
		</div>
	)
}
