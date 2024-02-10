import React from 'react'
import './Motus.css'
import DictionaryRuleProcessor from '../components/DictionaryRuleProcessor'
import WordHistory from '../components/WordHistory'

export default function Motus () {
	// affichage (render)
	return (
		<section>
			<div className="column-left">
				<div className="color-code">
					<p>Réponse : </p> <DictionaryRuleProcessor></DictionaryRuleProcessor>
				</div>
				<div>

				</div>
			</div>
			<div className="column-middle">
				<div className="input">

				</div>
				<div className="history">
					<WordHistory></WordHistory>
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
