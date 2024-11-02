import React, { type MouseEvent, useState } from 'react'

// mui
import { Dialog, Typography } from '@mui/material'

// utils
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

import { CategorieField } from '@/data/category/categorieEnum'
import type { ICategorie } from '@/types/category/categoryTypes'
import { fDateShort } from '@/utils/formatTime'
import DeleteDialog from '@components/delete'
import { deleteCategoryByAdmin } from '@/services/category.service'
import CategoryForm from '@views/category/categoryForm'
import PopupSheetModal from '@components/PopupSheetModal'
import CustomAvatar from '@core/components/mui/Avatar'

interface CategoryProps {
  row: ICategorie
}

export default function CategoryRows({ row }: CategoryProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [selectedCategory, setSelectedCategory] = React.useState<ICategorie | null>(null)
  const [apicall, setApicall] = React.useState(false)
  const [id, setId] = React.useState<string>('')

  const [open, setOpen] = useState<boolean>(false)
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  const openEl = Boolean(anchorEl)

  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setAnchorEl(null)
    setOpenDrawer(isOpen)
  }

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>, category: ICategorie) => {
    setAnchorEl(event.currentTarget)
    setSelectedCategory(category)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
    setSelectedCategory(null)
  }

  const handleClickOpen = () => {
    if (selectedCategory?.slug) {
      setId(selectedCategory[CategorieField.slug])
    }

    setAnchorEl(null)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Dialog onClose={handleClose} open={open} maxWidth={'xs'}>
        <DeleteDialog
          onClose={handleClose}
          id={id!}
          apicall={setApicall}
          type={'Category deleted'}
          deleteMessage={'Deleting this category will permanently remove it. Are you sure you want to proceed?'}
          api={deleteCategoryByAdmin}
        />
      </Dialog>
      <tr key={row[CategorieField.id]}>
        <td className='!plb-1'>
          <div className='flex items-center gap-3'>
            <CustomAvatar src={row[CategorieField.blurDataURL]} size={50} />
            <div className='flex flex-col'>
              <Typography color='text.primary' className='font-medium'>
                {row.name}
              </Typography>
              <Typography variant='body2'>{row[CategorieField.name]}</Typography>
            </div>
          </div>
          {/*<Typography>{row[CategorieField.name]}</Typography>*/}
        </td>
        <td className='!pb-1'>
          <Chip
            className='capitalize'
            variant='tonal'
            color={row.status === 'Desactive' ? 'secondary' : 'success'}
            label={row.status}
            size='small'
          />
        </td>
        <td className='!plb-1'>
          <Typography>{fDateShort(row.createdAt)} </Typography>
        </td>
        <td>
          <div className='flex items-center'>
            <Button size='medium' onClick={event => handlePopoverOpen(event, row)}>
              <i className='ri-more-2-line text-textSecondary text-[22px]'></i>
            </Button>
          </div>
        </td>
      </tr>

      <Menu
        anchorEl={anchorEl}
        open={openEl}
        onClose={handlePopoverClose}
        PaperProps={{
          elevation: 1,
          sx: {
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px'
          }
        }}
      >
        <MenuItem onClick={toggleDrawer(true)}>
          <i className='ri-edit-2-line' /> Modifier
        </MenuItem>
        <MenuItem onClick={handleClickOpen}>
          <i className='ri-delete-bin-7-line' /> Delete
        </MenuItem>
      </Menu>

      <PopupSheetModal open={openDrawer} toggleDrawer={toggleDrawer} title='Add Category'>
        <CategoryForm data={selectedCategory!} toggleDrawer={toggleDrawer} />
      </PopupSheetModal>
    </>
  )
}
