import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';

const OrderList = ({ tables }) => {
  console.log(tables)
  if (!tables.length) {
    return <h3>No Orders Yet</h3>;
  }

  return (
    <Grid container justifyContent="center">
      {tables.map(table => {
        return <Grid container justifyContent="center" sx={{ mt: 2 }} item xs={12} md={4} sm={6}>
          <Grid>
            <Button>
                <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden', width: '300px' }} height='25vh' style={{ backgroundColor: "#fff" }}>
                  <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                    Table {table.tableNum}
                  </Typography>
                  <Typography color="#000" sx={{ pl: 1, pr: 1 }} height="fit-content">
                    {table.order.map(item => {
                      return <div key={item._id}>
                        <Typography>{item.item} ${item.price}</Typography>
                      </div>
                    })}
                  </Typography>
                </Box>
              </Button>
          </Grid>
        </Grid>
      })}
    </Grid>
  );
};

export default OrderList;
