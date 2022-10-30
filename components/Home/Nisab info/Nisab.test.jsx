import {NisabInfo} from './NisabInfo'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

describe('NisabInfo', () => {
	it('Should render nisab data', () => {
		render(<NisabInfo/>)
        expect(screen.getByRole('h4')).toHaveTextContent('How to calculate zakat')
        expect(screen.getByRole('h3')).toHaveTextContent('Todays gold nisab')
        expect(screen.getByRole('h3')).toHaveTextContent('Todays silver nisab')
	})
}) 