import React, { useEffect } from 'react';
import gsap from 'gsap';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Button, Grid } from '@mui/material';

function Nav() {
  function handleLogout() {
    Auth.logout();
  }

  useEffect(() => {
    gsap.from('.nav-link', { opacity: 0, duration: 0.6, delay: 0.2, stagger: 0.5 });
  }, []);

  return (
    <AppBar position="static" style={{ backgroundColor: 'black' }}>
      <Toolbar sx={{ my: 3 }}>
        <Typography variant="h5" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }} className="nav-link">
          Sapori D'Italia
        </Typography>
          <Grid style={{ marginLeft: 'auto' }} textAlign="center">
            <Box mx={6}>
              <Button component="a" href="#About" color="inherit" className="nav-link">
                About
              </Button>
              <Button component="a" href="#Menu" color="inherit" className="nav-link">
                Menu
              </Button>
              <Button component="a" href="#Contact" color="inherit" className="nav-link">
                Contact
              </Button>
            </Box>
          </Grid>
        <Grid style={{ marginLeft: 'auto' }} className="nav-link">
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