import React from 'react'
import './styles/styles.css'
import './styles/App.css'
import { useNavigate } from 'react-router-dom'
import minecraft from '../resources/themes/minecraft/background.png'
import sao from '../resources/themes/sword_art_online/background.png'
import hsr from '../resources/themes/honkai_star_rail/background.jpg'

export default function App () {
	const navigate = useNavigate()

	interface FormData {
		theme: string
		alias: string
	}

	const handleRequest = (formData: FormData) => {
		navigate('/motus/difficulty', { state: formData })
	}

	return (
		<main>
			<div className="game">
				<img src={minecraft} alt="Snake"/>
				<div className="game-content">
					<h2>Minecraft</h2>
					<button onClick={() => {
						handleRequest({
							theme: 'minecraft',
							alias: 'mc'
						})
					}}>Sélectionner
					</button>
				</div>
			</div>

			<div className="game">
				<img src={sao} alt="Tetris"/>
				<div className="game-content">
					<h2>Sword Art Online</h2>
					<button onClick={() => {
						handleRequest({
							theme: 'sao',
							alias: 'sao'
						})
					}}>Sélectionner
					</button>
				</div>
			</div>

			<div className="game">
				<img src={hsr} alt="Pacman"/>
				<div className="game-content">
					<h2>Honkai: Star Rail</h2>
					<button onClick={() => {
						handleRequest({
							theme: 'hsr',
							alias: 'hsr'
						})
					}}>Sélectionner
					</button>
				</div>
			</div>
		</main>
	)
}
