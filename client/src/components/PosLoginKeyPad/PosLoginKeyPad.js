import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_POS } from '../../utils/mutations';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import { Typography, Button, Grid, Box, Paper } from '@mui/material';

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

  // const LoginAttempt = () => {
  //   const { loading, data } = useMutation(LOGIN_POS);

  //   console.log(data)
  //   // FIX THE CODE HERE TO GRAB USER ID FROM LOGIN PARAMS
  // };

  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ pt: 8 }}>
      <Grid item xs={12} md={8} lg={6}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h5" sx={{ p: 3, color: 'white' }}>
            Enter Your Employee Number:
          </Typography>
          <Paper className="numpadback" sx={{ p: 3, bgcolor: 'background.paper2'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',}}>
              <input type="text" value={employeeNumber} readOnly style={{ fontSize: '1.5rem', padding: '8px', width: '100%' }}/>
              <Grid container spacing={2} className="keypad">
                <Grid item xs={4}>
                  <Button variant="numpad" size="large" onClick={() => appendToEmployeeNumber('1')}>1</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="numpad" size="large" onClick={() => appendToEmployeeNumber('2')}>2</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="numpad" size="large" onClick={() => appendToEmployeeNumber('3')}>3</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="numpad" size="large" onClick={() => appendToEmployeeNumber('4')}>4</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="numpad" size="large" onClick={() => appendToEmployeeNumber('5')}>5</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="numpad" size="large" onClick={() => appendToEmployeeNumber('6')}>6</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="numpad" size="large" onClick={() => appendToEmployeeNumber('7')}>7</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="numpad" size="large" onClick={() => appendToEmployeeNumber('8')}>8</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="numpad" size="large" onClick={() => appendToEmployeeNumber('9')}>9</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" size="large" color="error" sx={{ width: "100%", height: '4.5rem' }} onClick={() => clearLoginAttempt()}>CLEAR</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="numpad" size="large" onClick={() => appendToEmployeeNumber('0')}>0</Button>
                </Grid>
                <Grid item xs={4}>
                  {/* <Button variant="contained" size="large" color="success" sx={{ width: "100%", height: '4.5rem' }} onClick={loginAttempt}>GO</Button> */}
                </Grid>
              </Grid>
            </Box>
          </Paper>
          {/* Added current time */}
          <Time/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PosLoginKeyPad;