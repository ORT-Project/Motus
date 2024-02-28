import words from 'an-array-of-french-words'

export class WordsUtils {
	public getAllWords (minLetters: number, maxLetters: number) {
		return (words as any[]).filter((word: string) => (
			/^[a-z]+$/.test(word) &&
			word.length > minLetters &&
			word.length <= maxLetters)
		) as string[]
	}

	public wordDontExist (word: string): boolean {
		return (words as any[]).includes(word.toLowerCase())
	}
}
