import React from 'react';
import { Box, Checkbox, Grid, Button, Typography, Paper } from '@mui/material';


const MenuList = ({ menuItems }) => {
  // const menu = menuItems;
  if (!menuItems.length) {
    return <h3>No Menu Items!</h3>;
  }

  return (
    <Grid container justifyContent="center" spacing={4} sx={{ mt:4}}>
      {/* First container */}
      <Grid item xs={6}>
        <Grid style={{ maxHeight: '65vh', overflowY: 'auto', width: '100%' }}>
          <Grid container justifyContent="center">
            {menuItems.map(item => (
              <Grid container justifyContent="center" sx={{ mt: 2 }} item md={4} sm={9} key={item.id}>
                <Grid>
                  <Button>
                    <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden', width: '260px' }} height='25vh' style={{ backgroundColor: "#fff" }}>
                      <Typography variant="h6" textAlign='center' sx={{ p: 1, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                        {item.item}
                      </Typography>
                      <Box sx={{ pt:1 }}>
                        <Typography color="#000" height="fit-content" lineHeight="3">
                          ${item.price}
                          {item.ingredients.map(ingredient => (
                            <Grid key={ingredient._id}>
                              <Typography sx={{listStyle: 'none'}}>{ingredient}</Typography>
                            </Grid>
                          ))}
                        </Typography>
                      </Box>
                    </Box>
                  </Button>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>


      {/* Second container */}
      <Grid container justifyContent="center" item xs={6}>
        {/* Typography container - ughhhhh!!!!!!! */}
        {/* <Grid item xs={12}> 
          <Typography>Selected Item</Typography>
        </Grid> */}
          
        {/* 4 containers - actions */}
        <Grid container item xs={12} md={12} lg={6} spacing={3}>
          <Grid item xs={6}>
            {/* Add this to Papers when make it a button onClick={() => handleButtonClick(1)} */}
            <Paper style={{ height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Typography>ADD Ingredient</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Typography>Remove Ingredient</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Typography>ITEM</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Typography>EDIT Price</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        {/* Ingredients container */}
        <Grid item xs={12} md={12} lg={6} sx={{ maxHeight: '65vh', px:3 }}>
          <Paper style={{ height: '100%' }}>
            <Typography textAlign="center" sx={{ p:2 }}>
              List of Selectable Ingredients:
            </Typography>
            {/* Might try checkbox? If yes I will style it globally */}
            <Typography><Checkbox sx={{ color: '#23296c'}}/>bacon</Typography>
            <Typography><Checkbox sx={{ color: '#23296c'}}/>tears</Typography>
            <Typography><Checkbox sx={{ color: '#23296c'}}/>grapes</Typography>
          </Paper>
        </Grid>
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