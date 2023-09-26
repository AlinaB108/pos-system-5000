import React from 'react';
import { Box, Checkbox, Grid, Button, Typography, Paper, accordionDetailsClasses, TextField } from '@mui/material';
import { useMutation } from '@apollo/client';
import { UPDATE_MENU } from '../../utils/mutations';

const MenuList = ({ menuItems }) => {
  const [selectedFood, setSelectedFood] = React.useState({});
  const [newIngredient, setNewIngredient] = React.useState(''); 
  const [updateMenu, { error, data }] = useMutation(UPDATE_MENU);


  const handleIngredient = (event) => {
    setNewIngredient(event.target.value)
    console.log("setting ingredient with input" + newIngredient)
  }
  const addIngredient = async()=>{
    const updatedIngredients = selectedFood.ingredients
    updatedIngredients.push(newIngredient);
    console.log(updatedIngredients);
    try{
      const { data } = await updateMenu({
        variables: { 'item': selectedFood.item, 'ingredients': updatedIngredients },
      })
      console.log(data);
    }catch(err){
      console.log(err);
    }
  }


  if (!menuItems.length) {
    return <h3>No Menu Items!</h3>;
  }

  return (
    <Grid container justifyContent="center" spacing={2} sx={{mt: 1}}>
      {/* First container with food items from menu to click on */}
      <Grid item container justifyContent="center" xs={6} style={{ maxHeight: '65vh', overflowY: 'auto', width: '100%'}}>
            {menuItems.map(item => (
              <Grid container justifyContent="center" sx={{ mt: 1 }} item md={4} sm={9} key={item.id}>
                  <Button variant="menubtn" onClick={() => setSelectedFood(item)} textAlign='center' sx={{width: '90%', backgroundColor: "accent.main"}} >
                        {item.item}
                  </Button>
              </Grid>
            ))}
      </Grid>


      {/* Second container */}
      <Grid container justifyContent="center" item xs={6}>

        {/* 4 containers - actions */}
        <Grid container item xs={12} md={12} lg={6} spacing={1} sx={{mb: 1}}>
          <Grid item xs={6} container alignItems="flex-end">
              <Button variant="numpad" sx={{height: "3rem"}} onClick={addIngredient}>
                ADD Ingredient
              </Button>
            </Grid>
          <Grid item xs={6} container alignItems="flex-end">
              <Button variant="numpad" sx={{height: "3rem"}}>
                Remove Ingredient
              </Button>
          </Grid>
          <Grid item xs={6} container alignItems="flex-start">
              <Button variant="numpad" sx={{height: "3rem"}}>
                Out of stock
              </Button>
          </Grid>
          <Grid item xs={6} container alignItems="flex-start">
            <Button variant="numpad" sx={{height: "3rem"}}>
                Edit Price
              </Button>
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
                  <TextField fullWidth focused variant="filled" label="Add ingredient here:" onChange={handleIngredient} />
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