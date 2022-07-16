import { CalculatorForm } from './CalculatorForm'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useFormik, Formik, Field} from 'formik'

describe('Calculator form', () => {
    it('Should render Calculator', () => {
        render(<CalculatorForm />)
        expect(screen.getByRole('heading')).toHaveTextContent('Enter amounts')
    })
              
    it('rendering and submitting form', async () => {

        render(<CalculatorForm/>)
        const user = userEvent.setup()

    await user.type(screen.getByText(/gold and silver/i), '100')
    await user.type(screen.getByText(/cash/i), '100')
    await user.type(screen.getByText(/buisness assets/i), '100')
    await user.type(screen.getByText(/short term liabilities/i), '100')

    await user.click(screen.getByText(/submit/i))
   
    })
})
