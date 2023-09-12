import { Typography, Button, Grid, Box, Paper, createTheme, ThemeProvider } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from "../../utils/queries";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { experimentalStyled as styled } from '@mui/material/styles'
import { pink } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function FetchSingle() {
}
const SingleOrderRender = () => {
    return (
        <Box container border={"solid"} borderColor={'red'} paddingBottom={'400px'}>
            <Grid container border={"solid"} borderColor={"blue"} direction="row" justifyContent="baseline" alignItems="baseline" width={'40%'} height='fit-content' display={'flex'}>
                <Grid container justifyContent={"center"}>
                    <Box border={"solid"} backgroundColor='white' borderColor={'black'}>Table Number</Box>
                </Grid>
                <Grid item xs={4} direction='column' spacing={6} border={"solid"} borderColor={"black"}>
                    <Box border={"dotted"} borderColor={'pink'} backgroundColor={'white'} paddingLeft={'25px'} display={"flex"} width={'100%'} height={'fit-content'}>
                        <div className="items">
                            <ul>table 1</ul>
                            <ul>table 2</ul>
                            <ul>Item 3</ul>
                            <ul>Item 4</ul>
                            <ul>Item 5</ul>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SingleOrderRender;
