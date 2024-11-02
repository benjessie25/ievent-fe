"use client"

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'

import InvoiceDetails from '@views/add-invoice/InvoiceDetails'
import InvoiceItems from '@views/add-invoice/InvoiceItems'
import InvoiceSummary from '@views/add-invoice/InvoiceSummary'
import InvoiceOptions from '@views/add-invoice/InvoiceOptions'


const InvoicePage = () => {

  return (
    <>
      <Grid container spacing={6}>
        {/* Section principale de l'édition de la facture */}
        <Grid item xs={12} md={9}>
          <Card>
            <CardContent>
              <InvoiceDetails />
              <Divider variant="fullWidth" />
              <InvoiceItems />
              <Divider variant="fullWidth" />
              <InvoiceSummary />
            </CardContent>
          </Card>
        </Grid>

        {/* Section des options de facturation */}
        <Grid item xs={12} md={3}>
          <InvoiceOptions />
        </Grid>
      </Grid>
    </>
  );
}

export default InvoicePage
