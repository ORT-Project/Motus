import React, { useState } from 'react'
import './Motus.css'
import DictionaryRuleProcessor from '../components/DictionaryRuleProcessor'
import WordHistory from '../components/WordHistory'

export default function Motus () {
	// affichage (render)
	const [answer, setAnswer] = useState('')

	return (
		<section>
			<div className="column-left">
				<div className="color-code">
					<p>Réponse : </p> <DictionaryRuleProcessor
						setAnswer={setAnswer} answer={answer}
					/>
				</div>
				<div>

				</div>
			</div>
			<div className="column-middle">
				<div className="input">

				</div>
				<div className="history">
					<WordHistory
						answer={answer}
					/>
				</div>
				<div className="retry">

				</div>
			</div>
			<div className="column-right">
				<div className="rules">

				</div>
			</div>
		</section>
	)
}
