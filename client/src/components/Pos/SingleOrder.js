import {
  Typography, Tabs, Tab, Button, Grid, Paper
} from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_MENU } from "../../utils/queries";
import SingleOrderNav from "./SingleOrderNav";

function SingleOrder({tableOrder}) {

  const existingOrder = tableOrder.order;
  console.log(existingOrder)
  const [FoodStuff, setFoodStuff] = useState(existingOrder);
  const [value, setValue] = useState(0);
  
  const { loading, data } = useQuery(QUERY_ALL_MENU);
  const menuItems = data?.menuItems || {};

  if (loading) {
    // RETURNS A LOADING SCREEN IF DATA LOADING
    return <div>Loading...</div>;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    event.preventDefault();
  };

  var catName = "Beverages";
  const toggleTab = (id) => {
    setValue(id);
  };

  function filterCategory() {
    switch (value) {
      case 0:
        catName = "Beverages";
        break;
      case 1:
        catName = "Appetizers";
        break;
      case 2:
        catName = "Main Courses";
        break;
      case 3:
        catName = "Desserts";
        break;
      default:
        catName = "Beverages";
        break;
    }
    const currentItems = menuItems.filter((item) => {
      return item.category[0].name === catName;
    });
    console.log(currentItems);
    return currentItems;
    
  }
  console.log(FoodStuff);
  return (
    <Grid container justifyContent="center" sx={{ mt: 4 }}>
      {/* First Container */}
      <Grid item xs={12} sm={5} sx={{ px: 5 }} height="fit-content">
        <Paper>
          <Typography variant="h5" textAlign='center' sx={{ p: 2, backgroundColor: "#d4e1f1" }}>
            Table {tableOrder.tableNum}
          </Typography>
          <Grid item xs={6} sx={{ p: 2 }}>
            <ul>
              {
                FoodStuff.map((item) => {
                  return <li key ={item._id}>${item.price + "  " + item.item}</li>
                })
              }
            </ul>
          </Grid>
          <p>test</p>
        </Paper>
      </Grid>

      {/* Second Container */}
      <Grid item xs={12} sm={7}>
        <Grid container>
          {/* Wheel */}
          <Grid item xs={12} sm={4} sx={{ p: 1 }}>
            <Tabs
              textColor="black"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              orientation="vertical"
              scrollButtons="auto"
              aria-label="Order Selector"

            >
              <Tab
                className={value === 0 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(0)}
                label="Beverages"
                sx={{ backgroundColor: "#d4e1f1", border: "0.5px solid #fff" }}
              />
              <Tab
                className={value === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
                label="Appetizers"
                sx={{ backgroundColor: "#d4e1f1", border: "0.5px solid #fff" }}
              />
              <Tab
                className={value === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
                label="Entrees"
                sx={{ backgroundColor: "#d4e1f1", border: "0.5px solid #fff" }}
              />
              <Tab
                className={value === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
                label="Desserts"
                sx={{ backgroundColor: "#d4e1f1", border: "0.5px solid #fff" }}
              />
            </Tabs>
          </Grid>
          {/* Items */}
          <Grid item xs={12} sm={8}>
            <Grid container justifyContent="center" alignItems="center">
              {filterCategory().map((item, index) => (
                <Button variant='menubtn' key={index} onClick={() => {
                  setFoodStuff([...FoodStuff, item])
                  console.log(FoodStuff);
                }}
                  sx={{ p: 2, m: 0.5, minWidth: '100px', minHeight: '80px', textAlign: 'center' }}>
                  {item.item}
                </Button>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item position='absolute' bottom={0}>
        <SingleOrderNav tableNum = {tableOrder.tableNum} order = {FoodStuff} />

      </Grid>
    </Grid>
  );
}

export default SingleOrder;
