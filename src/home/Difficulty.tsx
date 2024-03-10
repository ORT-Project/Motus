import React from 'react'
import './styles/styles.css'
import './styles/Difficulty.css'
import easy from '../resources/images/black_swan.png'
import medium from '../resources/images/jingliu.png'
import hard from '../resources/images/sparkle.png'
import impossible from '../resources/images/ruan_mei.png'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Difficulty () {
	const navigate = useNavigate()
	const location = useLocation()

	interface FormData {
		difficulty: string
		tip: number
		attempts: number
		color: boolean
		theme: string
	}

	const handleRequest = (formData: FormData) => {
		navigate('/motus/game', { state: formData })
	}

	return (
		<div className="container">
			<h1>Bienvenue sur Motus</h1>
			<p>Le jeu de mots où il faut deviner un mot en un minimum d&rsquo;essais !</p>
			<div className="difficulty-container">
				<img onClick={() => {
					handleRequest({
						difficulty: 'Facile',
						tip: 1,
						attempts: 10,
						color: true,
						theme: location.state.theme
					})
				}} src={easy} alt="easy" width="300"/>
				<img onClick={() => {
					handleRequest({
						difficulty: 'Moyen',
						tip: 1,
						attempts: 7,
						color: true,
						theme: location.state.theme
					})
				}} src={medium} alt="medium" width="300"/>
				<img onClick={() => {
					handleRequest({
						difficulty: 'Difficile',
						tip: 1,
						attempts: 5,
						color: true,
						theme: location.state.theme
					})
				}} src={hard} alt="hard" width="300"/>
				<img onClick={() => {
					handleRequest({
						difficulty: 'Impossible',
						tip: 1,
						attempts: 3,
						color: false,
						theme: location.state.theme
					})
				}} src={impossible} alt="impossible" width="300"/>
			</div>
			<button className="play-button">Jouer</button>
		</div>
	)
}
