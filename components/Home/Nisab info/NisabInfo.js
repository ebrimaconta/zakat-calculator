import { H3, NisabBanner, InfoOut, Information, Nisab, Ermes } from './NisabInfo.styled'
import { Tooltip } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import React, { useState, useEffect } from 'react'
export function NisabInfo() {
  const [goldPrice, setGoldPrice] = useState([])
  const [silverPrice, setSilverPrice] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState()
  const getApiData = () => {
  
    const myHeaders = new Headers()
   
    myHeaders.append('x-access-token', process.env.NEXT_PUBLIC_API_KEY)
    myHeaders.append('Content-Type', 'application/json')
    
    const requestOption = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
      
    }

    const url = [
      process.env.NEXT_PUBLIC_GOLD_URL,
      process.env.NEXT_PUBLIC_SILVER_URL
    ]
    
    //Fetch url from array 
    //map() calls function once for each element in array 
    Promise.all(url.map(url => fetch(url, requestOption)
      .then(res => res.json())))
      .then(res => {
        console.log(res)
        setGoldPrice('£' + (res.[0].price_gram_24k * 85).toFixed(2))
        setSilverPrice('£'+ (res.[1].price_gram_24k * 595).toFixed(2))
        setError(false)
        setIsPending(false)
      })
      .catch(error => {
        console.log(error.message)
        setError('Sorry unable to fetch nisab')
        setIsPending(false)
      })

  }
  
  useEffect(() => {
    getApiData()
  
  },[] )
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
        Todays's gold nisab: 
        {isPending && <Nisab> Loading..</Nisab>}
        {goldPrice && <Nisab> {goldPrice} </Nisab>}
        {error && <Ermes> {error} </Ermes>}
      </H3>
      <H3>
        Todays's Silver nisab: 
        {isPending && <Nisab> Loading..</Nisab>}
        {goldPrice && <Nisab> {silverPrice} </Nisab>}
        {error && <Ermes> {error} </Ermes>}
       
      </H3>
    </NisabBanner>
  )
}
