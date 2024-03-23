export interface Word {
	id: number
	word: string
	definition: string
	theme_id: number
}

export interface Theme {
	id: number
	name: string
	style: string
	image: string
	words: Word[]
}

export interface DifficultyType {
	id: number
	name: string
	tips: number
	attempts: number
	color: boolean
	alias: string
}
