import React from "react";
import { Typography, Grid } from '@mui/material';
import rest2 from "../../assets/rest2.jpg";

function Menu() {
  return (
    <Grid container direction="row" style={{ marginTop: "50px" }} id="Menu">
      <Grid container item xs={12} md={6} alignItems="center" justifyContent="center" sx={{ px: 2 }}>
        <Grid sx={{ pt: 2 }} textAlign='right'>
          <Typography variant="h3" sx={{ my:1 }}>
            Menu
          </Typography>
          <Typography variant="h6">
            Our menu is a delightful journey through Italy's diverse regions, featuring time-honored recipes passed down through generations. 
            From the savory pasta dishes of Tuscany to the wood-fired pizzas of Naples, every bite is a taste of Italy's culinary heritage.
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={6} alignItems="center" justifyContent="center" sx={{ px: 2 }}>
        <img src={rest2} width='100%' height='auto' alt="A white plate with fish on a table" />
      </Grid>
    </Grid>
  );
}

export default Menu;