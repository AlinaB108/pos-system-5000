import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


function PosServerProfile() {
  return (
    <Grid container direction="row" alignItems="center" justifyContent="center" height="50vh" display="flex"> 
      <Box item xs={3} display="flex" container flexDirection="column" justifyContent="center" padding={1}>
        <Button variant="contained" href="/pos/menu" size="large">
            Menu
        </Button>
      </Box>
      <Box item xs={3} display="flex" container flexDirection="column" justifyContent="center" padding={1}>
        <Button variant="contained" href="/pos/employees" size="large">
          Employees
        </Button>
      </Box>
      <Box item xs={3} display="flex" container flexDirection="column" justifyContent="center" padding={1}>
        <Button variant="contained" href="/pos/ordrs" size="large">
          Manager
        </Button>
      </Box>
    </Grid>
  );
}

export default PosServerProfile;