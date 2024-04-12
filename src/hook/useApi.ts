import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useApi<T> (path: string) {
	const [data, setData] = useState<T>()
	const [error, setError] = useState<any>()
	useEffect(() => {
		const fetchData = async () => {
			axios.get<T>('http://api.beltaria.fr/api/' + path)
				.then(response => {
					setData(response.data)
				}).catch((error) => {
					setError(error)
				})
		}
		fetchData()
	}, [])
	return {
		data,
		error
	}
}
