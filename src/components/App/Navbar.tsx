import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
	return (
		<div>
			<header>
				Motus Game
			</header>

			<nav>
				<Link to='/'>Accueil</Link>
				<a href="#">Aléatoire</a>
				<a href="#">Contact</a>
			</nav>
		</div>
	)
}
