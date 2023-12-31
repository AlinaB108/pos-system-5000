import React, { useState, useEffect } from 'react';
import { Box, Grid, Button, Paper, Typography, Input } from '@mui/material';
import { UPDATE_TABLE } from '../../utils/mutations';
import { useMutation } from "@apollo/client";

function PosServerProfile({ profile }) {
  const [selectedInput, setSelectedInput] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [openOrder, { data, orderError }] = useMutation(UPDATE_TABLE)

  const append = (n) => {
    if (selectedInput === 'Table Number') {
      setTableNumber(tableNumber + n);
    } else {
      setGuestCount(guestCount + n);
    }
  };

  const clearInputs = () => {
    setSelectedInput('');
    setTableNumber('');
    setGuestCount('');
  };

  var allTables = profile.tables;

  var allOpenTables = allTables.filter((table) => table.tableStatus === true)
  //no more deez :(
  function displayPrice(order) {
    var totalPrice = 0;
    for (let i = 0; i < order.length; i++) {
      totalPrice += order[i].price;
    }
    return totalPrice.toFixed(2);
  }

  const handleNewTable = async () => {
    try {
      const response = await openOrder({ variables: { 'tableNum': parseInt(tableNumber), 'tableStatus': true } })
      console.log(response.data.updateTable._id);
      window.location.assign(`/pos/order/${response.data.updateTable._id}`)
    } catch (err) {
      console.log(orderError);
    }
  }

  useEffect(() => {
    const handleKeypadClick = (n) => {
      if (selectedInput === 'Table Number') {
        setTableNumber(tableNumber + n);
      } else {
        setGuestCount(guestCount + n);
      }
    };

    const keypadButtons = document.querySelectorAll('.numpad');
    keypadButtons.forEach((button, index) => {
      button.addEventListener('click', () => handleKeypadClick(index + 1));
    });

    return () => {
      keypadButtons.forEach((button, index) => {
        button.removeEventListener('click', () => handleKeypadClick(index + 1));
      });
    };
  }, [selectedInput, tableNumber, guestCount]);

  return (
    <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 4 }}>
      {/* First Container */}
      <Grid item xs={12} sm={6}>
        <Grid container justifyContent="center" alignItems="stretch" height='fit-content'>
          <Grid item xs={11}>
            <Typography variant="h5" sx={{ p: 2, backgroundColor: "#d4e1f1", textAlign: 'center' }}>
              Open Tables
            </Typography>
            <Grid container justifyContent="center">
              {allOpenTables.map((item) => {
                return (
                  <Grid container justifyContent="center" alignItems="center" item xs={6} sm={6} md={4} key={item._id}>
                    <Button href={`/pos/order/${item._id}`}>
                      <Box textAlign="center" sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' width='50vw' style={{ backgroundColor: "#fff" }}>
                        <Typography variant="h6" sx={{ textAlign: 'center', p: 1, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                          Table {item.tableNum}
                        </Typography>
                        <Typography sx={{ p: 2 }} color="#000">
                          Items: {item.order.length}
                          <br />
                          Price ${displayPrice(item.order)}
                        </Typography>
                      </Box>
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Second Container */}
      <Grid item xs={12} sm={6} sx={{ pl: 2 }}>
        <Grid container justifyContent="center" alignItems="stretch" height='fit-content'>
          <Paper sx={{ mr: '20px' }}>
            <Typography variant="h5" sx={{ p: 2, backgroundColor: "#d4e1f1", textAlign: 'center' }}>
              New Table
            </Typography>
            <Grid sx={{ p: 2 }} style={{ overflowY: 'auto' }}>
              <Typography sx={{ p: 2 }}>Table Number</Typography>
              <Input onClick={() => setSelectedInput('Table Number')} value={tableNumber} fullWidth sx={{ textAlign: 'center' }} readOnly />
              <Typography sx={{ p: 2 }}>Guest Count</Typography>
              <Input onClick={() => setSelectedInput('Guest Count')} value={guestCount} fullWidth sx={{ textAlign: 'center' }} readOnly />
              <Button variant="dobtn" alignItems="center" sx={{ p: 2, ml:'25%', mt: 4 }} onClick={() => handleNewTable()}>NEW ORDER</Button>
            </Grid>
          </Paper>
          {/* Keypad */}
          <Grid item xs={12} md={5} lg={6} sx={{ margin: 'auto' }}>
            <Paper sx={{ marginRight: '20px' }}>
              <Typography variant="h5" textAlign='center' sx={{ p: 2, backgroundColor: "#d4e1f1" }}>
                Input
              </Typography>
              <Grid sx={{ p: 2 }} style={{ overflowY: 'auto' }}>
                <Grid container spacing={2} className="keypad">
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large" onClick={() => append(1)}>1</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large" onClick={() => append(2)}>2</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large" onClick={() => append(3)}>3</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large" onClick={() => append(4)}>4</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large" onClick={() => append(5)}>5</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large" onClick={() => append(6)}>6</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large" onClick={() => append(7)}>7</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large" onClick={() => append(8)}>8</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large" onClick={() => append(9)}>9</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="dontbtn" sx={{ width:'100%', height:'100%'}} onClick={clearInputs}>Clear</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large" onClick={() => append(0)}>0</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PosServerProfile;
