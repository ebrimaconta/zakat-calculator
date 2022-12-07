import {NisabInfo} from './NisabInfo'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
// import API mocking utilities from Mock Service Worker
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import React from 'react'

/*
Mock API request using MSW
*/

//mock request for gold price 
const goldResponse = rest.get(process.env.NEXT_PUBLIC_GOLD_URL, (req, res, ctx) => {
  return res(
    ctx.json({
        price_gram_24k: 47.0642
    })
  )
})
//mock request for silver price 
const silverResponse = rest.get(process.env.NEXT_PUBLIC_SILVER_URL, (req, res, ctx) => {
  return res(
    ctx.json({
        price_gram_24k: 0.6021
    })
  )
})

// mock server error
const priceError =  rest.get(process.env.NEXT_PUBLIC_SILVER_URL, (req, res, ctx) => {
  return res(ctx.status(500))
})

const handlers = [goldResponse, silverResponse]
 const server = setupServer(...handlers)
// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

describe('NisabInfo', () => {
  it('Component is rendered with headers', () => {
    render(<NisabInfo />)
    expect(screen.getByText(/How to calculate zakat/i, { selector: 'h4' })).toBeVisible
    expect(screen.getByRole('heading', { name: /Today's gold nisab/i })).toBeVisible
    expect(screen.getByRole('heading', { name: /Today's silver nisab/i })).toBeVisible
  })
  it('Renders component with gold price data', async () => {
    render(<NisabInfo />)
    const goldPrice = await screen.findByText(`£4000.46`)
    expect(goldPrice).toBeVisible

  })
  it('Renders component with silver price data', async () => {
    render(<NisabInfo />)
    const silverPrice = await screen.findByText(`£358.25`)
    expect(silverPrice).toBeVisible
  })

  it('Shows error message if unable to get data', async () => {
    //override handler for error
    server.use(priceError)
    render(<NisabInfo />)
    const error =  await screen.findAllByText('Sorry unable to fetch nisab')
    expect(error).toBeTruthy()
  })
  
})
