import {Titles} from '../Title/Titles'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

describe('Homepage', () => {
	it('Should render title', () => {
		render(<Titles/>)
		expect(screen.getByRole('heading')).toHaveTextContent('Welcome to zakatCal')
	})
})