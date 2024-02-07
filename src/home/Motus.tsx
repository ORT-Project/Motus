import React, { useState } from 'react'
import './App.css'
import DictionaryRuleProcessor from '../components/DictionaryRuleProcessor'
import WordHistory from '../components/WordHistory'

export default function Motus () {
	// affichage (render)
	const [answer, setAnswer] = useState('')
	return (
		<div className="section-accueil">
			<h1>Jeu du motus</h1>
			<div>
                Réponse : <DictionaryRuleProcessor
					setAnswer={setAnswer} answer={answer}
				/>
			</div>
			<p>Vous devez trouver un mot de X caractères en X tentatives.</p>
			<div className="content-history">
				<div className="content-accueil">
					<WordHistory
						answer={answer}
					/>
				</div>
				<div className="content-accueil">
					<div className="motus-border motus-warning">
						<p>A</p>
					</div>
					<div className="motus-border motus-danger">
						<p>Z</p>
					</div>
					<div className="motus-border motus-success">
						<p>E</p>
					</div>
					<div className="motus-border motus-success">
						<p>R</p>
					</div>
					<div className="motus-border motus-success">
						<p>X</p>
					</div>
				</div>
			</div>
		</div>
	)
}
