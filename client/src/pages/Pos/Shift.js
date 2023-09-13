
import { useOutletContext } from "react-router-dom";
import { Box, Grid, Button, Typography } from '@mui/material';
import { useMutation } from "@apollo/client";
import { UPDATE_SHIFT } from "../../utils/mutations";

const Shift = () => {
  const [profile] = useOutletContext();
  if (!profile?.firstName) {
    return (
      <h4>
        You need to be logged in to see your shifts page.
      </h4>
    );
  }

  // VARIABLES TO ACCESS SPECFIC VERSIONS OF SHIFTS
  const allShifts = profile.shifts
  const currentShift = allShifts.filter((shift) => shift.currentShift === true)
  const allRoles = profile.roles

  // UPDATE SHIFT MUTATION
  // const [updateShift, error] = useMutation(UPDATE_SHIFT)
  // TIMESTAMP FUNCTION TO CONVERT UNIX TO REAL HUMAN TIME
  function convertTimestamp(timestamp) {
    var d = new Date(timestamp * 1),
      yyyy = d.getFullYear(),
      mm = ('0' + (d.getMonth() + 1)).slice(-2),
      dd = ('0' + d.getDate()).slice(-2),
      hh = d.getHours(),
      h = hh,
      min = ('0' + d.getMinutes()).slice(-2),
      ampm = 'AM',
      time;

    if (hh > 12) {
      h = hh - 12;
      ampm = 'PM';
    } else if (hh === 12) {
      h = 12;
      ampm = 'PM';
    } else if (hh === 0) {
      h = 12;
    }

    time = mm + '-' + dd + '-' + yyyy + ', ' + h + ':' + min + ' ' + ampm;
    return time;
  }

  // IF THEY DONT HAVE A CURRENT SHIFT THEN THEY ARE NOT CLOCKED IN ETC
  if (!currentShift) {
    return (
      <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 2 }}>
        {allRoles.map(role => {
          return <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
            <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
              <p>{role.name}</p>
            </Typography>
          </Box>
        })}

        <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
          <Button><p>Clock In</p></Button>
        </Box>
      </Grid>
    )
  }

  // WHEN YOURE ON BREAK; NOT CLOCKED IN BUT STILL YOUR CURRENT SHIFT AND HAVENT CLOCKED OUT: ONLY CAN END BREAK HERE
  if (!currentShift[0].clockedIn && currentShift[0].currentShift && !currentShift[0].clockOut) {
    return (
      <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 2 }}>
        <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
          <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
            <p>Break Start Time</p>
          </Typography>
          <Typography sx={{ pl: 1, pr: 1 }}>
            <p>{currentShift[0].breakStart}</p>
          </Typography>
        </Box>
        <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
          <Button><p>End Break</p></Button>
        </Box>
      </Grid>
    )
  }

  // WHEN YOU CLOCK OUT FOR THE DAY AND SHOWS YOU ALL INFO ABOUT YOUR DAY
  if (!currentShift[0].clockedIn && currentShift[0].currentShift && currentShift[0].clockOut) {
    return (
      <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 2 }}>
        <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
          <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
            <p>Clock In Time</p>
          </Typography>
          <Typography sx={{ pl: 1, pr: 1 }}>
            {console.log(currentShift)}
            <p>{convertTimestamp(currentShift[0].clockIn)}</p>
          </Typography>
        </Box>
        <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
          <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
            <p>Break Start Time</p>
          </Typography>
          <Typography sx={{ pl: 1, pr: 1 }}>
            <p>{convertTimestamp(currentShift[0].breakStart)}</p>
          </Typography>
        </Box>
        <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
          <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
            <p>Break End Time</p>
          </Typography>
          <Typography sx={{ pl: 1, pr: 1 }}>
            <p>{convertTimestamp(currentShift[0].breakEnd)}</p>
          </Typography>
        </Box>
        <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
          <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
            <p>Clock Out Time</p>
          </Typography>
          <Typography sx={{ pl: 1, pr: 1 }}>
            <p>{convertTimestamp(profile.shifts[0].clockOut)}</p>
          </Typography>
        </Box>
      </Grid>
    )
  }


  // DEFAULT RETURN: IF CLOCKED IN AND CURRENTSHIFT IS TRUE
  return (
    <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 2 }}>
      {/* CLOCK IN STUFF */}
      <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
        <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '25px 25px 0 0' }}>
          <p>Shift Start Time</p>
        </Typography>
        <Typography sx={{ pl: 1, pr: 1 }}>
          {console.log(currentShift)}
          <p>{convertTimestamp(currentShift[0].clockIn)}</p>
        </Typography>
      </Box>

      <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
        <Button><p>Start Break</p></Button>
      </Box>

      <Box sx={{ m: 2, borderRadius: '25px', overflow: 'hidden' }} height='25vh' style={{ backgroundColor: "#fff" }}>
        <Button><p>Clock Out</p></Button>
      </Box>

    </Grid>
  );
};

export default Shift;