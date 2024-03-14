import React from 'react'
import './styles/styles.css'
import './styles/App.css'
import { useNavigate } from 'react-router-dom'
import minecraft from '../resources/themes/minecraft/icon.png'
import sao from '../resources/themes/sword_art_online/icon.png'
import hsr from '../resources/themes/honkai_star_rail/icon.png'

export default function App () {
	const navigate = useNavigate()

	interface FormData {
		theme: string
		alias: string
	}

	const handleRequest = (formData: FormData) => {
		navigate('/motus/difficulty', { state: formData })
	}

	return (
		<div>
			<h1>Sélectionnez un thème</h1>
			<div className="">
				<div className="container-elements">
					<div className="items">
						<div className="head-items">
							<img src={minecraft} alt="sla"/>
							<h2>Minecraft</h2>
						</div>
						<p>Offre des conseils dans le domaine informatique</p>
						<button onClick={() => {
							handleRequest({
								theme: 'minecraft',
								alias: 'mc'
							})
						}}>Sélectionner
						</button>
					</div>
					<div className="items">
						<div className="head-items">
							<img src={sao} alt="sla"/>
							<h2>Sword Art Online</h2>
						</div>
						<p>Ce service d’équipement et logiciel vous offre une solution complète pour répondre à vos
                            besoins
                            informatiques. De la sélection à l’installation, nous vous accompagnons pour garantir
                            un environnement de travail optimal. Nous nous assurerons de vous faire acquérir et de vous
                            installer des équipements matériels et logiciels.</p>
						<button onClick={() => {
							handleRequest({
								theme: 'sao',
								alias: 'sao'
							})
						}}>Sélectionner
						</button>
					</div>
					<div className="items">
						<div className="head-items">
							<img src={hsr} alt="sla"/>
							<h2>Honkai Star Rail</h2>
						</div>
						<p>Ce service de Solutions de Stockage offre une expertise spécialisée pour répondre à vos
                            besoins
                            de gestion de données. Nous proposons des conseils stratégiques et des solutions
                            personnalisées,
                            allant de la migration vers le cloud à la mise en place de sauvegardes automatiques.</p>
						<button onClick={() => {
							handleRequest({
								theme: 'hsr',
								alias: 'hsr'
							})
						}}>Sélectionner
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
