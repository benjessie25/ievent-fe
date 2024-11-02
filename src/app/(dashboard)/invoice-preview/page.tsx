import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow, Divider } from '@mui/material';
import InvoiceHeader from '@views/invoice-preview/InvoiceHeader'
import InvoicePreviewDetails from '@views/invoice-preview/InvoicePreviewDetails'
import InvoicePreviewItems from '@views/invoice-preview/InvoicePreviewItems'
import InvoicePreviewSummary from '@views/invoice-preview/InvoicePreviewSummary'
import InvoiceNote from '@views/invoice-preview/InvoicePreviewNote'
import InvoiceActions from '@views/invoice-preview/InvoiceActions'

const InvoicePreviewPage = () => {
  return (
    <Grid container spacing={6}>
      {/* Section principale de la prévisualisation de la facture */}
      <Grid item xs={12} md={9}>
        <Card className="previewCard">
          <CardContent>
            <InvoiceHeader />
            <Divider variant="fullWidth" />
            <InvoicePreviewDetails />
            <InvoicePreviewItems />
            <InvoicePreviewSummary />
            <InvoiceNote />
          </CardContent>
        </Card>
      </Grid>

      {/* Section des options d'action */}
      <Grid item xs={12} md={3}>
        <InvoiceActions />
      </Grid>
    </Grid>
  );
};

export default InvoicePreviewPage;
