import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';


const MenuList = ({ employees }) => {
  // const menu = menuItems;
  if (!employees.length) {
    return <h3>No employees!</h3>;
  }

  const handleAddRoleClick = () => {
    // Add your logic here for button 1
    // You can call functions to mutate data in the database
  };

  const handleDelRoleClick = () => {
    // Add your logic here for button 2
  };

  return (
    <div>
      <Grid container justifyContent={'space-between'}>

        <Grid container justifyContent="center" xs={6} md={6}>
          {employees.map(employee => {
            return <Grid container sx={{ justifyContent: "center" }} item md={3} sm={9}>
              <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden', width: 'fit-content', height: 'fit-content' }} height='25vh' style={{ backgroundColor: "#fff" }}>
                <Typography variant="h5" textAlign='center' sx={{ p: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                  {employee.firstName} {employee.lastName}
                </Typography>
                <Typography variant="h6" textAlign='center' sx={{ backgroundColor: "#fce698" }}>
                  Roles:
                </Typography>
                <Typography color="#000" sx={{ pl: 1, pr: 1 }} height="fit-content">
                  {employee.roles.map(role => {
                    return <div backgroundColor="#100" key={role._id}>
                      {role.name}
                    </div>
                  })}
                </Typography>
              </Box>
            </Grid>
          })}
        </Grid>

        <Grid container xs={6} md={5}>
          <Box backgroundColor="grey">
            <Typography backgroundColor="white">
              Control Pad for Selected Employee
            </Typography>
            <Button variant="contained" color="primary" onClick={handleAddRoleClick}>
              Button 1
            </Button>
            <Button variant="contained" color="secondary" onClick={handleDelRoleClick}>
              Button 2
            </Button>
            <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden', width: 'fit-content', height: 'fit-content' }} height='25vh' style={{ backgroundColor: "#fff" }}>
              <Typography variant="h5" textAlign='center' sx={{ p: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                {employees[0].firstName} {employees[0].lastName}
              </Typography>
              <Typography variant="h6" textAlign='center' sx={{ backgroundColor: "#fce698" }}>
                Roles:
              </Typography>
              {/* HARD CODED FOR NOW, TODO: CHANGE TO DYNAMICALLY GENERATED FROM SELECTED EMPLOYEE. I RECCOMMEND GETTING THE EMPLOYEES FIRST NAME BY GETTING THE BUTTON ITSELF ID OR CLASS TO EQUAL THE NAME OR ID OF EMPLOYEE */}
              <Typography color="#000" sx={{ pl: 1, pr: 1 }} height="fit-content">
                {employees[0].roles.map(role => {
                  return <div backgroundColor="#100" key={role._id}>
                    {role.name}
                  </div>
                })}
              </Typography>
              <Typography variant="h6" textAlign='center' sx={{ backgroundColor: "#fce698" }}>
                Tables:
              </Typography>
              <Typography color="#000" sx={{ pl: 1, pr: 1 }} height="fit-content">
                {employees[0].tables.map(table => {
                  return <div sx={{ width: 100 }} key={table._id}>
                    <Typography variant="h6" textAlign='center' sx={{ backgroundColor: "#fce698" }}>
                      {table.tableNum}
                    </Typography>
                    {table.order.map(order => {
                      return <div key={order._id}>
                        <Typography sx={{ pt: 1 }}>{order.item}</Typography>
                      </div>
                    })}
                  </div>
                })}
              </Typography>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </div>
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