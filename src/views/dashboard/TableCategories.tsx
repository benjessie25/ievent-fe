'use client'

// MUI Imports
import React, { type MouseEvent } from 'react'

import { useSearchParams } from 'next/navigation'

import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'

// Third-party Imports
import classnames from 'classnames'

// Components Imports
import Button from '@mui/material/Button'

// Styles Imports
import { Checkbox, TablePagination } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { useQuery } from 'react-query'

import { toast } from 'react-toastify'

import tableStyles from '@core/styles/table.module.css'
import CustomAvatar from '@core/components/mui/Avatar'

import { EntityType } from '@/types/entityTypes'


import * as api from '@/services/category.service';


type TableBodyRowType = {
  id: number
  avatarSrc?: string
  name: string
  username: string
  email: string
  iconClass: string
  roleIcon?: string
  role: string
  status: string
}

// Vars
const rowsData: TableBodyRowType[] = [
  {
    id: 1,
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson',
    username: '@amiccoo',
    email: 'Jacinthe_Blick@hotmail.com',
    iconClass: 'text-primary',
    roleIcon: 'ri-vip-crown-line',
    role: 'Admin',
    status: 'pending'
  },
  {
    id: 2,
    avatarSrc: '/images/avatars/2.png',
    name: 'Richard Payne',
    username: '@brossiter15',
    email: 'Jaylon_Bartell3@gmail.com',
    iconClass: 'text-warning',
    roleIcon: 'ri-edit-box-line',
    role: 'Editor',
    status: 'active'
  },
  {
    id: 3,
    avatarSrc: '/images/avatars/3.png',
    name: 'Jennifer Summers',
    username: '@jsbemblinf',
    email: 'Tristin_Johnson@gmail.com',
    iconClass: 'text-error',
    roleIcon: 'ri-computer-line',
    role: 'Author',
    status: 'active'
  },
  {
    id: 4,
    avatarSrc: '/images/avatars/4.png',
    name: 'Mr. Justin Richardson',
    username: '@justin45',
    email: 'Toney21@yahoo.com',
    iconClass: 'text-warning',
    roleIcon: 'ri-edit-box-line',
    role: 'Editor',
    status: 'pending'
  },
  {
    id: 5,
    avatarSrc: '/images/avatars/5.png',
    name: 'Nicholas Tanner',
    username: '@tannernic',
    email: 'Hunter_Kuhic68@hotmail.com',
    iconClass: 'text-info',
    roleIcon: 'ri-pie-chart-2-line',
    role: 'Maintainer',
    status: 'active'
  },
  {
    id: 6,
    avatarSrc: '/images/avatars/6.png',
    name: 'Crystal Mays',
    username: '@crystal99',
    email: 'Norene_Bins@yahoo.com',
    iconClass: 'text-warning',
    roleIcon: 'ri-edit-box-line',
    role: 'Editor',
    status: 'pending'
  },
  {
    id: 7,
    avatarSrc: '/images/avatars/7.png',
    name: 'Mary Garcia',
    username: '@marygarcia4',
    email: 'Emmitt.Walker14@hotmail.com',
    iconClass: 'text-info',
    roleIcon: 'ri-pie-chart-2-line',
    role: 'Maintainer',
    status: 'inactive'
  },
  {
    id: 8,
    avatarSrc: '/images/avatars/8.png',
    name: 'Megan Roberts',
    username: '@megan78',
    email: 'Patrick.Howe73@gmail.com',
    iconClass: 'text-success',
    roleIcon: 'ri-user-3-line',
    role: 'Subscriber',
    status: 'active'
  }
]

const TableCategories = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [selectedCategory, setSelectedCategory] = React.useState<TableBodyRowType | null>(null)
  const [selected, setSelected] = React.useState<number[]>([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>, category: TableBodyRowType) => {
    setAnchorEl(event.currentTarget)
    setSelectedCategory(category)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
    setSelectedCategory(null)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rowsData.map(category => category.id)

      setSelected(newSelected)
    } else {
      setSelected([])
    }
  }

  const handleCheckboxClick = (id: number) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected: number[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1

  const open = Boolean(anchorEl)

  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page');
  const searchParam = searchParams.get('search');
  const [apicall, setApicall] = React.useState(false);
  const [id, setId] = React.useState(null);

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
    <div className='overflow-x-auto'>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th>
              <Checkbox
                indeterminate={selected.length > 0 && selected.length < rowsData.length}
                checked={rowsData.length > 0 && selected.length === rowsData.length}
                onChange={handleSelectAllClick}
              />
            </th>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rowsData.map((row, index) => (
            <tr key={index}>
              <td>
                <Checkbox
                  checked={isSelected(row.id)}
                  onChange={() => handleCheckboxClick(row.id)}
                />
              </td>
              <td className='!plb-1'>
                <div className='flex items-center gap-3'>
                  <CustomAvatar src={row.avatarSrc} size={34} />
                  <div className='flex flex-col'>
                    <Typography color='text.primary' className='font-medium'>
                      {row.name}
                    </Typography>
                    <Typography variant='body2'>{row.username}</Typography>
                  </div>
                </div>
              </td>
              <td className='!plb-1'>
                <Typography>{row.email}</Typography>
              </td>
              <td className='!plb-1'>
                <div className='flex gap-2'>
                  <i className={classnames(row.roleIcon, row.iconClass, 'text-[22px]')} />
                  <Typography color='text.primary'>{row.role}</Typography>
                </div>
              </td>
              <td className='!pb-1'>
                <Chip
                  className='capitalize'
                  variant='tonal'
                  color={row.status === 'pending' ? 'warning' : row.status === 'inactive' ? 'secondary' : 'success'}
                  label={row.status}
                  size='small'
                />
              </td>
              <td>
                <div className='flex items-center'>
                  <Button size='medium' onClick={event => handlePopoverOpen(event, row)}>
                    <i className='ri-more-2-line text-textSecondary text-[22px]'></i>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handlePopoverClose}
        PaperProps={{
          elevation: 1,
          sx: {
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px'
          }
        }}
      >
        <MenuItem onClick={() => console.log(`Download ${selectedCategory?.name}`)}>
          <i className='ri-download-line' /> Download
        </MenuItem>
        <MenuItem onClick={() => console.log(`Delete ${selectedCategory?.name}`)}>
          <i className='ri-delete-bin-7-line' /> Delete
        </MenuItem>
        <MenuItem onClick={() => console.log(`Duplicate ${selectedCategory?.name}`)}>
          <i className='ri-stack-line' /> Duplicate
        </MenuItem>
      </Menu>
    </div>
      <TablePagination
        component="div"
        count={rowsData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

    </>
  )
}

export default TableCategories
