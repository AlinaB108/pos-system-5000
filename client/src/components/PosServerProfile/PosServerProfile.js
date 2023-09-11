import React from 'react';

import { Box, Grid, Paper, Typography } from '@mui/material';
// import Button from '@mui/material/Button';

function PosServerProfile() {
  return (
    <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 4 }}>
      {/* First Container */}
      <Grid item xs={12} sm={6}>
        <Grid container justifyContent="center" alignItems="stretch" height='fit-content'>
          <Grid item xs={11}>
            <Typography variant="h5" textAlign='center' sx={{ p: 2, backgroundColor: "#d4e1f1" }}>
              OPEN MENUS
            </Typography>
            <Grid container justifyContent="center" spacing={3}>
              <Grid item xs={6} sm={6} md={4}>
                <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
                  <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                    Table 1
                  </Typography>
                  <Typography sx={{ ml: 2 }}>
                    <p>aaaaaaaaa</p>
                    <p>aaaaaaaaa</p>
                    <p>aaaaaaaaa</p>
                    <p>aaaaaaaaa</p>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
                <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
                  <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                    Table 2
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
                <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
                  <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                    Table 3
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
                <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
                  <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                    Table 4
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
                <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
                  <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                    Table 5
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
                <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
                  <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
                    Table 6
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Second Container */}
      <Grid item xs={12} sm={6} sx={{ pl: 2}}> 
        <Grid container justifyContent="center" alignItems="stretch" height='fit-content'>
          <Grid item xs={12} sm={6} sx={{ pb: 2}}>
            <Paper sx={{ marginRight: '20px' }}>
              <Typography variant="h5" textAlign='center' sx={{ p: 2, backgroundColor: "#d4e1f1" }}>
                Coworkers
              </Typography>
              <Grid sx={{ p: 2 }} style={{ overflowY: 'auto' }}>
                <p>You</p>
                <p>Not You</p>
                <p>Not You x2</p>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ pb: 2}}>
            <Paper sx={{ marginRight: '20px' }}>
              <Typography variant="h5" textAlign='center' sx={{ p: 2, backgroundColor: "#d4e1f1" }}>
                Sections
              </Typography>
              <Grid sx={{ p: 2 }} style={{ overflowY: 'auto' }}>
                <p>20,21,22</p>
                <p>30,31,32</p>
                <p>40,41,42</p>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PosServerProfile;