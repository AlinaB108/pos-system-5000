import React from 'react';
import PosLoginKeyPad from '../../components/PosLoginKeyPad/PosLoginKeyPad';
import { AppBar, Toolbar, Typography, Button, Hidden } from '@mui/material';


const Login = () => {
  return (
    <div className='container'>
      <NavLogin/>
      <PosLoginKeyPad />
    </div>
  );
}

function NavLogin() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#d4e1f1' }}>
      <Toolbar sx={{ py: 2 }}>
        <Typography variant="h5" style={{ textDecoration: 'none', color: '#23296c' }}>
          Logo
        </Typography>
        <Hidden smDown>
          <div style={{ marginLeft: 'auto' }}>
            <Typography variant="h3" style={{ textDecoration: 'none', color: '#23296c' }}>
              SIDEKICK
            </Typography>
          </div>
        </Hidden>
        <div style={{ marginLeft: 'auto' }}>
          <Button variant="contained" href="/login" color="error" size="large">
            EXIT
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Login;