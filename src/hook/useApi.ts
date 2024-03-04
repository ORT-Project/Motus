import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useApi<T> (path: string) {
	const [data, setData] = useState<T>()
	const [error, setError] = useState<any>()
	useEffect(() => {
		axios.get<T>('http://localhost:8081' + path)
			.then(response => {
				setData(response.data)
			}).catch((error) => {
				setError(error)
			})
	}, [])
	return { data, error }
}
