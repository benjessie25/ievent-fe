import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

const InvoiceSummary: React.FC = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 3 }}>
      <Grid item xs={6}>
        <Typography variant="body1">Subtotal:</Typography>
        <Typography variant="body1">Discount:</Typography>
        <Typography variant="body1">Tax:</Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body1">Total:</Typography>
      </Grid>

      <Grid item xs={6} sx={{ textAlign: 'right' }}>
        <Typography variant="body1">$1800</Typography>
        <Typography variant="body1">$28</Typography>
        <Typography variant="body1">21%</Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body1">$1690</Typography>
      </Grid>
    </Grid>
  );
};

export default InvoiceSummary;
