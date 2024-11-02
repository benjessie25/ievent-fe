// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import CustomAvatar from '@core/components/mui/Avatar'

const PaidUsers = () => {
  return (
    <Card>
      <CardContent className='flex justify-between gap-1'>
        <div className='flex flex-col gap-1 flex-grow'>
          <Typography variant='body1'>Paid Users</Typography>
          <div className='flex items-center gap-2 flex-wrap'>
            <Typography variant='h4'>4,567</Typography>
            <Typography variant='body1'>(+18%)</Typography>
          </div>
          <Typography variant='body2'>Last week analytics</Typography>
        </div>
        <CustomAvatar color='error' skin='light' size={42}>
          <i className='ri-user-add-line text-[26px]'></i>
        </CustomAvatar>
      </CardContent>
    </Card>
  )
}

export default PaidUsers
