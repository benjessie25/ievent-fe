import React from 'react'

import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'
import Link from '@components/Link'
import Button from '@mui/material/Button'

const Roles = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h4' color='textSecondary'>
            Roles List
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            A role provided access to predefined menus and features so that depending on assigned role an administrator
            can have access to what he need
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} lg={4}>
              <Card>
                <CardContent className='flex flex-col gap-4'>
                  <div className='flex items-center justify-between'>
                    <Typography variant='body1' className='flex-grow'>
                      Total 4 Users
                    </Typography>
                    <AvatarGroup max={4}>
                      <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
                      <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />
                      <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
                      <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
                      <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
                    </AvatarGroup>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex flex-col items-start gap-1'>
                      <Typography variant='h5'>Administrateur</Typography>
                      <Link href='#'>Edit Role</Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Card>
                <CardContent className='flex flex-col gap-4'>
                  <div className='flex items-center justify-between'>
                    <Typography variant='body1' className='flex-grow'>
                      Total 4 Users
                    </Typography>
                    <AvatarGroup max={4}>
                      <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
                      <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />
                      <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
                      <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
                      <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
                    </AvatarGroup>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex flex-col items-start gap-1'>
                      <Typography variant='h5'>Administrateur</Typography>
                      <Link href='#'>Edit Role</Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Card>
                <CardContent className='flex flex-col gap-4'>
                  <div className='flex items-center justify-between'>
                    <Typography variant='body1' className='flex-grow'>
                      Total 4 Users
                    </Typography>
                    <AvatarGroup max={4}>
                      <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
                      <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />
                      <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
                      <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
                      <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
                    </AvatarGroup>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex flex-col items-start gap-1'>
                      <Typography variant='h5'>Administrateur</Typography>
                      <Link href='#'>Edit Role</Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Card>
                <CardContent className='flex flex-col gap-4'>
                  <div className='flex items-center justify-between'>
                    <Typography variant='body1' className='flex-grow'>
                      Total 4 Users
                    </Typography>
                    <AvatarGroup max={4}>
                      <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
                      <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />
                      <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
                      <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
                      <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
                    </AvatarGroup>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex flex-col items-start gap-1'>
                      <Typography variant='h5'>Administrateur</Typography>
                      <Link href='#'>Edit Role</Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Card className='cursor-pointer bs-full '>
                <Grid container className='bs-full'>
                  <Grid item xs={5}>
                    <div className='flex items-end justify-center bs-full'>
                      <img alt='add role' src='/images/illustrations/characters/1.png' height={130} />
                    </div>
                  </Grid>
                  <Grid item xs={7}>
                    <CardContent>
                      <div className='flex flex-col items-end gap-4 text-right'>
                        <Button variant="contained" >Add Role</Button>
                        <Typography variant='body1'>
                          Add new role
                          <br/>
                            if it does not exist
                        </Typography>
                      </div>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Roles
