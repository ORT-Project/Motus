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
}
