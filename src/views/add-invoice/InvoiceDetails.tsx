import TextField from '@mui/material/TextField'
import { DatePicker } from '@mui/lab'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import { Typography } from '@mui/material'

const InvoiceDetails: React.FC = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h6">Invoice #4987</Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField label="Date Issued" fullWidth InputProps={{ startAdornment: <InputAdornment position="start">#</InputAdornment> }} />
        <DatePicker label="Date Issued" onChange={() => {}} renderInput={(params) => <TextField {...params} />} />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField label="Date Due" fullWidth />
        <DatePicker label="Date Due" onChange={() => {}} renderInput={(params) => <TextField {...params} />} />
      </Grid>
    </Grid>
  );
};

export default InvoiceDetails;
