import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('renders react tests', () => {
	it('not in the page', () => {
		render(<App/>)
		const linkElement = screen.queryByText(/learn react/i)
		expect(linkElement).not.toBeInTheDocument()
	})

	it('in the page', () => {
		render(<App/>)
		const linkElement = screen.queryByText(/Test/i)
		expect(linkElement).toBeInTheDocument()
	})
})
