import React, { useState } from 'react'
import './styles/Motus.css'
import './styles/styles.css'
import DictionaryRuleProcessor from '../components/DictionaryRuleProcessor'
import WordHistory from '../components/WordHistory'
import InputAnswer from '../components/InputAnswer'
import DifficultyRules from '../components/DifficultyRules'
import { Link, useLocation } from 'react-router-dom'
import HealthTry from '../components/HealthTry'
import { LocationDifficulty } from '../entities/LocationDifficulty'

export default function Motus () {
	const [answer, setAnswer] = useState('')
	const [historyInput, setHistoryInput] = useState<string[]>([])
	const [inputValue, setInputValue] = useState<string>('')
	const locationDifficulty = new LocationDifficulty(useLocation())

	const reloadPage = () => {
		window.location.reload()
	}

	return (
		<section>
			<div className="column-left">
				<DictionaryRuleProcessor
					setAnswer={setAnswer} answer={answer} locationDifficulty={locationDifficulty}
				/>
				<div>

				</div>
			</div>
			<div className="column-middle">
				<HealthTry locationDifficulty={locationDifficulty}/>
				<div className="history">
					<InputAnswer
						answer={answer}
						setHistoryInput={setHistoryInput}
						historyInput={historyInput}
						inputValue={inputValue}
						setInputValue={setInputValue}
						locationDifficulty={locationDifficulty}
					/>
					<WordHistory
						answer={answer}
						historyInput={historyInput}
						inputValue={inputValue}
						locationDifficulty={locationDifficulty}
					/>
				</div>
				<div className="retry">
					<Link to='/' className='button-style'>Page d&rsquo;accueil</Link>
					<button onClick={reloadPage} className="button-style">Recommencer</button>
				</div>
			</div>
			<DifficultyRules answer={answer}/>
		</section>
	)
}
