// React Imports


// Component Imports
import Grid from '@mui/material/Grid'


import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import { User } from 'lucide-react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import PendingUsers from '@views/dashboard/Pending-Users'
import ActiveUsers from '@views/dashboard/Active-Users'
import PaidUsers from '@views/dashboard/Paid-Users'
import Session from '@views/dashboard/Session'
import TableUsers from '@views/dashboard/TableUsers'




const UserPage = () => {
  const data = [
    {
      title: 'Session',
      count: '21,459',
      percentage: '+29%',
      subtitle: 'Total User',
      icon: <User size={26} />,
      avatarColor: 'primary',
    },
    {
      title: 'Paid Users',
      count: '4,567',
      percentage: '+18%',
      subtitle: 'Last week analytics',
      icon: <User size={26} />,
      avatarColor: 'error',
    },
    {
      title: 'Active Users',
      count: '19,860',
      percentage: '-14%',
      subtitle: 'Last week analytics',
      icon: <User size={26} />,
      avatarColor: 'success',
    },
    {
      title: 'Pending Users',
      count: '237',
      percentage: '+42%',
      subtitle: 'Last week analytics',
      icon: <User size={26} />,
      avatarColor: 'warning',
    },
  ];

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={3} >
              <Session />
            </Grid>

            <Grid item xs={12} sm={6} md={3} >
              <PaidUsers />
            </Grid>

            <Grid item xs={12} sm={6} md={3} >
              <ActiveUsers />
            </Grid>

            <Grid item xs={12} sm={6} md={3} >
              <PendingUsers />
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Filters" />
            <CardContent >
              <Grid container spacing={5} >
                <Grid item xs={12} sm={4} >
                  <FormControl fullWidth>
                    <InputLabel id="demo-basic-select-outlined-label">Select Role</InputLabel>
                    <Select label="Select Role" defaultValue="" id="demo-basic-select-outlined"
                            labelId="demo-basic-select-outlined-label" variant="outlined">
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>

                </Grid>

                <Grid item xs={12} sm={4} >
                  <FormControl fullWidth>
                    <InputLabel id="demo-basic-select-outlined-label">Select Status</InputLabel>
                    <Select label="Select Status" defaultValue="" id="demo-basic-select-outlined"
                            labelId="demo-basic-select-outlined-label" variant="outlined">
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>

                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <div className="flex justify-between p-5 gap-4 flex-col items-start sm:flex-row sm:items-center">
              <Button variant='outlined' size='medium' color='secondary' startIcon={<i className='ri-upload-2-line text-xl' />}>
                Export
              </Button>
              <div className="flex items-center gap-x-4 gap-4 flex-col max-sm:is-full sm:flex-row">
                <TextField className="max-sm:is-full" id='outlined-basic' size='small' placeholder='Search User' />
                <Button variant='contained' className='max-sm:is-full'  >
                  Add New User
                </Button>
              </div>
            </div>
            <TableUsers />
          </Card>

        </Grid>
      </Grid>
    </>
  );
}

export default UserPage
