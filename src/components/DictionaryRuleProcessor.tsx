import React, { useEffect } from 'react' // , { useState }
import { WordsUtils } from '../utils/WordsUtils'
import { type LocationDifficulty } from '../entities/LocationDifficulty'
import useApi from '../hook/useApi'
import { type Theme } from '../type'

export type DictionaryRuleProcessorPros = {
	setAnswer: (answer: string) => void
	locationDifficulty: LocationDifficulty
	style: string
}

export default function DictionaryRuleProcessor ({
	setAnswer,
	locationDifficulty,
	style
}: DictionaryRuleProcessorPros) {
	const { data } = useApi<Theme[]>('theme/alias/' + style)
	const minLetters = 1
	const maxLetters = 10
	const wordsUtils = new WordsUtils()
	const wordList = data?.[0].words && wordsUtils.getAllWords(minLetters, maxLetters, data[0].words)
	const generateWord = () => {
		if (!wordList) return
		const randInt = Math.floor(Math.random() * wordList.length)
		setAnswer(wordList[randInt].toUpperCase())
	}

	useEffect(() => {
		generateWord()
	}, [data])

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
				<li>🟧 : La lettre est présente dans le mot</li>
			</div>
		)
	}
}
