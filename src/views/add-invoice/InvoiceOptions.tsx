import { Typography } from '@mui/material'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

const InvoiceOptions: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Button variant="contained" color="primary" fullWidth startIcon={<i className="ri-send-plane-line" />}>
          Send Invoice
        </Button>
        <Button variant="outlined" color="secondary" fullWidth sx={{ mt: 2 }}>
          Preview
        </Button>
        <Button variant="outlined" color="secondary" fullWidth sx={{ mt: 2 }}>
          Save
        </Button>

        <TextField label="Accept payments via" select fullWidth sx={{ mt: 4 }}>
          <MenuItem value="Internet Banking">Internet Banking</MenuItem>
          <MenuItem value="Credit Card">Credit Card</MenuItem>
        </TextField>

        <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
          <Typography variant="body2">Payment Terms</Typography>
          <Switch defaultChecked />
        </Grid>
        <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
          <Typography variant="body2">Client Notes</Typography>
          <Switch />
        </Grid>
        <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
          <Typography variant="body2">Payment Stub</Typography>
          <Switch />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InvoiceOptions;
