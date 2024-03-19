import React from 'react'
import './styles/styles.css'
import './styles/Difficulty.css'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

export default function Difficulty () {
	const navigate = useNavigate()
	const location = useLocation()
	if (location.state.theme === undefined || location.state.theme === null) {
		return <Navigate to="/"/> // Rediriger vers la page de base
	}

	interface FormData {
		difficulty: string
		tip: number
		attempts: number
		color: boolean
		theme: string
		alias: string
	}

	const handleRequest = (formData: FormData) => {
		navigate('/motus/game', { state: formData })
	}

	return (
		<div className="container">
			<h1>Sélectionnez votre difficulté</h1>
			<div className="difficulty">
				<label htmlFor="easy">
					<input type="radio" id="easy" name="difficulty" value="easy"/>
					<img onClick={() => {
						handleRequest({
							difficulty: 'Facile',
							tip: 1,
							attempts: 10,
							color: true,
							theme: location.state.theme,
							alias: location.state.alias
						})
					}} src="https://via.placeholder.com/100?text=Facile" alt="Facile"/>
				</label>
				<label htmlFor="medium">
					<input type="radio" id="medium" name="difficulty" value="medium"/>
					<img onClick={() => {
						handleRequest({
							difficulty: 'Moyen',
							tip: 1,
							attempts: 7,
							color: true,
							theme: location.state.theme,
							alias: location.state.alias
						})
					}} src="https://via.placeholder.com/100?text=Moyen" alt="Moyen"/>
				</label>
				<label htmlFor="hard">
					<input type="radio" id="hard" name="difficulty" value="hard"/>
					<img onClick={() => {
						handleRequest({
							difficulty: 'Difficile',
							tip: 1,
							attempts: 5,
							color: true,
							theme: location.state.theme,
							alias: location.state.alias
						})
					}} src="https://via.placeholder.com/100?text=Difficile" alt="Difficile"/>
				</label>
				<label htmlFor="impossible">
					<input type="radio" id="hard" name="difficulty" value="impossible"/>
					<img onClick={() => {
						handleRequest({
							difficulty: 'Impossible',
							tip: 1,
							attempts: 3,
							color: false,
							theme: location.state.theme,
							alias: location.state.alias
						})
					}} src="https://via.placeholder.com/100?text=Impossible" alt="Impossible"/>
				</label>
			</div>
			<div id="selected-difficulty"></div>

			<div className="background-shapes">
				<div className="shape shape1"></div>
				<div className="shape shape2"></div>
				<div className="shape shape3"></div>
			</div>
		</div>
	)
}
