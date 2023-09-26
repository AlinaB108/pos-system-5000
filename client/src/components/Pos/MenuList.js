import React, {useState, useEffect } from 'react';
import { Grid, Button, Typography, Paper, TextField, FormGroup, FormControlLabel, Switch } from '@mui/material';
import { useMutation } from '@apollo/client';
import { UPDATE_MENU } from '../../utils/mutations';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const MenuList = ({ menuItems }) => {
  const [selectedFood, setSelectedFood] = useState({});
  const [stockStatus, setStockStatus] = useState();
  const [updateMenu, { error, data }] = useMutation(UPDATE_MENU);
  const [newIngredient, setNewIngredient] = useState('');

  // updates stock status whenever a new food item is selected
  useEffect(()=>{
    setStockStatus(selectedFood.inStock)
  }, [selectedFood])

  // sets new stock status for item and updates DB
  const handleStockChange = async(event, newStock) => {
    if (newStock) {
      try {
      let { data } = await updateMenu({
          variables: { item: selectedFood.item, inStock: true },
      });
      } catch (err) {
      console.log(err);
      }
    } else {
      try {
      let { data } = await updateMenu({
          variables: { item: selectedFood.item, inStock: false },
      });
      } catch (err) {
      console.log(err);
      }
    }
    setStockStatus(newStock);
  };

  // updates ingredient based on typed input
    const handleIngredient = (event) => {
        setNewIngredient(event.target.value);
    };

    // Sends new ingredient to DB
    const addIngredient = async () => {
        const updatedIngredients = selectedFood.ingredients;
        updatedIngredients.push(newIngredient);
        try {
            const { data } = await updateMenu({
                variables: { item: selectedFood.item, ingredients: updatedIngredients },
            });
            } catch (err) {
            console.log(err);
        }
    };

    // Removes ingredient from DB and page
    const removeIngredient = async (event) => {
      const deletedIngredientArr = selectedFood.ingredients.filter(item => item != event.target.parentElement.parentElement.id);
      try{
        const { data } = await updateMenu({
          variables: { 'item': selectedFood.item, 'ingredients': deletedIngredientArr },
        })
        setSelectedFood(data.updateMenu)
      }catch(err){
        console.log(err);
      }
  };

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
        {selectedFood._id ? (
      <Grid item xs={12} md={12} lg={6} sx={{ maxHeight: "65vh", px: 3 }}>

<Grid sx={{ borderRadius: "5px", overflow: "hidden", width: "100%", height: "fit-content"}}
    height="25vh" style={{ backgroundColor: "#fff" }}>
    <Typography variant="h5" textAlign="center" sx={{ p: 2, backgroundColor: "#d4e1f1" }}>
    {selectedFood.item}
    </Typography>
    <ToggleButtonGroup
        value={stockStatus}
        onChange={handleStockChange}
        aria-label="Item stock status"
        exclusive
        >
        <ToggleButton value={true} aria-label="In Stock">
            <CheckIcon />
        </ToggleButton>
        <ToggleButton value={false} aria-label="Out of Stock">
            <DoDisturbIcon color='error'/>
        </ToggleButton>
    </ToggleButtonGroup>
        <Typography variant="h6" textAlign="center">
        Ingredients:
        </Typography>
        <Typography color="#000" sx={{ p: 2 }} height="fit-content">
        {selectedFood.ingredients.map((ingredient) => {
            return (
            <Grid
                item
                container
                justifyContent="space-between"
                alignItems="center"
                id={ingredient}
                sx={{ borderBottom: "1px solid", borderColor: "#D3D3D3" }}
            >
                {ingredient}
                <Button onClick={removeIngredient} className="deleteBtn">
                    <DeleteOutlineIcon sx={{ color: "primary.main" }} />
                </Button>
            </Grid>
            );
        })}
        <Grid item container justifyContent="space-between" sx={{ mt: 0.5 }}>
            <TextField
            focused
            variant="filled"
            label="Add ingredient:"
            onChange={handleIngredient}
            sx={{ width: "70%" }}
            />
            <Button onClick={addIngredient}>Submit</Button>
        </Grid>
        </Typography>
        <Typography
        variant="h6"
        textAlign="flex-start"
        sx={{ backgroundColor: "#fce698", pl: 2 }}
        >
        ${selectedFood.price}
        </Typography>
    </Grid>
</Grid>

        ): null}
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