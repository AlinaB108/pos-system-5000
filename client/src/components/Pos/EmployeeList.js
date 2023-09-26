import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';


const MenuList = ({ employees }) => {
  const [selectedEmployee, setSelectedEmployee] = React.useState({})


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
    <Grid container justifyContent="space-between" spacing={4} sx={{ mt:4}}>
      {/* First container */}
      <Grid item xs={6}>
        <Grid style={{ maxHeight: '65vh', overflowY: 'auto', width: '100%' }}>
          <Grid container justifyContent="center">
            {employees.map(employee => (
              <Grid container sx={{ justifyContent: "center", maxWidth: '260px' }} item md={4} sm={9} key={employee._id} onClick={() => setSelectedEmployee(employee)}>
                <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden', width: '100%', maxWidth: '260px', backgroundColor: "#fff" }} height='25vh'>
                  <Typography variant="h6" textAlign='center' sx={{ p: 1, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                    {employee.firstName} {employee.lastName}
                  </Typography>
                  <Typography variant="h6" textAlign='flex-start' sx={{ p:1 }}>
                    Roles:
                  </Typography>
                  <Typography color="#000" sx={{ pl:1, pr:1 }} height="fit-content">
                    {employee.roles.map(role => (
                      <div backgroundColor="#100" key={role._id}>
                        {role.name}
                      </div>
                    ))}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>


      {/* Second container */}
      <Grid container justifyContent="center" item xs={6}>
        <Grid sx={{ width: '100%' }}>
          <Grid sx={{ backgroundColor: '#fff', borderRadius:'5px', p:2 }}>
            <Typography textAlign="center">
              Control Pad for Selected Employee
            </Typography>
            <Grid container justifyContent="center" sx={{ p:1 }}> 
              <Button variant="contained" color="primary" onClick={handleAddRoleClick}>
                Button 1
              </Button>
              <Button variant="contained" color="secondary" onClick={handleDelRoleClick}>
                Button 2
              </Button>
            </Grid>
          </Grid>

        {selectedEmployee._id ? (
          <Grid container justifyContent="space-between" sx={{ pt: '15px' }}>
            <Grid xs={3} sx={{ p: '1px', backgroundColor: '#fff', maxHeight: '20vh', overflowY: 'auto', borderRadius: '5px' }}>
              <Typography variant="h6" textAlign='center' sx={{ p: 1, backgroundColor: "#d4e1f1", borderRadius: '5px' }}>
                {selectedEmployee.firstName} {selectedEmployee.lastName}
              </Typography>
              <Typography variant="h6" textAlign='flex-start' sx={{ p: 1 }}>
                Roles:
              </Typography>
              <Typography sx={{ pl: 1, pr: 1 }} height="fit-content">
                {selectedEmployee.roles.map(role => {
                  return <div backgroundColor="#100" key={role._id}>
                    {role.name}
                  </div>
                })}
              </Typography>
            </Grid>
            <Grid xs={9} sx={{ px:3}}>
              <Typography variant="h6" textAlign='center' sx={{ backgroundColor: "#d4e1f1", borderRadius: "5px" }}>
                Tables:
              </Typography>
              <Typography
                sx={{ pl: 1, pr: 1, display: 'flex', flexWrap: 'wrap', maxHeight: '43vh', overflowY: 'auto', '::-webkit-scrollbar': {
                    width: '0.4em',
                  },
                  '::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(0,0,0,0)',
                  },
                }}>
                {selectedEmployee.tables.map(table => (
                  <Grid
                    key={table._id}
                    sx={{ flex: '0 0 calc(50% - 16px)', m: '8px', maxWidth: '50%', height: '20vh', backgroundColor: "#fff", borderRadius: '25px', overflowY: 'auto',
                      '::-webkit-scrollbar': {
                        width: '0',
                      },
                      '::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0,0,0,0)',
                      },
                    }}>
                    <Typography variant="h6" textAlign='center' sx={{ backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                      {table.tableNum}
                    </Typography>
                    {table.order.map(order => (
                      <div key={order._id}>
                        <Typography sx={{ pt: 1, pl: 2 }}>{order.item}</Typography>
                      </div>
                    ))}
                  </Grid>
                ))}
              </Typography>
            </Grid>
          </Grid>
        ) : null}
        </Grid>
      </Grid>

    </Grid>
  );
};

export default MenuList;





// EMPLOYEE LIST page would have the nav bar at the top, then two sections below,

//  one for a list of employees with ones working today at the top,

// one for commands with buttons and modals to run mutations on the db