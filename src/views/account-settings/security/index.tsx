"use client";

import type { ChangeEvent } from 'react';
import React from 'react'

import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Alert, OutlinedInput, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'

const Security = () => {
  type State = {
    password: string
    confirmPassword : string
    showPassword: boolean
    showConfirmPassword : boolean
  }

  const [open, setOpen] = React.useState(true);

  const [values, setValues] = React.useState<State>({
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false
  })

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword })
  }

return (
    <>
      <Grid container spacing={6} >
        <Grid item xs={12}>
          <Card>
            <CardHeader elevation={1} title="Change Password" />
            <CardContent className="flex flex-col gap-4">
              {open && (
                <Alert severity="warning" onClose={() => setOpen(false)}>
                  <Typography variant='body1' >Ensure that these requirements are met</Typography>
                  Minimum 8 characters long, uppercase & symbol
                </Alert>
              )}

              <form onSubmit={e => e.preventDefault()}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} >
                    <FormControl fullWidth>
                      <InputLabel htmlFor='icons-adornment-password'>Password</InputLabel>
                      <OutlinedInput
                        label='Password'
                        value={values.password}
                        id='icons-adornment-password'
                        onChange={handleChange('password')}
                        type={values.showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onClick={handleClickShowPassword}
                              onMouseDown={e => e.preventDefault()}
                              aria-label='toggle password visibility'
                            >
                              <i className={values.showPassword ? 'ri-eye-line' : 'ri-eye-off-line'} />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor='icons-adornment-password'>Confirm Password</InputLabel>
                      <OutlinedInput
                        label='Confirm Password'
                        value={values.confirmPassword}
                        id='icons-adornment-confirm-password'
                        onChange={handleChange('confirmPassword')}
                        type={values.showConfirmPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={e => e.preventDefault()}
                              aria-label='toggle password visibility'
                            >
                              <i className={values.confirmPassword ? 'ri-eye-line' : 'ri-eye-off-line'} />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} className="flex gap-4">
                    <Button variant='contained' type='submit'>
                      Change Password
                    </Button>
                  </Grid>
                </Grid>
              </form>

            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </>
)
}

export default Security
