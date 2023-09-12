import React from "react";
import { Typography, Grid } from '@mui/material';

function Contact() {
  return (
    <Grid container justifyContent="center">
      <Grid container justifyContent="center" alignItems="center">
        <Grid>
          <Typography variant="h3" sx={{ mt:8, mb:1 }}>
            Contact Us
          </Typography>
        </Grid>
      </Grid>

    <Grid container justifyContent="center" alignItems="center" sx={{ m:2}} >
      <Grid item xs={12} sm={6}>
        <Grid>
          <Grid textAlign="center">
            <Typography variant="h6">
              100 Congress Ave. 1600, Austin, TX
            </Typography>
            <Typography variant="h6">
              Email: saporiditalia_atx@gmail.com
            </Typography>
            <Typography variant="h6">
              Phone: +1 512 215 5555  
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container justifyContent="center" alignItems="center">
          LOCATION MAP
        {/* Will add later */}
        </Grid>
      </Grid>
    </Grid>

    </Grid>
  );
}

export default Contact;