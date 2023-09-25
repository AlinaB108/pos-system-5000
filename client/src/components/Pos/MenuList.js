import React from 'react';
import { Box, Checkbox, Grid, Button, Typography, Paper } from '@mui/material';


const MenuList = ({ menuItems }) => {
  const [selectedFood, setSelectedFood] = React.useState({})

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
                  <Button onClick={() => setSelectedFood(item)}>
                    <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden', width: '260px' }} height='25vh' style={{ backgroundColor: "#fff" }} >
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
        {/* <Typography backgroundColor="white">
          Control Pad for Selected Employee
        </Typography> */}
          
        {/* 4 containers - actions */}
        <Grid container item xs={12} md={12} lg={6} spacing={3}>
          <Grid item xs={6} container alignItems="flex-end">
              <Paper sx={{ height: '50%', width: '100%', cursor: 'pointer', backgroundColor: "#7ca6f3" }}
                onClick={() => {
                  // Action stuff
                  console.log('Button clicked');
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <Typography>ADD Ingredient</Typography>
                </Box>
              </Paper>
            </Grid>
          <Grid item xs={6} container alignItems="flex-end">
            <Paper sx={{ height: '50%', width: '100%', cursor: 'pointer', backgroundColor: "#7ca6f3" }}
              onClick={() => {
                // Action stuff
                console.log('Button clicked');
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Typography>Remove Ingredient</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6} container alignItems="flex-start">
            <Paper sx={{ height: '50%', width: '100%', cursor: 'pointer', backgroundColor: "#7ca6f3" }}
              onClick={() => {
                // Action stuff
                console.log('Button clicked');
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Typography>Item</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6} container alignItems="flex-start">
            <Paper sx={{ height: '50%', width: '100%', cursor: 'pointer', backgroundColor: "#7ca6f3" }}
              onClick={() => {
                // Action stuff
                console.log('Button clicked');
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Typography>EDIT Price</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        {/* Ingredients container */}
        <Grid item xs={12} md={12} lg={6} sx={{ maxHeight: '65vh', px:3 }}>
          <Paper style={{ height: '100%' }}>
            {/* <Typography textAlign="center" sx={{ p:2 }}>
              List of Selectable Ingredients:
            </Typography> */}
            {selectedFood._id ? (
              <Grid sx={{ borderRadius: '5px', overflow: 'hidden', width: '100%', height: 'fit-content' }} height='25vh' style={{ backgroundColor: "#fff" }}>
                <Typography variant="h5" textAlign='center' sx={{ p: 2, backgroundColor: "#d4e1f1" }}>
                  {selectedFood.item}
                </Typography>
                <Typography variant="h6" textAlign='center' sx={{ p:1 }}>
                  Ingredients:
                </Typography>
                <Typography color="#000" sx={{ p:2 }} height="fit-content">
                  {selectedFood.ingredients.map(ingredient => {
                    return <div backgroundColor="#100" key={ingredient._id}>
                      {ingredient}
                      <hr></hr>
                    </div>
                  })}
                </Typography>
                <Typography variant="h6" textAlign='flex-start' sx={{ backgroundColor: "#fce698", pl:2 }}>
                ${selectedFood.price}
                </Typography>
              </Grid>
            ) : null}
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