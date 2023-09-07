import React from "react";
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import './About.css'
import { Typography, Grid, Box} from '@mui/material';
import rest from "../../assets/rest.jpg";

function About() {
  return (
    // <div>
    //   <h2>About us</h2>
    //   <p>Welcome to Sapori D'Italia, where passion for authentic Italian cuisine meets a warm, inviting atmosphere. 
    //     Nestled in the heart of Austin, our restaurant is a culinary oasis where tradition 
    //     and innovation come together to create an unforgettable dining experience.
    //   </p>
    // </div>
    <Grid container direction="row" style={{ marginTop: "50px" }}>
      <Grid container item xs={12} md={6} alignItems="center" justifyContent="center" sx={{ px: 2 }}>
        <img src={rest} width='100%' height='auto' alt="A photo of a restaurant with black tables, floor and yellow ceiling" />
      </Grid>
      <Grid container item xs={12} md={6} alignItems="center" justifyContent="center" sx={{ px: 2 }}>
        <div>
          <h2>About us</h2>
          <p>Welcome to Sapori D'Italia, where passion for authentic Italian cuisine meets a warm, inviting atmosphere. 
          Nestled in the heart of Austin, our restaurant is a culinary oasis where tradition 
          and innovation come together to create an unforgettable dining experience.
          </p>
        </div>
      </Grid>
    </Grid>
  );
}

export default About;