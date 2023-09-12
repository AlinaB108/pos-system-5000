import React from "react";
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <Container maxWidth="100%" style={{backgroundColor: '#292a31'}}>
        <Grid container sx={{ mt:5 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
              Sapori D'Italia
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
    </Container>
  );
}

export default Footer;