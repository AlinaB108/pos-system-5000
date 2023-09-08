import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function PosNav() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date().toLocaleString());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <Typography variant="" sx={{ p: 1 }} style={{ color: 'white' }}>
        {currentTime}
      </Typography>
    );
  };

  return (
    <AppBar position="static">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <Button
            color="inherit"
            onClick={() => {
              // Handle the exit action here
            }}
          >
            Logo
          </Button>
        </Box>

        <Box
          sx={{
            flexGrow: 3,
            display: 'flex',
            justifyContent: 'center',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
            color: 'inherit',
          }}
        >
          <Time />
        </Box>


        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            color="inherit"
            onClick={() => {
              // Handle the exit action here
            }}
          >
            Exit
          </Button>
        </Box>
      </Box>

      <Box sx={{justifyContent: 'center', margin: 'auto'}}>Welcome John! You are a SERVER today!</Box>
      
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-evenly',
          mt: 2,
        }}
      >
        <Button
          color="inherit"
          sx={{ mx: 2 }}
          onClick={() => {
            // Handle the "All Orders" action here
          }}
        >
          All Orders
        </Button>
        <Button
          color="inherit"
          sx={{ mx: 2 }}
          onClick={() => {
            // Handle the "Your Tips" action here
          }}
        >
          Your Tips
        </Button>
        <Button
          color="inherit"
          sx={{ mx: 2 }}
          onClick={() => {
            // Handle the "Start Break" action here
          }}
        >
          Start Break
        </Button>
        <Button
          color="inherit"
          sx={{ mx: 2 }}
          onClick={() => {
            // Handle the "Clock Out" action here
          }}
        >
          Clock Out
        </Button>
        </Box>
    </AppBar>
  )
}
export default PosNav;
