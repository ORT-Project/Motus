import React from 'react'
import './styles/styles.css'
import './styles/App.css'
import { useNavigate } from 'react-router-dom'
import useApi from '../hook/useApi'
import type { Theme } from '../type'
import Navbar from '../components/App/Navbar'
import Footer from '../components/App/Footer'

export default function App () {
	const navigate = useNavigate()
	const { data } = useApi<Theme[]>('/theme')
	console.log(data)

	interface FormData {
		theme: string
		style: string
	}

	const handleRequest = (formData: FormData) => {
		navigate('/motus/difficulty', { state: formData })
	}

	if (!data) {
		return <div>Une erreur est survenue lors du chargement de l&apos;API.</div>
	} else {
		return (
			<div>
				<Navbar/>
				<main>
					{data.map((theme, index) => (
						<div className="game" key={theme.id}>
							<img src={theme.image} alt={theme.name}/>
							<div className="game-content">
								<h2>{theme.name}</h2>
								<button onClick={() => {
									handleRequest({
										theme: theme.name,
										style: theme.style
									})
								}}>Sélectionner
								</button>
							</div>
						</div>
					))}
				</main>
				<Footer/>
			</div>
		)
	}
}
