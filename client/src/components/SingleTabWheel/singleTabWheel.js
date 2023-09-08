import { Typography, Button, Grid, Box, Paper, createTheme, ThemeProvider} from "@mui/material";
import React, { useState, useEffect, toggleState } from "react";
import { useQuery } from "@apollo/client";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { experimentalStyled as styled } from '@mui/material/styles'
import "./singleTabWheel.css"


function RenderWheel() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const toggleTab = (id) => {
        setValue(id);
    }
    return (
    <Grid columns={2} sx={5} border={'solid'} borderColor={'pink'} width={'50%'} height={"45%"} position={"absolute"} top={'12%'} left={'42%'}>
      <Box container border={'solid'} borderColor={"yellow"} position='absolute' top='10%' left={'5%'} sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            orientation="vertical"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
        >
        <Tab className={value === 0 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(0)} label="Beverages" />
        <Tab className={value === 1 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(1)} label="Entrees" />
        <Tab className={value === 2 ? 'tabs active-tabs' : 'tabs'} 
            onClick={() => toggleTab(2)} label="Item Three" />
        <Tab className={value === 4 ? 'tabs active-tabs' : 'tabs'} 
            onClick={() => toggleTab(4)} label="Item Four" />
        <Tab className={value === 5 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(5)} label="Item Five" />
        <Tab className={value === 6 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(6)} label="Item Six" />
        </Tabs>
      </Box>
      <Box paddingBottom={'40%'} position={"absolute"} left={'20%'} top={'10%'} height={'5%'} width={'70%'} border={'solid'} borderColor={'green'}>

      </Box>
     </Grid>
        );
      }

        
    


export default RenderWheel;