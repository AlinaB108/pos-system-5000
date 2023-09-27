import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


function PosManagerProfile() {
  return (
    <Grid container direction="row" alignItems="center" justifyContent="center" height="50vh" display="flex"> 
      <Box xs={3} display="flex" flexDirection="column" justifyContent="center" padding={1}>
        <Button variant="contained" href="/pos/menu" size="large">
            Menu
        </Button>
      </Box>
      <Box xs={3} display="flex" flexDirection="column" justifyContent="center" padding={1}>
        <Button variant="contained" href="/pos/employees" size="large">
          Employees
        </Button>
      </Box>
      <Box xs={3} display="flex" flexDirection="column" justifyContent="center" padding={1}>
        <Button variant="contained" href="/pos/orders" size="large">
          Manager
        </Button>
      </Box>
    </Grid>
  );
}

export default PosManagerProfile;