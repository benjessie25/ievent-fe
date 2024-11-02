import React, { useState, useEffect, useCallback } from 'react'

import { useSearchParams, usePathname } from 'next/navigation'

import { useRouter } from 'next-nprogress-bar'



import TableHead from './tableHead'
import tableStyles from '@core/styles/table.module.css'
import CustomAvatar from '@core/components/mui/Avatar'
import Card from '@mui/material/Card'

interface HeadData {
  id: string
  label: string
  alignRight?: boolean
}

interface Data {
  data: any[]
  page: number
  totalPages: number
}

interface Filter {
  name: string
  param: string
  data: { slug: string; name?: string; title?: string }[]
}

interface CustomTableProps {
  headData: HeadData[]
  data: Data
  isLoading: boolean
  mobileRow?: React.ElementType
  row: React.ElementType
  filters?: Filter[]
  isSearch?: boolean
  handleClickOpen?: (prop: any) => () => void
  heading?: string
}

export default function CustomTable({
  headData,
  data,
  isLoading,
  heading,
  row,
  filters = [],
  ...rest
}: CustomTableProps) {
  const { push } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [state, setState] = useState<Record<string, string>>({})
  const queryString = searchParams.toString()

  const handleChange = (param: string, val: string) => {
    setState(prevState => ({ ...prevState, [param]: val }))
    push(`${pathname}?` + createQueryString(param, val))
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)

      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  useEffect(() => {
    if (queryString) {
      const params = new URLSearchParams(queryString)
      const paramsObject: Record<string, string> = {}

      // @ts-ignore
      for (const [key, value] of params.entries()) {
        paramsObject[key] = value
      }

      setState(prevState => ({ ...prevState, ...paramsObject }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryString])

  const Component = row

  return (
    <>
      <Card>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <TableHead headData={headData} />
          <tbody>
            {data?.data?.map((item, index) => <Component key={index} row={item} isLoading={isLoading} {...rest} />)}
          </tbody>
        </table>
      </div>
      </Card>
    </>
  )
}
