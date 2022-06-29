import ReactDOM from 'react-dom/client'
import React, { useState, useRef, useForm, useEffect } from 'react'
import { Form, Div, Input, H3, NisabBanner, Due, InfoOut, Information } from '../Calculator/CalculatorForm.styled'

export function CalculatorForm() {
  const [goldSilverInput, getGold] = useState('')
  const [cashInput, getCash] = useState('')
  const [buisnesAssets, getAssets] = useState('')
  const [liabailities, getLiabilities] = useState('')
  const myFormRef = useRef()

  function handleSubmit(event) {
    event.preventDefault()
    const result = (goldSilverInput + cashInput + buisnesAssets - liabailities) * 0.025
    const root = ReactDOM.createRoot(document.getElementById('due'))
    root.render(' Zakat due:  £ ' + Math.round(result))
  }

  return (
    <Div>
      <H3>Calculate your zakat </H3>
 
      <Form onSubmit={handleSubmit} ref={myFormRef}>
        <label htmlFor="goldandsilver">Gold and Silver</label>
        <Input
          type="number"
          placeholder="Value £"
          value={goldSilverInput}
          onChange={(e) => getGold(e.target.valueAsNumber)}
        ></Input>
        <label htmlFor="cashInput">Cash</label>
        <Input
          type="number"
          placeholder="Value £."
          value={cashInput}
          onChange={(e) => getCash(e.target.valueAsNumber)}
        ></Input>
        <label htmlFor="assets">Business Assets</label>
        <Input
          type="number"
          placeholder="Value £"
          value={buisnesAssets}
          onChange={(e) => getAssets(e.target.valueAsNumber)}
        ></Input>
        <label htmlFor="liabailities">Short Term Liabilities</label>
        <Input
          type="number"
          placeholder="Value £"
          value={liabailities}
          onChange={(e) => getLiabilities(e.target.valueAsNumber)}
        ></Input>
        <Input type="submit" onClick={handleSubmit} value="Calculate"></Input>
      </Form>
      <Due id="due"></Due>
    </Div>
  )
}
