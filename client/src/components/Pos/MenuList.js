import React, {useState, useEffect } from 'react';
import { Grid, Button, Typography, Paper, TextField, FormGroup, FormControlLabel, Switch } from '@mui/material';
import { useMutation } from '@apollo/client';
import { UPDATE_MENU } from '../../utils/mutations';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_MENU } from '../../utils/queries';

const MenuList = ({ menuItems }) => {
  const [selectedFood, setSelectedFood] = useState({});
  const [newIngredient, setNewIngredient] = useState('');
  const [stock, setStock] = useState('In Stock');
  const [newMenuItems, setNewMenuItems] = useState(menuItems)
  const [updateMenu, { error, data }] = useMutation(UPDATE_MENU);


  const handleIngredient = (event) => {
    setNewIngredient(event.target.value)
    console.log("setting ingredient with input" + newIngredient)
  }

  const removeIngredient = async(event)=>{
    console.log(event.target.parentElement.parentElement.id)
    // const deletedIngredientArr = selectedFood.ingredients.filter(item => item != event.parentElement.id);
    // event.target.parentElement.parentElement.remove();
    // try{
    //   const { data } = await updateMenu({
    //     variables: { 'item': selectedFood.item, 'ingredients': deletedIngredientArr },
    //   })
      // setSelectedFood(selectedFood.item)
      // const { loading, result } = useQuery(QUERY_ALL_MENU)
      // const menu = result?.menuItems || [];
      // setNewMenuItems(menu)
    //   console.log(data);
    // }catch(err){
    //   console.log(err);
    // }
  };

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
  };

  useEffect(()=>{
    async function fetchData () {
      if(stock==="In Stock"){
        try{
          let { data } = await updateMenu({
            variables: { 'item': selectedFood.item, 'inStock': true },
          })
          console.log(data);
        }catch(err){
          console.log(err);
        }
      }else{
        try{
          let { data } = await updateMenu({
            variables: { 'item': selectedFood.item, 'inStock': false },
          })
          console.log(data);
        }catch(err){
          console.log(err);
        }
      };
    }
    fetchData();
  }, [stock])


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
                <FormGroup>
                      <FormControlLabel control={<Switch color="error"
                      onChange={()=>{
                        if(stock==='In Stock'){
                          console.log(stock)
                          return setStock('Out of Stock')
                        }else{
                          return setStock('In Stock')
                        }
                      }}/>} label={stock} labelPlacement='top'/>
                  </FormGroup>
                <Typography variant="h6" textAlign='center' sx={{ p:1 }}>
                  Ingredients:
                </Typography>
                <Typography color="#000" sx={{ p:2 }} height="fit-content">
                  {selectedFood.ingredients.map(ingredient => {
                    return (
                    <Grid item container justifyContent='space-between' alignItems="center" id={ingredient} sx={{borderBottom: '1px solid', borderColor: '#D3D3D3'}} >
                      {ingredient}
                      <Button onClick={removeIngredient} className='deleteBtn'>
                        <DeleteOutlineIcon sx={{ color: 'primary.main' }}  />
                      </Button>
                    </Grid>)
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