import ReactDOM from 'react-dom/client'
import React, { useEffect, useState } from 'react'
import { Form, Div, Input, Due, SubmitButton } from '../Calculator/CalculatorForm.styled'
import { useFormik, useFormikContext } from 'formik'
import * as Yup from 'yup'

export const CalculatorForm = () => {
  let [dueAmount, calculateAmount] = useState('')

  const formValidation = Yup.object().shape({
    goldandsilver: Yup.number().required('Required').positive(),
    cash: Yup.number().required('Required').positive(),
    buisnessAssets: Yup.number().required('Required').positive(),
    liabilities: Yup.number().required('Required').positive()
  })

  const formik = useFormik({
    initialValues: {
      goldSilver: '',
      cash: '',
      buisnessAssets: '',
      liabilities: ''
    },
    formValidation,
    onSubmit: (values) => {
      dueAmount = (values.buisnessAssets + values.cash + values.goldSilver - values.liabilities) * 0.025
      calculateAmount(dueAmount)
    },
    handleReset: (values) => {
      calculateAmount(0)
      resetform
    }
  })

  return (
    <Div>
      <Form onSubmit={formik.handleSubmit}>
        <label htmlFor='goldSilver'>Gold and Silver</label>
        <Input
          name='goldSilver'
          type='number'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.goldSilver}
        />
        <label htmlFor='Cash'>Cash</label>
        <Input name='cash' type='number' onChange={formik.handleChange} value={formik.values.cash} />
        <label htmlFor='buisnessAssets'>Buisness assets</label>
        <Input
          name='buisnessAssets'
          type='number'
          onChange={formik.handleChange}
          value={formik.values.buisnessAssets}
        />
        <label htmlFor='liabilities'>Short term liabilities</label>
        <Input name='liabilities' type='number' onChange={formik.handleChange} value={formik.values.liabilities} />
        <SubmitButton type='submit'>Submit</SubmitButton>
      </Form>

      <Due id='due'>Zakat due: {dueAmount}</Due>
    </Div>
  )
}
