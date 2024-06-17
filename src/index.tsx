import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './home/App'
import Motus from './home/Motus'
import Difficulty from './home/Difficulty'
import {
	createHashRouter,
	RouterProvider
} from 'react-router-dom'
import './index.css'

const router = createHashRouter([
	{
		path: '/',
		element: <App/>
	},
	{
		path: '/motus',
		element: <App/>
	},
	{
		path: '/motus/game',
		element: <Motus/>
	},
	{
		path: '/motus/difficulty',
		element: <Difficulty/>
	}
])

ReactDOM.createRoot((document.getElementById('root')!)).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
