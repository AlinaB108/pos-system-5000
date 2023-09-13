import React from "react";
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <Container maxWidth="100%" style={{ backgroundColor: '#292a31' }} sx={{ p: 1 }}>
      <Grid container sx={{ mt: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Follow Us
          </Typography>
          <Link href="https://www.facebook.com/" variant="linkicon">
            <Facebook />
          </Link>
          <Link
            href="https://www.instagram.com/"
            variant="linkicon"
            sx={{ pl: 1, pr: 1 }}
          >
            <Instagram />
          </Link>
          <Link href="https://www.twitter.com/" variant="linkicon">
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