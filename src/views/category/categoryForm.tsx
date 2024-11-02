import React, { useState } from 'react'

import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import { CardHeader, FormHelperText, Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { useDropzone } from 'react-dropzone'

import { useRouter } from 'next-nprogress-bar'

import { Form, FormikProvider, useFormik } from 'formik'

import { useMutation, useQueryClient } from 'react-query'

// Third-party Imports
import { toast } from 'react-toastify'

import FormControl from '@mui/material/FormControl'

import Select from '@mui/material/Select'

import { CategorieField, StatusCategorie } from '@/data/category/categorieEnum'
import { DEFAULT_CATEGORIE_VALUE } from '@/data/category/categorieDefaultValues'
import type { ICategorieDTO } from '@/types/category/categoryTypes'
import CategorySchema from '@/schemas/category/categorie.schema'

// api
import * as api from '@/services/category.service'
import { EntityType } from '@/types/entityTypes'
import http from '@/services/http'

type FileProp = {
  name: string
  type: string
  size: number
}

interface CategoryFormTypes {
  data?: ICategorieDTO
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

const CategoryForm = ({ data, toggleDrawer }: CategoryFormTypes) => {
  // States
  const [files, setFiles] = useState<File[]>([])

  // Hooks
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: async (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
      const file = acceptedFiles[0]

      if (!file) return

      const fileName = file.name
      const arrayBuffer = await file.arrayBuffer()
      const fileBuffer = Buffer.from(arrayBuffer).toString('base64')

      try {
        await http
          .post('/admin/upload/temp', {
            fileName,
            fileBuffer
          })
          .then(({ data }) => {
            setFieldValue(CategorieField.path, data.fileUrl)
          })
          .catch(() => console.error('Failed to upload file'))
      } catch (error) {
        console.error('Error:', error)
      }
    }
  })

  const img = files.map((file: FileProp) => (
    <img key={file.name} alt={file.name} width='50%' height='50%' src={URL.createObjectURL(file as any)} />
  ))

  const router = useRouter()

  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(
    data ? 'update' : 'new',
    data ? api.updateCategoryByAdmin : api.addCategoryByAdmin,
    {
      ...(data && {
        enabled: Boolean(data)
      }),
      retry: false,
      onSuccess: data => {
        toast.success(data.message)

        queryClient.invalidateQueries([EntityType.categories]).then(() => toggleDrawer(false)({} as React.MouseEvent)) // Invalidate the query here
        // router.push('/admin/categories');
      },
      onError: (error: any) => {
        toast.error(error.response.data.message)
      }
    }
  )

  const formik = useFormik({
    initialValues: data || DEFAULT_CATEGORIE_VALUE,
    enableReinitialize: true,
    validationSchema: CategorySchema,
    onSubmit: async values => {
      const { ...rest } = values

      try {
        // @ts-ignore
        mutate({
          ...rest,
          ...(data && {
            currentSlug: data[CategorieField.slug]
          })
        })
      } catch (error) {
        console.error(error)
      }
    }
  })

  const { errors, values, touched, handleSubmit, setFieldValue, getFieldProps } = formik

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const title = event.target.value

    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]+/g, '')
      .replace(/\s+/g, '-') // convert to lowercase, remove special characters, and replace spaces with hyphens

    setFieldValue('slug', slug) // set the value of slug in the formik state
    formik.handleChange(event) // handle the change in formik
  }

  return (
    <>
      <FormikProvider value={formik}>
        <Form
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}
        >
          <TextField
            label='Name'
            id='category-name'
            fullWidth
            {...getFieldProps(CategorieField.name)}
            onChange={handleTitleChange} // add onChange handler for title
            error={Boolean(touched[CategorieField.name] && errors[CategorieField.name])}
            helperText={touched[CategorieField.name] && errors[CategorieField.name]}
          />
          <TextField
            label='Slug'
            variant='outlined'
            fullWidth
            {...getFieldProps(CategorieField.slug)}
            error={Boolean(touched[CategorieField.slug] && errors[CategorieField.slug])}
            helperText={touched[CategorieField.slug] && errors[CategorieField.slug]}
          />
          {/*<TextField label='Description' variant='outlined' fullWidth placeholder='Enter a description...' />*/}
          <Card>
            <CardHeader title='Image Categorie' />
            <CardContent>
              <Box
                {...getRootProps({ className: 'dropzone' })}
                sx={{
                  border: '1px dashed #ccc',
                  padding: 2,
                  textAlign: 'center',
                  borderRadius: 2,
                  cursor: 'pointer',
                  maxWidth: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  overflow: 'hidden'
                }}
              >
                <input {...getInputProps()} />
                {data?.path && files.length === 0 && (
                  <img
                    key={data.name}
                    alt={data.name}
                    width='50%'
                    height='50%'
                    src={data[CategorieField.blurDataURL]}
                  />
                )}
                {files.length
                  ? img
                  : !data?.path && (
                      <div className='flex items-center flex-col'>
                        <Avatar variant='rounded' className='bs-12 is-12 mbe-9'>
                          <i className='ri-upload-2-line' />
                        </Avatar>
                        <Typography variant='h4' className='mbe-2.5'>
                          Drop files here or click to upload.
                        </Typography>
                        <Typography color='text.secondary'>
                          Drop files here or click browse through your machine
                        </Typography>
                      </div>
                    )}
              </Box>
            </CardContent>
          </Card>

          {/*<TextField label='Parent Category' variant='outlined' select fullWidth>*/}
          {/*  <MenuItem value=''>None</MenuItem>*/}
          {/*  <MenuItem value='fashion'>Fashion</MenuItem>*/}
          {/*  <MenuItem value='electronics'>Electronics</MenuItem>*/}
          {/*  /!* Ajouter d'autres catégories ici *!/*/}
          {/*</TextField>*/}

          {/*<TextField*/}
          {/*  label='Comment'*/}
          {/*  variant='outlined'*/}
          {/*  multiline*/}
          {/*  rows={4}*/}
          {/*  placeholder='Write a Comment...'*/}
          {/*  fullWidth*/}
          {/*/>*/}

          <FormControl fullWidth sx={{ select: { textTransform: 'capitalize' } }}>
            <Select
              label='Category Status'
              id='status'
              native
              {...getFieldProps(CategorieField.status)}
              error={Boolean(touched[CategorieField.status] && errors[CategorieField.status])}
            >
              <option value='' style={{ display: 'none' }} />
              {Object.values(StatusCategorie).map((status: StatusCategorie) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </Select>
            {touched.status && errors.status && (
              <FormHelperText error sx={{ px: 2, mx: 0 }}>
                {touched.status && errors.status}
              </FormHelperText>
            )}
          </FormControl>

          <div className='flex items-center gap-4'>
            <Button variant='contained' color='primary' type='submit'>
              {data ? 'Edit Category' : 'Create Category'}
            </Button>
            <Button variant='outlined' color='error' type='reset' onClick={toggleDrawer(false)}>
              Discard
            </Button>
          </div>
        </Form>
      </FormikProvider>
    </>
  )
}

export default CategoryForm
