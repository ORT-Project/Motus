import React, { useEffect } from 'react' // , { useState }
import words from 'an-array-of-french-words'
import { useLocation } from 'react-router-dom'

export type DictionaryRuleProcessorPros = {
	answer: string
	setAnswer: (answer: string) => void
}

export default function DictionaryRuleProcessor ({
	setAnswer,
	answer
}: DictionaryRuleProcessorPros) {
	// state (état, données)
	// const [minLetters, setMinLetters] = useState(5)
	// const [maxLetters, setMaxLetters] = useState(10)
	const minLetters = 5
	const maxLetters = 10
	const location = useLocation()
	const locationState = location.state

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
	if (locationState.color) {
		return (
			<div className="color-code">
				<p>Code couleur du jeu : </p>
				<ul>
					<li>🟩 : La lettre est bien placée</li>
					<li>🟧 : La lettre est présente mais mal placée</li>
					<li>🟥 : La lettre n&rsquo;est pas présente dans le mot</li>
					<li>➖ : Le mot n&rsquo;existe pas</li>
				</ul>
			</div>
		)
	} else {
		return (
			<div className="color-code">
				<p>Code couleur du jeu : </p>
				<p>🟧 : La lettre est présente dans le mot</p>
			</div>
		)
	}
}
