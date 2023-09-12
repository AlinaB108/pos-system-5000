import React from "react";
import { Typography, Grid } from '@mui/material';
import rest from "../../assets/rest.jpg";

function About() {
  return (
    <Grid container direction="row" style={{ marginTop: "50px" }} id="About">
      <Grid container item xs={12} md={6} alignItems="center" justifyContent="center" sx={{ px: 2 }}>
        <img src={rest} width='100%' height='auto' alt="A restaurant with black tables, floor and yellow ceiling" />
      </Grid>
      <Grid container item xs={12} md={6} alignItems="center" justifyContent="center" sx={{ px: 2 }}>
        <Grid sx={{ pt: 2 }} textAlign='left'>
          <Typography variant="h3" sx={{ my:1 }}>
            About us
          </Typography>
          <Typography variant="h6">
            Welcome to Sapori D'Italia, where passion for authentic Italian cuisine meets a warm, inviting atmosphere. 
            Nestled in the heart of Austin, our restaurant is a culinary oasis where tradition 
            and innovation come together to create an unforgettable dining experience.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;