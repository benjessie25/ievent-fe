import { Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const InvoiceItems: React.FC = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 3 }}>
      <Grid item xs={12}>
        <Typography variant="h6">Items</Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField label="Item" select fullWidth>
          <MenuItem value="App Design">App Design</MenuItem>
          <MenuItem value="Customization">Customization</MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={6} sm={2}>
        <TextField label="Cost" type="number" fullWidth />
      </Grid>

      <Grid item xs={6} sm={2}>
        <TextField label="Hours" type="number" fullWidth />
      </Grid>

      <Grid item xs={6} sm={2}>
        <Typography variant="body1">$24.00</Typography>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" startIcon={<i className="ri-add-line" />}>Add Item</Button>
      </Grid>
    </Grid>
  );
};

export default InvoiceItems;
