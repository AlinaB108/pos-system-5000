import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';

const OrderList = ({ tables }) => {
  if (!tables.length) {
    return <h3>No Orders Yet</h3>;
  }

  return (
    <Grid container justifyContent="center">
    {tables.map(table => (
      <Grid container justifyContent="center" sx={{ mt: 2 }} item xs={12} md={3} sm={6} key={table.tableNum}>
        <Grid>
          <Button>
            <Box sx={{ mt: 4, borderRadius: '25px', overflow: 'hidden', width: '300px' }} height='25vh' style={{ backgroundColor: "#fff" }}>
              <Typography variant="h6" textAlign='center' sx={{ p: 1, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                Table {table.tableNum}
              </Typography>
              <Box sx={{ pt: 1, maxHeight: '25vh', overflowY: 'auto' }}> {/* Adjust maxHeight as needed */}
                <Typography color="#000" height="fit-content" lineHeight="2.5">
                  {table.order.map(item => (
                    <div key={item._id}>
                      <Typography variant="innerText">{item.item} ${item.price}</Typography>
                    </div>
                  ))}
                </Typography>
              </Box>
            </Box>
          </Button>
        </Grid>
      </Grid>
    ))}
    </Grid>
  );
};

export default OrderList;
