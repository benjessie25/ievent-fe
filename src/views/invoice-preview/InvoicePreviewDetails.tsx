import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

const InvoicePreviewDetails: React.FC = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6}>
        <div className="flex flex-col gap-4">
          <Typography variant="body1" fontWeight="bold">Invoice To:</Typography>
          <Typography>Vladir Boss</Typography>
          <Typography>Hall-Robbins PLC</Typography>
          <Typography>7777 Mendez Plains</Typography>
          <Typography>(616) 865-4180</Typography>
          <Typography>don85@johnson.com</Typography>
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <div className="flex flex-col gap-4">
          <Typography variant="body1" fontWeight="bold">Bill To:</Typography>
          <Typography>Total Due: $12,110.55</Typography>
          <Typography>Bank Name: American Bank</Typography>
          <Typography>Country: United States</Typography>
          <Typography>IBAN: ETD95476213874685</Typography>
          <Typography>SWIFT Code: BR91905</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default InvoicePreviewDetails;
