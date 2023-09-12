import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Button, Grid } from '@mui/material';

function Nav() {
  function handleLogout() {
    Auth.logout();
  }

  return (
    <AppBar position="static" style={{ backgroundColor: 'black' }}>
      <Toolbar sx={{ my: 3 }}>
        <Typography variant="h5" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Sapori D'Italia
        </Typography>
          <Grid style={{ marginLeft: 'auto' }}>
            <Box mx={6}>
              <Button component="a" href="#About" color="inherit">
                About
              </Button>
              <Button component="a" href="#Menu" color="inherit">
                Menu
              </Button>
              <Button component="a" href="#Contact" color="inherit">
                Contact
              </Button>
            </Box>
          </Grid>
        <Grid style={{ marginLeft: 'auto' }}>
          {/* If loggedIn is true Logout button renders */}
          {Auth.loggedIn() ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button> ) : (
            <>
            {/* If loggedIn is false Login and Signup button render */}
              <Button component={Link} to="/signup" color="inherit">
                Signup
              </Button>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
            </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;