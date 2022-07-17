import { CalculatorForm } from './CalculatorForm'
import '@testing-library/jest-dom'
import { getByRole, logRoles, render, screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useFormik, Formik, Field} from 'formik'

describe('Calculator form', () => {
    it('Should render Calculator', () => {
        render(<CalculatorForm />)
        expect(screen.getByRole('heading')).toHaveTextContent('Enter amounts')
    })
              
    it('rendering and submitting form', async () => {
        const onSubmit = jest.fn()
        render(<CalculatorForm onSubmit={onSubmit}/>)
        const user = userEvent.setup()

    const goldSilver = document.querySelector('input[name="goldSilver"]');
    const cash = document.querySelector('input[name="cash"]');
    const buisnessAssets = document.querySelector('input[name="buisnessAssets"]');
    const liabilities = document.querySelector('input[name="liabilities"]');
    
    await user.type(goldSilver, '100')
    await user.type(cash, '100')
    await user.type(buisnessAssets, '100')
    await user.type(liabilities, '100')

     fireEvent.click(document.querySelector('button[type="submit"]'));
        
        const due = document.querySelector('p')
        await waitFor(() =>
            expect(due).toHaveTextContent('Zakat due: £ 5'))
    
  })
   
    })
