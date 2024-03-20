import React from 'react'
import './styles/styles.css'
import './styles/App.css'
import { useNavigate } from 'react-router-dom'
import useApi from '../hook/useApi'
import type { Theme } from '../type'

export default function App () {
	const navigate = useNavigate()
	const { data } = useApi<Theme[]>('/theme')

	console.log(data)

	interface FormData {
		theme: string
		alias: JSON
	}

	const handleRequest = (formData: FormData) => {
		navigate('/motus/difficulty', { state: formData })
	}

	if (!data) {
		return <div>Loading...</div>
	}

	return (
		<main>
			{data.map((theme, index) => (
				<div className="game" key={theme.id}>
					<img src={theme.image} alt={theme.name}/>
					<div className="game-content">
						<h2>{theme.name}</h2>
						<button onClick={() => {
							handleRequest({
								theme: theme.name,
								alias: theme.alias
							})
						}}>Sélectionner
						</button>
					</div>
				</div>
			))}
		</main>
	)
}
