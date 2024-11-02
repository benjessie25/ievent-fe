import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider'

const InvoicePreviewSummary: React.FC = () => {
  return (
    <div className="flex justify-between flex-col gap-y-4 sm:flex-row">
      <div className="min-is-[200px]">
        <div className="flex items-center justify-between">
          <Typography>Subtotal:</Typography>
          <Typography fontWeight="bold">$1800</Typography>
        </div>
        <div className="flex items-center justify-between">
          <Typography>Discount:</Typography>
          <Typography fontWeight="bold">$28</Typography>
        </div>
        <div className="flex items-center justify-between">
          <Typography>Tax:</Typography>
          <Typography fontWeight="bold">21%</Typography>
        </div>
        <Divider sx={{ my: 1 }} />
        <div className="flex items-center justify-between">
          <Typography>Total:</Typography>
          <Typography fontWeight="bold">$1690</Typography>
        </div>
      </div>
    </div>
  );
};

export default InvoicePreviewSummary;
