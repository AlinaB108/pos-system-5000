import {
  Typography, Tabs, Tab, Button, Grid, Paper
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_MENU } from "../../utils/queries";
import SingleOrderNav from "./SingleOrderNav";

function SingleOrder({tableOrder}) {
  // get existing food items for table to add to order log 
  const existingOrder = tableOrder.order;

  // Set initial value of order to existing items in order for table
  const [FoodStuff, setFoodStuff] = useState(existingOrder);
  const [value, setValue] = useState(0);
  
  let totalPrice = 0
  FoodStuff.map((item) => {
    totalPrice += item.price
  });
  
  useEffect(() => {
    FoodStuff.map((item) => {
    totalPrice += item.price
  });
  }, FoodStuff)


  // Query all menu items to use on the right side of page to add items to table's order
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

  // initial value of category is Beverages since the page starts on the top tab when the page loads 
  var catName = "Beverages";

  // When the category buttons are clicked, the value is changed to match the new category
  const toggleTab = (id) => {
    setValue(id);
  };

  // Set category based on selected value and then filter menu items to match
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
    // filter menu items for only the items that match the selected category
    const currentItems = menuItems.filter((item) => {
      return item.category[0].name === catName;
    });

    // return the filtered array of items to render on the page
    return currentItems;
  }

  return (
    <Grid container justifyContent="center" sx={{ mt: 4 }}>
      {/* First Container */}
      <Grid item xs={12} sm={5} sx={{ px: 5, mb: "2%" }} height="fit-content">
        <Paper>
          <Typography variant="h5" textAlign='center' sx={{ p: 2, backgroundColor: "#d4e1f1" }}>
            Table {tableOrder.tableNum}
          </Typography>
          <Grid item xs={6} sx={{ p: 2 }}>
            <ul>
              {
                FoodStuff.map((item) => {
                  return <li key ={item._id}>{item.item}</li>
                })
              }
            </ul>
          </Grid>
          <Grid item xs={6} sx={{ p: 2 }}>
              <Typography>
                Total Price: {totalPrice.toFixed(2)}
              </Typography>
          </Grid>
        </Paper>
      </Grid>

      {/* Second Container with menu items to choose from to add to order */}
      <Grid item xs={12} sm={7}>
        <Grid container>

          {/* Categories to choose from rendered on tabs */}
          <Grid item xs={12} sm={4} sx={{ p: 1 }}>
            <Tabs
              textColor= 'text.darkBlue'
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

          {/* Render filtered menu items as buttons that can add items to the order */}
          <Grid item xs={12} sm={8}>
            <Grid container justifyContent="center" alignItems="center">
              {filterCategory().map((item, index) => (
                <Button variant='menubtn' key={index} onClick={() => {
                  setFoodStuff([...FoodStuff, item])
                }}
                  sx={{ p: 2, m: 0.5, minWidth: '100px', minHeight: '80px', textAlign: 'center' }}>
                  {item.item}
                </Button>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Render the footer to allow for sending order and checking out the table */}
      <Grid item position='fixed' bottom={0}>
        <SingleOrderNav tableNum = {tableOrder.tableNum} order = {FoodStuff} />
      </Grid>
    </Grid>
  );
}

export default SingleOrder;
