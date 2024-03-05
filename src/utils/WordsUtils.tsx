import { getWordsFromFile } from 'array-french-word-ts'

import { type Word } from '../type'

export class WordsUtils {
	public getAllWords (minLetters: number, maxLetters: number, projetData: Word[]) {
		const wordsArray = projetData.map((word: Word) => word.word)
		return wordsArray.filter((word: string) => (
			/^[a-z]+$/.test(word) &&
            word.length > minLetters &&
            word.length <= maxLetters)
		)
	}

	public async wordDontExist (searchedWord: string, wordApiData: Word[] | undefined): Promise<boolean> {
		if (!wordApiData) {
			throw new Error('No data')
		}
		const wordDoesExistApi = wordApiData.some((word: Word) => word.word === searchedWord.toLowerCase()) // si le mot existe dans l'api return true, sinon false

		const wordsArray = await getWordsFromFile()
		const wordDoesExistLib = wordsArray.includes(searchedWord.toLowerCase()) // récupère le tableau de mots de la librairie

		if (!wordDoesExistApi && !wordDoesExistLib) return false // si le mot n'existe pas dans l'api ou dans la librairie return false

		return true // si le mot existe dans l'api et dans la librairie return true
	}
}
