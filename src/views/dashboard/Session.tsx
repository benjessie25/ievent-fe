// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import CustomAvatar from '@core/components/mui/Avatar'

const Session = () => {
  return (
    <Card>
      <CardContent className='flex justify-between gap-1'>
        <div className='flex flex-col gap-1 flex-grow'>
          <Typography variant='body1' >Session</Typography>
          <div className='flex items-center gap-2 flex-wrap'>
            <Typography variant='h4'>
              21.459
            </Typography>
            <Typography variant='body1' >(+29%)</Typography>
          </div>
          <Typography variant='body2' >Total User</Typography>
        </div>
        <CustomAvatar color='primary' skin='light' size={42} >
          <i className='ri-group-line text-[26px]' />
        </CustomAvatar>
      </CardContent>
    </Card>
  )
}

export default Session
