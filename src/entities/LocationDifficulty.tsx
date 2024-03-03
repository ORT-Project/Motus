import { type Location } from 'react-router-dom'

export class LocationDifficulty {
	private _difficulty: string
	private readonly _tip: number
	private readonly _attempts: number
	private _color: boolean
	private readonly _location: Location

	constructor (location: Location) {
		this._difficulty = location.state.difficulty
		this._tip = location.state.tip
		this._attempts = location.state.attempts
		this._color = location.state.color
		this._location = location
	}

	getDifficulty (): string {
		return this._difficulty
	}

	setDifficulty (difficulty: string): void {
		this._difficulty = difficulty
	}

	getTip (): number {
		return this._tip
	}

	setTip (value: number) {
		this._location.state._tip = value
	}

	getAttempts (): number {
		return this._attempts
	}

	setAttempts (value: number) {
		this._location.state.attempts = value
	}

	isColor (): boolean {
		return this._color
	}

	setColor (value: boolean) {
		this._color = value
	}
}
