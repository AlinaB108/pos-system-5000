import {
  Typography,
  Button,
  Grid,
  Box,
  Paper,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React, { useState, useEffect, toggleState } from "react";
import { useQuery } from "@apollo/client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import { QUERY_ALL_MENU } from "../../utils/queries";

function SingleOrder() {
  const [value, setValue] = React.useState(0);

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
  function deez() {
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
      console.log(catName);
      return item.category[0].name === catName;
    });
    return currentItems;
  }
  return (
    <Grid container>
      <Grid item justifyContent={"center"} xs={6}>
        <Box>Table Number</Box>
      </Grid>
      <Grid>
        <Box>
          <div className="items">
            <ul>Item 1</ul>
            <ul>Item 2</ul>
            <ul>Item 3</ul>
            <ul>Item 4</ul>
            <ul>Item 5</ul>
          </div>
        </Box>
      </Grid>
      <Grid item xs={6} sm={4}>
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
          />
          <Tab
            className={value === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
            label="Appetizers"
          />
          <Tab
            className={value === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
            label="Entrees"
          />
          <Tab
            className={value === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
            label="Desserts"
          />
        </Tabs>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Grid container justifyContent="center" alignItems="center">
          {deez().map((item, index) => (
            <Button key={index} sx={{ p: 2 }}>
              {item.item}
            </Button>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SingleOrder;
