     
import { H3, NisabBanner, InfoOut, Information } from './NisabInfo.styled'
import { Tooltip } from '@mui/material'
import IconButton from '@mui/material/IconButton'
export function NisabInfo() {

  return (  
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
  )
}