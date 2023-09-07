import React from "react";
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './Profile.css';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Profile = () => {
  return (
    <div className="container">
      <NavPOS />
      <OptionBtn />
    </div>
  );
};

function NavPOS() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#d4e1f1' }} >
      <Toolbar sx={{ py: 2 }}>
        <Typography variant="h5" style={{ textDecoration: 'none', color: '#23296c' }}>
          Logo
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
          <Typography variant="h3" style={{ textDecoration: 'none', color: '#23296c' }}>
            SIDEKICK
          </Typography>
        </div> 
        <div style={{ marginLeft: 'auto' }}>
          <Button variant="contained" href="/pos" color="error">
            EXIT
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

function OptionBtn() {
  return (
    <Grid container direction="row" alignItems="center" justifyContent="center" height="50vh" display="flex"> 
      <Box item xs={3} display="flex" container flexDirection="column" justifyContent="center" padding={1}>
        <Button variant="contained" href="/pos" size="large">
            Menu
        </Button>
      </Box>
      <Box item xs={3} display="flex" container flexDirection="column" justifyContent="center" padding={1}>
        <Button variant="contained" href="/pos" size="large">
          All Orders
        </Button>
      </Box>
      <Box item xs={3} display="flex" container flexDirection="column" justifyContent="center" padding={1}>
        <Button variant="contained" href="/pos" size="large">
          Employees
        </Button>
      </Box>
      <Box item xs={3} display="flex" container flexDirection="column" justifyContent="center" padding={1}>
        <Button variant="contained" href="/pos" size="large">
          Manager
        </Button>
      </Box>
    </Grid>
  );
}






export default Profile;
