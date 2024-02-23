import React, { useState } from 'react'
import './Motus.css'
import DictionaryRuleProcessor from '../components/DictionaryRuleProcessor'
import WordHistory from '../components/WordHistory'
import InputAnswer from '../components/InputAnswer'
import DifficultyRules from '../components/DifficultyRules'

export default function Motus () {
	// affichage (render)
	const [answer, setAnswer] = useState('')
	const [historyInput, setHistoryInput] = useState<string[]>([])
	const [inputValue, setInputValue] = useState<string>('')

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
				<div className="history">
					<WordHistory
						answer={answer}
						historyInput={historyInput}
						inputValue={inputValue}
					/>
				</div>
				<div className="retry">

				</div>
			</div>
			<DifficultyRules/>
		</section>
	)
}
