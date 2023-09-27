import React from "react";
import { Typography, Grid } from '@mui/material';

function Contact() {
  return (
    <Grid container justifyContent="center" sx={{ mb:4 }} id="Contact">
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.764041980994!2d-97.74778630696616!3d30.26439542801849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5062cd591db%3A0x9eaad0932853166c!2s100%20Congress%20Ave.%2C%20Austin%2C%20TX%2078701!5e0!3m2!1sen!2sus!4v1694625033855!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{
            border: 0,
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </Grid>
      </Grid>
    </Grid>
    </Grid>
  );
}

export default Contact;