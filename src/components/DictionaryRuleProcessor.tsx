import React, { useEffect } from 'react' // , { useState }
import { WordsUtils } from '../utils/WordsUtils'
import { type LocationDifficulty } from '../entities/LocationDifficulty'

export type DictionaryRuleProcessorPros = {
	answer: string
	setAnswer: (answer: string) => void
	locationDifficulty: LocationDifficulty
}

export default function DictionaryRuleProcessor ({
	setAnswer,
	answer,
	locationDifficulty
}: DictionaryRuleProcessorPros) {
	const minLetters = 2
	const maxLetters = 4
	const wordsUtils = new WordsUtils()
	const wordList = wordsUtils.getAllWords(minLetters, maxLetters)

	const generateWord = () => {
		const randInt = Math.floor(Math.random() * wordList.length)
		setAnswer(wordList[randInt].toUpperCase())
	}

	useEffect(() => {
		generateWord()
	}, [])

	// affichage (render)
	if (locationDifficulty.isColor()) {
		return (
			<div className="color-code">
				<p>Code couleur du jeu : </p>
				<ul>
					<li>🟩 : La lettre est bien placée</li>
					<li>🟧 : La lettre est présente mais mal placée</li>
					<li>🟥 : La lettre n&rsquo;est pas présente dans le mot</li>
				</ul>
			</div>
		)
	} else {
		return (
			<div className="color-code">
				<p>Code couleur du jeu : </p>
				<li>🟩 : La lettre est bien placée</li>
				<p>🟧 : La lettre est présente dans le mot</p>
			</div>
		)
	}
}
