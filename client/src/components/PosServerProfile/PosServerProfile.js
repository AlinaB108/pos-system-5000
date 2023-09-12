import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';

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
          <Button textAlign='center' href="/pos/order">NEW ORDER</Button>
        </Grid>
      </Grid>

      {/* Second Container */}
      <Grid item xs={12} sm={6} sx={{ pl: 2 }}>
        <Grid container justifyContent="center" alignItems="stretch" height='fit-content'>
          <Grid item xs={12} sm={6} sx={{ pb: 2 }}>
            <Paper sx={{ marginRight: '20px' }}>
              <Typography variant="h5" textAlign='center' sx={{ p: 2, backgroundColor: "#d4e1f1" }}>
                Coworkers
              </Typography>
              <Grid sx={{ p: 2 }} style={{ overflowY: 'auto' }}>
                <p>You</p>
                <p>Not You</p>
                <p>Not You x2</p>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ pb: 2 }}>
            <Paper sx={{ marginRight: '20px' }}>
              <Typography variant="h5" textAlign='center' sx={{ p: 2, backgroundColor: "#d4e1f1" }}>
                Sections
              </Typography>
              <Grid sx={{ p: 2 }} style={{ overflowY: 'auto' }}>
                <p>20,21,22</p>
                <p>30,31,32</p>
                <p>40,41,42</p>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PosServerProfile;