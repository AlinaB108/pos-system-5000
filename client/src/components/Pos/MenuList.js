import React, {useState, useEffect } from 'react';
import { Grid, Button, Typography, TextField } from '@mui/material';
import { useMutation } from '@apollo/client';
import { UPDATE_MENU } from '../../utils/mutations';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckIcon from '@mui/icons-material/Check';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';

const MenuList = ({ menuItems }) => {
  const [selectedFood, setSelectedFood] = useState({});
  const [stockStatus, setStockStatus] = useState();
  const [updateMenu, { error, data }] = useMutation(UPDATE_MENU);
  const [newIngredient, setNewIngredient] = useState('');
  const [price, setPrice] = useState(0)

  const styles = {
    input: {
      '::placeholder': {
        color: 'black'
      }
    },
  };
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
            setNewIngredient('')
            const ingredientEl = document.getElementById('addIngredientEl')
            console.log(ingredientEl);
            ingredientEl.value = '';
            } catch (err) {
            console.log(err);
        }
    };

    // Removes ingredient from DB and page
    const removeIngredient = async (event) => {
      const deletedIngredientArr = selectedFood.ingredients.filter(item => item !== event.target.parentElement.parentElement.id);
      try{
        const { data } = await updateMenu({
          variables: { 'item': selectedFood.item, 'ingredients': deletedIngredientArr },
        })
        setSelectedFood(data.updateMenu)
      }catch(err){
        console.log(err);
      }
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const changePrice = async()=>{
    console.log(price)
    if(price>0){
      try{
        const { data } = await updateMenu({
          variables: { 'item': selectedFood.item, 'price': parseFloat(price) },
        })
        const priceEl = document.getElementById('priceInput');
        priceEl.value = '';
        priceEl.placeholder = data.updateMenu.price
      }catch(err){
        console.log(err);
      }
    }
  }

  if (!menuItems.length) {
    return <h3>No Menu Items!</h3>;
  }

  return (
    <Grid container justifyContent="space-between" sx={{mt: 4}}>
      {/* First container with food items from menu to click on */}
      <Grid item container justifyContent="center" xs={6} style={{ maxHeight: '65vh', width: '100%'}}
        sx={{
        pl: 1, pr: 1, overflowY: 'auto', '::-webkit-scrollbar': {
        width: '1em',
        },
        '::-webkit-scrollbar-thumb': {
        backgroundColor: '#7ca6f3',
        borderRadius: '10px'
        },
        }}>
            {menuItems.map(item => (
              <Grid container justifyContent="center" sx={{ mt: 1 }} item md={4} sm={9} key={item.id}>
                  <Button variant="menubtn2" onClick={() => {
                    setSelectedFood(item);
                    }} textAlign='center' sx={{width: '90%', backgroundColor: "accent.main"}} >
                        {item.item}
                  </Button>
              </Grid>
            ))}
      </Grid>

      {/* Second container where menu item appears */}
      <Grid container justifyContent="center" item xs={6} sx={{px:'1%'}}>
        {/* If there is an item selected, generate panel to right side */}
        {selectedFood._id ? (
          <Grid item container xs={12} sx={{ backgroundColor: "#fff", borderRadius: '5px', width: "100%", height: "fit-content" }}>
            {/* Heading with menu item name */}
              <Typography variant="h5" sx={{textAlign:"center", backgroundColor: "#d4e1f1", borderRadius: '5px', width: '100%', p:1}} >
                {selectedFood.item}
              </Typography>
              {/* In/Out of stock toggle */}
              <Grid item container xs={12} justifyContent='space-around' sx={{py: '1%'}}>
                <Grid item>
                  <Typography variant="h6" textAlign="center">In Stock: </Typography>
                </Grid>
                <Grid item>
                  <ToggleButtonGroup
                      value={stockStatus}
                      onChange={handleStockChange}
                      aria-label="Item stock status"
                      exclusive
                      >
                      <ToggleButton value={true} aria-label="In Stock">
                          <CheckIcon color='success' />
                      </ToggleButton>
                      <ToggleButton value={false} aria-label="Out of Stock">
                          <DoDisturbIcon color='error'/>
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
              </Grid>
              {/* Ingredient list */}
              <Grid item container>
                <Typography variant="h6" textAlign="center" sx={{width: '100%'}}>
                Ingredients:
                </Typography>
                {selectedFood.ingredients.map((ingredient) => {
                    return (
                    <Grid
                        item
                        container
                        justifyContent="space-between"
                        alignItems="center"
                        id={ingredient}
                        sx={{ borderBottom: "1px solid", borderColor: "#D3D3D3", mx:'1%' }}
                    >
                        {ingredient}
                        <Button onClick={removeIngredient} className="deleteBtn">
                            <DeleteOutlineIcon sx={{ color: "primary.main" }} />
                        </Button>
                    </Grid>
                    );
                })}
                <Grid item container justifyContent="space-between" sx={{ mt: 0.5, mx:'1%' }}>
                    <TextField
                    focused
                    variant="filled"
                    label="Add ingredient:"
                    onChange={handleIngredient}
                    sx={{ width: "70%" }}
                    id="addIngredientEl"
                    />
                    <Button onClick={addIngredient}>Submit</Button>
                </Grid>
              </Grid>

              {/* Price of menu item */}
              <Grid item container justifyContent='space-between' sx={{ mt: 0.5, backgroundColor: "#fce698" }}>
                <FormControl variant="standard" sx={{mx:'1%'}}>
                    <Input
                      id="priceInput"
                      startAdornment={<InputAdornment position="start">
                        <Typography color="text.primary">$</Typography></InputAdornment>}
                      placeholder={selectedFood.price}
                      onChange={handlePriceChange}
                      style={styles.input}
                    />
                </FormControl>
                <Button onClick={changePrice}>Change price</Button>
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