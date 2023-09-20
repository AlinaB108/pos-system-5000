import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';


const MenuList = ({ menuItems }) => {
  // const menu = menuItems;
  if (!menuItems.length) {
    return <h3>No Menu Items!</h3>;
  }

  return (
    <Grid container justifyContent="center" md={6}>
      {menuItems.map(item => {
        return <Grid container justifyContent="center" sx={{ mt: 2 }} item md={4} sm={9}>
          <Grid>
            <Button>
                <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden', width: '300px' }} height='25vh' style={{ backgroundColor: "#fff" }}>
                  <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                    {item.item}
                  </Typography>
                  <Typography color="#000" sx={{ pl: 1, pr: 1 }} height="fit-content">
                    ${item.price}
                    {item.ingredients.map(item => {
                      return <div key={item._id}>
                        <li>{item}</li>
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