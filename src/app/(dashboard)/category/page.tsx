'use client'
import React, { useState } from 'react'

import { useSearchParams } from 'next/navigation'

import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


import { useQuery } from 'react-query'

import { toast } from 'react-toastify'

import CategoryForm from '@views/category/categoryForm'
import PopupSheetModal from '@components/PopupSheetModal'
import CATEGORIE_TABLE_HEAD from '@views/category/categorie.columns'
import CategoryRows from '@views/category/categorie.rows'
import { Table } from '@components/table'

import { EntityType } from '@/types/entityTypes'
import * as api from '@/services/category.service'




const Category = () => {
  const [open, setOpen] = useState<boolean>(false)

  // Fonction pour ouvrir/fermer le Drawer
  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setOpen(isOpen)
  }


  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page');
  const searchParam = searchParams.get('search');
  const [apicall, setApicall] = React.useState(false);

  const { data, isLoading } = useQuery(
    [EntityType.categories, apicall, searchParam, pageParam],
    () => api.getCategoriesByAdmin(+pageParam! || 1, searchParam || ''),
    {
      // @ts-ignore
      onError: (err) => toast.error(err.response.data.message || 'Something went wrong!')
    }
  );





return (
    <>

      <Card>
        <div className='flex items-start justify-between max-sm:flex-col sm:items-center gap-4 p-5'>
          <TextField id='outlined-basic' size='small' placeholder='Search' />
          <div className='flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto'>
            <Button
              variant='outlined'
              size='medium'
              color='secondary'
              startIcon={<i className='ri-upload-2-line text-xl' />}
            >
              Export
            </Button>
            <Button variant='contained' className='max-sm:is-full is-auto' onClick={toggleDrawer(true)}>
              <i className='ri-add-line'></i> Add Category
            </Button>
          </div>
        </div>
        <Table
          headData={CATEGORIE_TABLE_HEAD}
          data={data}
          isLoading={isLoading}
          row={CategoryRows}
          isSearch
        />
      </Card>
      <PopupSheetModal open={open} toggleDrawer={toggleDrawer} title="Add Category">
        <CategoryForm toggleDrawer={toggleDrawer} />
      </PopupSheetModal>
    </>
  )
}

export default Category
