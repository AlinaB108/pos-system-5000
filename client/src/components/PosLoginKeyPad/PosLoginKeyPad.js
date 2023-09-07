import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './PosLoginKeypad.css';

import { Typography, Button, Grid, Box, Paper } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#f2f4f3', // Change this to your desired primary color
    },
    secondary: {
      main: '#f50057', // Change this to your desired secondary color
    },
  },
});

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Typography variant="h6" sx={{ p: 3 }} style={{ color: 'white' }}>
      {currentTime}
    </Typography>
  );
};

const PosLoginKeyPad = () => {
  const [employeeNumber, setEmployeeNumber] = useState('');

  const appendToEmployeeNumber = (number) => {
    const newEmployeeNumber = employeeNumber + number;
    setEmployeeNumber(newEmployeeNumber);
  };

  const clearLoginAttempt = () => {
    setEmployeeNumber('');
  };

  const loginAttempt = () => {
    // add code to save to global state your id from loggin gin
  };

  return (
    <ThemeProvider theme={theme}>
    <Grid container alignItems="center" justifyContent="center" sx={{ pt: 8 }}>
      <Grid item xs={12} md={8} lg={6}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h5" sx={{ p: 3 }} style={{ color: 'white' }}>
            Enter Your Employee Number:
          </Typography>
          <Paper className="numpadback" sx={{ p: 3 }} style={{backgroundColor:"#d4e1f1"}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',}}>
              <input type="text" value={employeeNumber} readOnly style={{ fontSize: '1.5rem', padding: '8px', width: '100%' }}/>
              <Grid container spacing={2} className="keypad">
                <Grid item xs={4}>
                  <Button variant="contained" size="large" className="padBtn" onClick={() => appendToEmployeeNumber('1')}>1</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" size="large" className="padBtn" onClick={() => appendToEmployeeNumber('2')}>2</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" size="large" className="padBtn" onClick={() => appendToEmployeeNumber('3')}>3</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" size="large" className="padBtn" onClick={() => appendToEmployeeNumber('4')}>4</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" size="large" className="padBtn" onClick={() => appendToEmployeeNumber('5')}>5</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" size="large" className="padBtn" onClick={() => appendToEmployeeNumber('6')}>6</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" size="large" className="padBtn" onClick={() => appendToEmployeeNumber('7')}>7</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" size="large" className="padBtn" onClick={() => appendToEmployeeNumber('8')}>8</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" size="large" className="padBtn" onClick={() => appendToEmployeeNumber('9')}>9</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" size="large" className="padBtn" color="error" onClick={() => clearLoginAttempt()}>CLEAR</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" size="large" className="padBtn" onClick={() => appendToEmployeeNumber('0')}>0</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" size="large" className="padBtn" color="success" onClick={loginAttempt}>GO</Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
          {/* Added current time */}
          <Time/>
        </Box>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
};

export default PosLoginKeyPad;