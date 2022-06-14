import ReactDOM from 'react-dom/client'
import React, { useState, useRef, useForm, useEffect } from 'react'
import { Form, Div, Input, H3, NisabBanner, Due, InfoOut, Information } from '../Calculator/CalculatorForm.styled'
import { Tooltip } from '@mui/material'
import IconButton from '@mui/material/IconButton'
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
      <NisabBanner>
        <Tooltip title="To calculate nisab for gold take the cost of gold per gram and multiply by 85(grams) for silver the nisab is 595(grams) " arrow>
          <Information>
            How to calculate zakat
            <IconButton>
              <InfoOut />
            </IconButton>
          </Information>
        </Tooltip>
        <H3>Today's Gold nisab: </H3>
        <H3>Today's Silver nisab: </H3>
      </NisabBanner>
      <Form onSubmit={handleSubmit} ref={myFormRef}>
        <label htmlFor="goldandsilver">Gold and Silver</label>
        <Input
          type="number"
          id="goldandsilver"
          placeholder="Value £"
          value={goldSilverInput}
          onChange={(e) => getGold(e.target.valueAsNumber)}
        ></Input>
        <label htmlFor="cashInput">Cash</label>
        <Input
          type="number"
          id="cash"
          placeholder="Value £."
          value={cashInput}
          onChange={(e) => getCash(e.target.valueAsNumber)}
        ></Input>
        <label htmlFor="assets">Business Assets</label>
        <Input
          type="number"
          id="assets"
          placeholder="Value £"
          value={buisnesAssets}
          onChange={(e) => getAssets(e.target.valueAsNumber)}
        ></Input>
        <label htmlFor="liabailities">Short Term Liabilities</label>
        <Input
          type="number"
          id="liabailities"
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
