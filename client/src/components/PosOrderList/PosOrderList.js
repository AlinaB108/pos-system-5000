import React from 'react';
import { Box, Grid, Button, ListItemSecondaryAction, Paper, Typography, tableSortLabelClasses } from '@mui/material';

const OrderList = ({ tables }) => {
  console.log(tables)
  if (!tables.length) {
    return <h3>No Orders Yet</h3>;
  }

  return (
    <div>
      {tables.map(table => {
        return <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 2 }}>
            <Button>
              <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
                <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                  Table #{table.tableNum}
                </Typography>
                <Typography sx={{ pl: 1, pr: 1 }}>
                  {table.order.map(item => {
                    return <div key={item._id} className="card mb-3">
                      <p>${item.price} {item.item}</p>
                    </div>
                  })}
                </Typography>
              </Box>
            </Button>
        </Grid>
      })}
    </div>
  );
};

export default OrderList;
