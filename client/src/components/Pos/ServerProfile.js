import React from 'react';
import { Box, Grid, Button, Paper, Typography } from '@mui/material';

function PosServerProfile({ profile }) {
  var allTables = profile.tables
  function deez2(order) {
    var totalPrice = 0
    for (let i = 0; i < order.length; i++) {
      totalPrice += order[i].price
    }
    console.log(totalPrice)
    return totalPrice.toFixed(2)

  }
  return (
    <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 4 }}>
      {/* First Container */}
      <Grid item xs={12} sm={6}>
        <Grid container justifyContent="center" alignItems="stretch" height='fit-content'>
          <Grid item xs={11}>
            <Typography variant="h5" textAlign='center' sx={{ p: 2, backgroundColor: "#d4e1f1" }}>
              Open Tables
            </Typography>
            <Grid container justifyContent="center">
              {
                allTables.map(item => {
                  return <Grid container justifyContent="center" alignItems="center" item xs={6} sm={6} md={4}>
                    <Button href={`/pos/order/${item._id}`}>
                      <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' width='50vw' style={{ backgroundColor: "#fff" }}>
                        <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                          Table {item.tableNum}
                        </Typography>
                        <Typography sx={{ pl: 1, pr: 1 }} color="#000">
                          <p>Total Items: {item.order.length}</p>
                          <p>Total Price ${deez2(item.order)}</p>
                        </Typography>
                      </Box>
                    </Button>
                  </Grid>
                })
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Second Container */}
      <Grid item xs={12} sm={6} sx={{ pl: 2 }}>
        <Grid container justifyContent="center" alignItems="stretch" height='fit-content'>
          <Grid item xs={12} sm={6} sx={{ pb: 2 }}>
            <Paper sx={{ marginRight: '20px' }}>
              <Typography variant="h5" textAlign='center' sx={{ p: 2, backgroundColor: "#d4e1f1" }}>
                New Table Info
              </Typography>
              <Grid sx={{ p: 2 }} style={{ overflowY: 'auto' }}>
                {/* FIX THESE BUTTONS */}
                <Button textAlign='center'>Table Number</Button>
                <Button textAlign='center'>Guest Count</Button>
                {/* FIX THESE BUTTONS */}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ pb: 2 }}>
            <Paper sx={{ marginRight: '20px' }}>
              <Typography variant="h5" textAlign='center' sx={{ p: 2, backgroundColor: "#d4e1f1" }}>
                New Table Info
              </Typography>
              <Grid sx={{ p: 2 }} style={{ overflowY: 'auto' }}>
                {/* FIX THESE BUTTONS */}
                <Button textAlign='center'>SHOW YOU YOUR INPUT HERE</Button>
                <Button textAlign='center'>SHOW YOU YOUR INPUT HERE</Button>
                <Button textAlign='center' href="/pos/order">NEW ORDER</Button>
                {/* FIX THESE BUTTONS */}
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ pb: 2 }}>
            {/* KEYPAD FUNCTIONALITY MISSINGvv */}
            <Paper sx={{ marginRight: '20px' }}>
              <Typography variant="h5" textAlign='center' sx={{ p: 2, backgroundColor: "#d4e1f1" }}>
                Input
              </Typography>
              <Grid sx={{ p: 2 }} style={{ overflowY: 'auto' }}>
                <Grid container spacing={2} className="keypad">
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large">1</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large">2</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large">3</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large">4</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large">5</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large">6</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large">7</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large">8</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large">9</Button>
                  </Grid>
                  <Grid item xs={4} />
                  <Grid item xs={4}>
                    <Button variant="numpad" size="large">0</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            {/* KEYPAD ^^ */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PosServerProfile;