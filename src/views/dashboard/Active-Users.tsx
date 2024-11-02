// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import CustomAvatar from '@core/components/mui/Avatar'

const ActiveUsers = () => {
  return (
    <Card>
      <CardContent className='flex justify-between gap-1'>
        <div className='flex flex-col gap-1 flex-grow'>
          <Typography variant='body1' >Active Users</Typography>
          <div className='flex items-center gap-2 flex-wrap'>
            <Typography variant='h4'>
              19.860
            </Typography>
            <Typography variant='body1' >(-14%)</Typography>
          </div>
          <Typography variant='body2' >Last week analytics</Typography>
        </div>
        <CustomAvatar color='success' skin='light' size={42} >
          <i className='ri-user-follow-line text-[26px]' />
        </CustomAvatar>
      </CardContent>
    </Card>
  )
}

export default ActiveUsers
