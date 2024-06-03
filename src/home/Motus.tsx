import React, { useEffect, useState } from 'react'
import './styles/Motus.css'
import './styles/styles.css'
import DictionaryRuleProcessor from '../components/DictionaryRuleProcessor'
import WordHistory from '../components/WordHistory'
import InputAnswer from '../components/InputAnswer'
import DifficultyRules from '../components/DifficultyRules'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import HealthTry from '../components/HealthTry'
import { LocationDifficulty } from '../entities/LocationDifficulty'

export default function Motus () {
	const [answer, setAnswer] = useState('')
	const [historyInput, setHistoryInput] = useState<string[]>([])
	const [inputValue, setInputValue] = useState<string>('')
	const location = useLocation()
	const navigate = useNavigate()
	if (location.state.difficulty === undefined || location.state.difficulty === null) {
		return <Navigate to="/"/> // Rediriger vers la page de base
	}
	const locationDifficulty = new LocationDifficulty(location)

	const reloadPage = () => {
		window.location.reload()
	}

	const handleNavigate = () => {
		navigate('/motus', {})
	}

	const theme: string = location.state.style
	useEffect(() => {
		document.body.classList.add(theme) // Récupérer la classe envoyée

		return () => {
			document.body.classList.remove(theme)
		}
	}, [])
	console.log(answer)

	return (
		<section>
			<div className="column-left">
				<DictionaryRuleProcessor
					setAnswer={setAnswer} locationDifficulty={locationDifficulty} style={location.state.style}
				/>
				<div>

				</div>
			</div>
			<div className="column-middle">
				<HealthTry locationDifficulty={locationDifficulty}/>
				<div className="content-game">
					<InputAnswer
						answer={answer}
						setHistoryInput={setHistoryInput}
						historyInput={historyInput}
						inputValue={inputValue}
						setInputValue={setInputValue}
						locationDifficulty={locationDifficulty}
						style={location.state.style}
					/>
					<WordHistory
						answer={answer}
						historyInput={historyInput}
						inputValue={inputValue}
						locationDifficulty={locationDifficulty}
					/>

				</div>
				<div className="retry">
					<button onClick={handleNavigate}>Page d&rsquo;accueil</button>
					<button onClick={reloadPage}>Recommencer</button>
				</div>
			</div>
			<DifficultyRules answer={answer}/>
		</section>
	)
}
