import React from "react";
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './Nav.css'
// Using Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

function Nav() {
  function handleLogout() {
    Auth.logout();
  }

  return (
    <AppBar position="static" style={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h5" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Sapori D'Italia
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
          <Box mx={6}>
            <Button component={Link} to="#About" color="inherit">
              About
            </Button>
            <Button component={Link} to="#Menu" color="inherit">
              Menu
            </Button>
            <Button component={Link} to="#Contact" color="inherit">
              Contact
            </Button>
          </Box>
        </div> 
        <div style={{ marginLeft: 'auto' }}>
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
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;