import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const InvoicePreviewItems: React.FC = () => {
  const items = [
    { name: 'Premium Branding Package', description: 'Branding & Promotion', hours: 48, qty: 1, total: '$32' },
    { name: 'Social Media', description: 'Social media templates', hours: 42, qty: 1, total: '$28' },
    { name: 'Web Design', description: 'Web designing package', hours: 46, qty: 1, total: '$24' },
    { name: 'SEO', description: 'Search engine optimization', hours: 40, qty: 1, total: '$22' },
  ];

  return (
    <Table className="table_table__cB3AL">
      <TableHead>
        <TableRow>
          <TableCell>Item</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Hours</TableCell>
          <TableCell>Qty</TableCell>
          <TableCell>Total</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.hours}</TableCell>
            <TableCell>{item.qty}</TableCell>
            <TableCell>{item.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};


export default InvoicePreviewItems;
