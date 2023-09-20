import React from 'react';
import { Box, Container, Grid, Button, Typography, ScopedCssBaseline } from '@mui/material';


const MenuList = ({ menuItems }) => {
  // const menu = menuItems;
  if (!menuItems.length) {
    return <h3>No Menu Items!</h3>;
  }

  return (
    <Grid container justifyContent="center" spacing={4}>
      {/* First container */}
      <Grid item xs={6}>
        
        <Grid style={{ maxHeight: '65vh', overflowY: 'auto', width: '100%' }}>
          <Grid container justifyContent="center">
            {menuItems.map(item => (
              <Grid container justifyContent="center" sx={{ mt: 2 }} item md={4} sm={9} key={item.id}>
                <Grid>
                  <Button>
                    <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden', width: '260px' }} height='25vh' style={{ backgroundColor: "#fff" }} >
                      <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                        {item.item}
                      </Typography>
                      <Typography color="#000" sx={{ pl: 1, pr: 1 }} height="fit-content">
                        ${item.price}
                        {item.ingredients.map(ingredient => (
                          <Grid key={ingredient._id}>
                            <li>{ingredient}</li>
                          </Grid>
                        ))}
                      </Typography>
                    </Box>
                  </Button>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Second container */}
      <Grid item xs={6}>
      </Grid>
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