import axios from 'axios'
import { useEffect, useState } from 'react'

axios.defaults.baseURL = 'https://api.beltaria.fr/api/'

export default function useApi<T> (path: string) {
	const [data, setData] = useState<T>()
	const [error, setError] = useState<any>()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get<T>(path)
				setData(response.data)
			} catch (error) {
				setError(error)
			}
		}

		fetchData()
	}, [path]) // Ajoutez 'path' comme dépendance pour recharger lorsque 'path' change

	return {
		data,
		error
	}
}
