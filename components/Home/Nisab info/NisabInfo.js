import { H3, NisabBanner, InfoOut, Information, Nisab } from './NisabInfo.styled'
import { Tooltip } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import React, { useState, useEffect } from 'react'
export function NisabInfo() {
  const [goldPrice, setGoldPrice] = useState([])
  const [silverPrice, setSilverPrice] = useState([])

  const getApiData = async () => {
    const myHeaders = new Headers()
    myHeaders.append('x-access-token', 'goldapi-azzy7gtl6gk3su7-io')
    myHeaders.append('Content-Type', 'application/json')

    const requestOption = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }

    const goldResponse = fetch('https://www.goldapi.io/api/XAU/GBP', requestOption)
      .then((result) => result.json())
      .then((result) => {
        setGoldPrice((result.price_gram_24k * 85).toFixed(2))
      })
      .catch((error) => console.log('error', error))

    const silverResponse = fetch('https://www.goldapi.io/api/XAG/GBP', requestOption)
      .then((result) => result.json())
      .then((result) => {
        setSilverPrice((result.price_gram_24k * 595).toFixed(2))
      })
      .catch((error) => console.log('error', error))
  }

  useEffect(() => {
    getApiData()
  }, [])
  return (
    <NisabBanner>
      <Tooltip
        title="To calculate nisab for gold take the cost of gold per gram and multiply by 85(grams) for silver the nisab is 595(grams) "
        arrow
      >
        <Information>
          How to calculate zakat
          <IconButton>
            <InfoOut />
          </IconButton>
        </Information>
      </Tooltip>

      <H3>
        Today's Gold nisab: <Nisab>£{goldPrice}</Nisab>{' '}
      </H3>
      <H3>
        Today's Silver nisab: <Nisab>£{silverPrice}</Nisab>{' '}
      </H3>
    </NisabBanner>
  )
}
