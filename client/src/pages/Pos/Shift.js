
import { useOutletContext } from "react-router-dom";
import { Box, Grid, Button, Typography } from '@mui/material';

const Shift = () => {
  const [profile] = useOutletContext();
  console.log(profile)  
  if (!profile?.firstName) {
    return (
      <h4>
        You need to be logged in to see your shifts page.
      </h4>
    );
  }
  const allRoles = profile.roles
  function convertTimestamp(timestamp) {
    var d = new Date(timestamp * 1), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
        hh = d.getHours(),
        h = hh,
        min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
        ampm = 'AM',
        time;

    if (hh > 12) {
        h = hh - 12;
        ampm = 'PM';
    } else if (hh === 12) {
        h = 12;
        ampm = 'PM';
    } else if (hh == 0) {
        h = 12;
    }

    time = mm + '-' + dd + '-' + yyyy + ', ' + h + ':' + min + ' ' + ampm;
    return time;
}
  return (
      <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 2 }}>
            {allRoles.map(role => {
              return <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden' }} width="200px" style={{ backgroundColor: "#fff" }}>
                  <Typography variant="h6" textAlign='center'>
                  <p>{role.name}</p>
                  </Typography>
                </Box>
            })}
            
        <Grid container justifyContent="center" alignItems="center">
          {/* CLOCK IN STUFF */}
            <Grid item xs={3}>
              <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
                <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '15px 15px 0 0' }}>
                  <p>Clock In Time</p>
                </Typography>
                <Typography sx={{ pl: 1, pr: 1 }}>
                  <p>{convertTimestamp(profile.shifts[0].clockIn)}</p>
                </Typography>
              </Box>

              <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
                <Button><p>Clock In</p></Button>
              </Box>
            </Grid>

            {/* CLOCK OUT STUFF */}
            <Grid item xs={3}>
              <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
                <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '15px 15px 0 0' }}>
                  <p>Clock Out Time</p>
                </Typography>
                <Typography sx={{ pl: 1, pr: 1 }}>
                  <p>{convertTimestamp(profile.shifts[0].clockOut)}</p>
                </Typography>
              </Box>

              <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
                <Button><p>Clock Out</p></Button>
              </Box>
            </Grid>

            {/* BREAK START STUFF */}
            <Grid item xs={3}>
              <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
                <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '15px 15px 0 0' }}>
                  <p>Break Start Time</p>
                </Typography>
                <Typography sx={{ pl: 1, pr: 1 }}>
                  <p>TEST</p>
                </Typography>
              </Box>

              <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
                <Button><p>Start Break</p></Button>
              </Box>
            </Grid>

            {/* BREAK END STUFF */}
            <Grid item xs={3}>
              <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
                <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '15px 15px 0 0' }}>
                  <p>Break End Time</p>
                </Typography>
                <Typography sx={{ pl: 1, pr: 1 }}>
                  <p>TEST</p>
                </Typography>
              </Box>

              <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
                <Button><p>End Break</p></Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
  );
};

export default Shift;