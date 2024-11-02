import React from 'react'

import PropTypes, { any } from 'prop-types'

// mui
import { DialogTitle, DialogContent, DialogContentText, DialogActions, Button, alpha, Box } from '@mui/material'
import { LoadingButton } from '@mui/lab'

// icons

// api
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'

DeleteDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  api: any.isRequired,
  type: PropTypes.string.isRequired,
  deleteMessage: PropTypes.string.isRequired
}

export default function DeleteDialog({ onClose, id, apicall, api, type, deleteMessage }) {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(api, {
    onSuccess: () => {
      toast.success(type)
      apicall(prev => ({ ...prev, apicall: !prev.apicall }))
      queryClient.invalidateQueries().then(() => onClose())

    },
    onError: err => {
      toast.error(err.response.data.message)
    }
  })

  const handleDelete = () => {
    mutate(id)
  }

  return (
    <>
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 1
        }}
      >
        <Box
          sx={{
            height: 40,
            width: 40,
            bgcolor: theme => alpha(theme.palette.error.main, 0.2),
            borderRadius: '50px',
            color: theme => theme.palette.error.main,
            mr: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <i className='ri-alarm-warning-line'></i>{' '}
        </Box>
        Warning
      </DialogTitle>
      <DialogContent sx={{ pb: '16px !important' }}>
        <DialogContentText>
          {/* {t("are-you-sure-you-want-to-delete-this-category?")} */}
          {deleteMessage}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ pt: '8px !important' }}>
        <Button onClick={onClose}> cancel </Button>
        <LoadingButton variant='contained' loading={isLoading} onClick={handleDelete} color='error'>
          delete
        </LoadingButton>
      </DialogActions>
    </>
  )
}
