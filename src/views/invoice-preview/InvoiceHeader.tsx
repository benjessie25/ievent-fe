import { Typography } from '@mui/material'

const InvoiceHeader: React.FC = () => {
  return (
    <div className='p-6 bg-actionHover rounded'>
      <div className='flex justify-between gap-y-4 flex-col sm:flex-row'>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center min-bs-[24px]'>
            <Typography variant='h5'>Materio</Typography>
          </div>
          <div>
            <Typography>Office 149, 450 South Brand Brooklyn</Typography>
            <Typography>San Diego County, CA 91905, USA</Typography>
            <Typography>+1 (123) 456 7891, +44 (876) 543 2198</Typography>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <Typography variant='h5'>Invoice #4987</Typography>
          <div className='flex flex-col gap-1'>
            <Typography>Date Issued: 13 Oct 2024</Typography>
            <Typography>Date Due: 23 Oct 2024</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceHeader
