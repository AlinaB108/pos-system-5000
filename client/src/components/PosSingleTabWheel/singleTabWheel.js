import { Typography, Button, Grid, Box, Paper, createTheme, ThemeProvider} from "@mui/material";
import React, { useState, useEffect, toggleState } from "react";
import { useQuery } from "@apollo/client";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { experimentalStyled as styled } from '@mui/material/styles'
import "./singleTabWheel.css"
import { QUERY_ALL_MENU } from "../../utils/queries";


function RenderWheel() {
    const [value, setValue] = React.useState(0);

    const { loading, data } = useQuery(QUERY_ALL_MENU);
    console.log(data)
    const menuItems = data?.menuItems || {};
    console.log(menuItems)

    if (loading) {
        // RETURNS A LOADING SCREEN IF DATA LOADING
        return <div>Loading...</div>;
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const toggleTab = (id) => {
        setValue(id);
    }
    return (
    <Grid columns={2} sx={5} border={'solid'} borderColor={'teal'} width={'55%'} height={"45%"} position={"absolute"} top={'18%'} left={'42%'}>
    <Box container border={'solid'} borderColor={"yellow"} backgroundColor='white' position='absolute' top='10%' left={'8%'} sx={{ maxWidth: { xs: 320, sm: 480 } }} >
        <Tabs
            textColor="black"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            orientation="vertical"
            scrollButtons="auto"
            aria-label="Order Selector"
        >
        <Tab className={value === 0 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(0)} label="Beverages" />
        <Tab className={value === 1 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(1)} label="appetizers" />
        <Tab className={value === 2 ? 'tabs active-tabs' : 'tabs'} 
            onClick={() => toggleTab(2)} label="Entrees" />
        <Tab className={value === 4 ? 'tabs active-tabs' : 'tabs'} 
            onClick={() => toggleTab(4)} label="Desserts" />
        </Tabs>
    </Box>
        <Box paddingBottom={'40%'} position={"absolute"} left={'21%'} top={'2%'} height={'fit-content'} width={'75%'} border={'solid'} backgroundColor='white' borderColor={'green'}>
        </Box>
     </Grid>
        );
      }

        
    


export default RenderWheel;