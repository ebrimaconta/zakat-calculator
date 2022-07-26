import React, { useState } from 'react'
import { Form, Div, Input, Due, SubmitButton, Error, H3 } from '../Calculator/CalculatorForm.styled'
import { useFormik, Formik } from 'formik'
import * as yup from 'yup'

export const CalculatorForm = () => {
  let [dueAmount, calculateAmount] = useState('')

  const validationSchema = yup.object().shape({
    goldSilver: yup.number().required('Please enter a amount'),
    cash: yup.number().required('Please enter a amount'),
    buisnessAssets: yup.number().required('Please enter a amount'),
    liabilities: yup.number().required('Please enter a amount')
  })

  const formik = useFormik({
    initialValues: {
      goldSilver: '',
      cash: '',
      buisnessAssets: '',
      liabilities: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const totalDue = Math.round(
        (values.buisnessAssets + values.cash + values.goldSilver - values.liabilities) * 0.025
      )
      calculateAmount(totalDue)
    }
  })
  return (
    <Div>
      <H3>Enter amounts</H3>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <label htmlFor="goldSilver">Gold and Silver</label>
          <Input
            name="goldSilver"
            type="number"
            placeholder="Gold and Silver"
            onChange={formik.handleChange}
            value={formik.values.goldSilver}
          />
          {formik.touched.goldSilver && formik.errors.goldSilver ? <Error>{formik.errors.goldSilver}</Error> : null}

          <label htmlFor="Cash">Cash</label>
          <Input
            name="cash"
            type="number"
            placeholder="Cash"
            onChange={formik.handleChange}
            value={formik.values.cash}
          />
          {formik.touched.cash && formik.errors.cash ? <Error>{formik.errors.cash}</Error> : null}
          <label htmlFor="buisnessAssets">Buisness assets</label>
          <Input
            name="buisnessAssets"
            type="number"
            placeholder="Buisness assets"
            onChange={formik.handleChange}
            value={formik.values.buisnessAssets}
          />
          {formik.touched.buisnessAssets && formik.errors.buisnessAssets ? (
            <Error>{formik.errors.buisnessAssets}</Error>
          ) : null}
          <label htmlFor="liabilities">Short term liabilities</label>
          <Input
            name="liabilities"
            type="number"
            placeholder="Short term liabilities"
            onChange={formik.handleChange}
            value={formik.values.liabilities}
          />
          {formik.touched.liabilities && formik.errors.liabilities ? <Error>{formik.errors.liabilities}</Error> : null}
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </Formik>
      <Due>Zakat due: £ {dueAmount}</Due>
    </Div>
  )
}
