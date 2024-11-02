import type { FC } from 'react';
import React from 'react';

import { TableRow, TableCell, TableHead, Checkbox } from '@mui/material'

interface HeadCell {
  label: string;
  alignRight?: boolean;
}

interface TableHeadMainProps {
  headData: HeadCell[];
}

const TableHeadMain: FC<TableHeadMainProps> = ({ headData }) => {


return (
  <>
    <thead>
      <tr>
        {headData.map(headCell => (
          <th key={headCell.label} align={headCell.alignRight ? 'right' : 'left'} >{headCell.label}</th>
        ))}

      </tr>
    </thead>
  </>
)
};

export default TableHeadMain;
