import type { ReactElement, ReactNode } from 'react'
import React from 'react'

import { Drawer, IconButton, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'


type TPopupModalProps = {
  open: boolean;
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  title: string;
  children: ReactElement<{ toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void }>;
};

const PopupSheetModal = ({ open, toggleDrawer, title, children }: TPopupModalProps) => {



return (
    <>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        <div style={{ width: 400, padding: 16 }}>
          <div className='flex items-center justify-between'>
            <Typography variant='h5'>{title}</Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <i className='ri-close-line text-2xl'></i>
            </IconButton>
          </div>
          <Divider />
          {React.cloneElement(children, { toggleDrawer })}
        </div>
      </Drawer>
    </>
  )
}

export default PopupSheetModal
