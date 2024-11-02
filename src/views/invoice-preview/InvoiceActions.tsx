import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const InvoiceActions: React.FC = () => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <Button variant="contained" color="primary" fullWidth startIcon={<i className="ri-send-plane-line" />}>
          Send Invoice
        </Button>
        <Button variant="outlined" color="secondary" fullWidth>
          Download
        </Button>
        <div className="flex gap-4">
          <Button variant="outlined" color="secondary" fullWidth>
            Print
          </Button>
          <Button variant="outlined" color="secondary" fullWidth>
            Edit
          </Button>
        </div>
        <Button variant="contained" color="success" fullWidth startIcon={<i className="ri-money-dollar-circle-line" />}>
          Add Payment
        </Button>
      </CardContent>
    </Card>
  );
};

export default InvoiceActions;
