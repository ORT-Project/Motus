import React from 'react'
import './styles/styles.css'
import './styles/App.css'
import heart from '../resources/images/blue_heart.png'

export default function App () {
	return (
		<div className='container'>
			<img src={heart} height='300' width='300'/>
		</div>
	)
}
