import React from 'react'
import './styles/styles.css'
import './styles/Difficulty.css'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import useApi from '../hook/useApi'
import type { DifficultyType } from '../type'

export default function Difficulty () {
	const navigate = useNavigate()
	const location = useLocation()
	if (location.state.theme === undefined || location.state.theme === null) {
		return <Navigate to="/"/> // Rediriger vers la page de base
	}
	const { data } = useApi<DifficultyType[]>('/difficulty')

	interface FormData {
		difficulty: string
		tip: number
		attempts: number
		color: boolean
		theme: string
		style: string
	}

	const handleRequest = (formData: FormData) => {
		navigate('/motus/game', { state: formData })
	}

	if (!data) {
		return <div>Une erreur est survenue lors du chargement de l&apos;API.</div>
	} else {
		return (
			<div className="container">
				<h1>Sélectionnez votre difficulté</h1>
				<div className="difficulty">
					{data.map((difficulty, index) => (
						<label htmlFor={difficulty.alias} key={index}>
							<input type="radio" id={difficulty.alias} name="difficulty" value={difficulty.alias}/>
							<img onClick={() => {
								handleRequest({
									difficulty: difficulty.name,
									tip: difficulty.tips,
									attempts: difficulty.attempts,
									color: difficulty.color,
									theme: location.state.theme,
									style: location.state.style
								})
							}} src={'https://via.placeholder.com/100?text=' + difficulty.name} alt="Facile"/>
						</label>
					))}
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
}
