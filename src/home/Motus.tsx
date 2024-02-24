import React, { useState } from 'react'
import './Motus.css'
import DictionaryRuleProcessor from '../components/DictionaryRuleProcessor'
import WordHistory from '../components/WordHistory'
import InputAnswer from '../components/InputAnswer'
import DifficultyRules from '../components/DifficultyRules'
import { Link } from 'react-router-dom'

export default function Motus () {
	// affichage (render)
	const [answer, setAnswer] = useState('')
	const [historyInput, setHistoryInput] = useState<string[]>([])
	const [inputValue, setInputValue] = useState<string>('')

	const reloadPage = () => {
		window.location.reload()
	}

	return (
		<section>
			<div className="column-left">
				<DictionaryRuleProcessor
					setAnswer={setAnswer} answer={answer}
				/>
				<div>

				</div>
			</div>
			<div className="column-middle">
				<InputAnswer
					answer={answer}
					setHistoryInput={setHistoryInput}
					historyInput={historyInput}
					inputValue={inputValue}
					setInputValue={setInputValue}
				/>
				<WordHistory
					answer={answer}
					historyInput={historyInput}
					inputValue={inputValue}
				/>
				<div className="retry">
					<Link to='/' className='button-style'>Page d&rsquo;accueil</Link>
					<button onClick={reloadPage} className="button-style">Recommencer</button>
				</div>
			</div>
			<DifficultyRules answer={answer}/>
		</section>
	)
}
