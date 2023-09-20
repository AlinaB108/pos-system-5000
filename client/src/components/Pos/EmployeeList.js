import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';


const MenuList = ({ employees }) => {
  // const menu = menuItems;
  if (!employees.length) {
    return <h3>No employees!</h3>;
  }

  return (
    <Grid container justifyContent="center" md={6}>
      {employees.map(employee => {
        return <Grid container justifyContent="center" sx={{ mt: 2 }} item md={4} sm={9}>
          <Grid>
            <Button>
              <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden', width: '300px' }} height='25vh' style={{ backgroundColor: "#fff" }}>
                <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                  {employee.firstName} {employee.lastName}
                </Typography>
                <Typography color="#000" sx={{ pl: 1, pr: 1 }} height="fit-content">
                  {employee.tables.map(table => {
                    return <div key={table._id}>
                      {table.tableNum}
                      {table.order.map(order => {
                        return <div key={order._id}>
                          <li>{order.item}</li>
                        </div>
                      })}
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

export default MenuList;



// MENU LIST page would be
//
//
// ---------------------------------------------------------------
// -----------------       NAVBAR               ------------------
// -----------------                            ------------------
// ---------------------------------------------------------------
// -----                    --------                    ----------
// -----                    --------   command buttons  ----------
// -----List of scrollable  --------    for selected    ----------
// -----  menu items        --------     foods          ----------
// -----                    --------                    ----------
// -----                    --------                    ----------
// -----                    --------                    ----------
// -----                    --------                    ----------
// -----                    --------                    ----------
// ---------------------------------------------------------------



// EMPLOYEE LIST page would have the nav bar at the top, then two sections below,

//  one for a list of employees with ones working today at the top,

// one for commands with buttons and modals to run mutations on the db