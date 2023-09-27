import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';

const OrderList = ({ tables }) => {
  if (!tables.length) {
    return <h3>No Orders Yet</h3>;
  }

  return (
    <Grid container justifyContent="center" sx={{ mt: 2, maxHeight: "60vh", overflowY: "auto", 
      '::-webkit-scrollbar': {
      width: '2em',
      },
      '::-webkit-scrollbar-thumb': {
      backgroundColor: '#7ca6f3',
      borderRadius: '10px'
      } 
      }}>
    {tables.map(table => (
      <Grid container justifyContent="center" item xs={12} lg={2.5} md={3} sm={6} key={table.tableNum} >
        <Grid>
          <Button>
            <Grid sx={{ mt: 4, borderRadius: '25px', overflow: 'hidden', width: '280px', height: '25vh', backgroundColor: '#fff' }}>
              <Typography variant="h6" textAlign='center' sx={{ p: 1, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                Table {table.tableNum}
              </Typography>
              <Grid sx={{ pt: 1, maxHeight: '25vh', overflowY: 'auto',
              '::-webkit-scrollbar': {
              width: '1em',
              },
              '::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba (0, 0, 0)',
              borderRadius: '10px'} }}>
                <Typography color="#000" height="fit-content" lineHeight="2.5">
                  {table.order.map(item => (
                    <div key={item._id}>
                      <Typography variant="innerText">{item.item} ${item.price}</Typography>
                    </div>
                  ))}
                </Typography>
              </Grid>
            </Grid>
          </Button>
        </Grid>
      </Grid>
    ))}
    </Grid>
  );
};

export default OrderList;
