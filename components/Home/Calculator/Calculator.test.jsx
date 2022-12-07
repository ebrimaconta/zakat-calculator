import { CalculatorForm } from './CalculatorForm'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Calculator form', () => {
  it('Should render Calculator', () => {
    render(<CalculatorForm />)
    expect(screen.getByRole('heading')).toHaveTextContent('Enter amounts')
  })

  it('rendering and submitting form', async () => {
    render(<CalculatorForm />)
    const user = userEvent.setup()

    await user.type(screen.getByPlaceholderText('Gold and Silver'), '100')
    await user.type(screen.getByPlaceholderText('Cash'), '100')
    await user.type(screen.getByPlaceholderText('Buisness assets'), '100')
    await user.type(screen.getByPlaceholderText('Short term liabilities'), '50')

    user.click(screen.getByText(/Submit/i))

    const due = document.querySelector('p')
    await waitFor(() => expect(due).toHaveTextContent('Zakat due: £6'))
  })
})
