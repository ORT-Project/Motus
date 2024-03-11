export interface Word {
	id: number
	word: string
	definition: string
	theme_id: number
}

export interface Theme {
	id: number
	name: string
	alias: string
	words: Word[]
}
