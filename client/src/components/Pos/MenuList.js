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
                      <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>

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
      <Grid item xs={6}>
      <Box backgroundColor="grey">
            <Typography backgroundColor="white">
              Control Pad for Selected Employee
            </Typography>

            <Button variant="contained" color="primary">
              Button 1
            </Button>

            <Button variant="contained" color="secondary">
              Button 2
            </Button>

            {selectedFood._id ? (
              <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden', width: 'fit-content', height: 'fit-content' }} height='25vh' style={{ backgroundColor: "#fff" }}>
                <Typography variant="h5" textAlign='center' sx={{ p: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                  {selectedFood.item}
                </Typography>
                <Typography variant="h6" textAlign='center' sx={{ backgroundColor: "#fce698" }}>
                  Ingredients:
                </Typography>
                <Typography color="#000" sx={{ pl: 1, pr: 1 }} height="fit-content">
                  {selectedFood.ingredients.map(ingredient => {
                    return <div backgroundColor="#100" key={ingredient._id}>
                      {ingredient}
                    </div>
                  })}
                </Typography>
                <Typography variant="h6" textAlign='center' sx={{ backgroundColor: "#fce698" }}>
                {selectedFood.price}
                </Typography>
              </Box>
            ) : null}
        </Box>

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