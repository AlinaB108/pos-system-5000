import React from 'react';
import { Box, Container, Grid, Button, Typography, Paper } from '@mui/material';


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
      <Grid container justifyContent="center" item xs={6}>
        {/* Typography container - ughhhhh!!!!!!! */}
        {/* <Grid item xs={12}> 
          <Typography>Selected Item</Typography>
        </Grid> */}
          
        {/* 4 containers - actions */}
        <Grid container item xs={6} spacing={3}>
          <Grid item xs={6}>
            <Paper style={{ height: '100%' }}>
              <Typography>Container 1</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ height: '100%' }}>
              <Typography>Container 2</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ height: '100%' }}>
              <Typography>Container 3</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ height: '100%' }}>
              <Typography>Container 4</Typography>
            </Paper>
          </Grid>
        </Grid>
        {/* Ingredients container */}
        <Grid item xs={6} sx={{ maxHeight: '65vh', px:3 }}>
          <Paper style={{ height: '100%' }}>
            <Typography>
              List of Selectable Ingredients:
            </Typography>
            <li>ingredient</li>
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