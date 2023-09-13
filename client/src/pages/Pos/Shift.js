
import { useOutletContext } from "react-router-dom";
import { Box, Grid, Button, Typography } from '@mui/material';
import { useMutation } from "@apollo/client";
import { ADD_SHIFT, UPDATE_SHIFT } from "../../utils/mutations";

const Shift = () => {
  const [profile] = useOutletContext();
  const [updateShift, {updateShiftError}] = useMutation(UPDATE_SHIFT)
  const [addShift, {addShiftError}] = useMutation(ADD_SHIFT)
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

  const handleClockIn = async () => {
    try {
      await addShift({variables: {"clockIn": Date.now().toString(), "currentShift": true, "clockedIn": true}})
      window.location.reload()
    } catch (err) {
      console.log(addShiftError)
    }
  }
  
  const handleBreakStart = async () => {
    try {
      updateShift({variables: {"id": currentShift[0]._id, "breakStart": Date.now().toString(), "clockedIn": false}})
    } catch (err) {
      console.log(updateShiftError)
    }
  }
  const handleBreakEnd = async () => {
    try {
      updateShift({variables: {"id": currentShift[0]._id, "breakEnd": Date.now().toString(), "clockedIn": true}})
    } catch (err) {
      console.log(updateShiftError)
    }
  }
  const handleClockOut = async () => {
    try {
      updateShift({variables: {"id": currentShift[0]._id, "clockOut": Date.now().toString(), "clockedIn": false}})
    } catch (err) {
      console.log(updateShiftError)
    }
  }
  
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

    time = mm + '/' + dd + '/' + yyyy + ', ' + h + ':' + min + ' ' + ampm;
    return time;
  }

  // IF THEY DONT HAVE A CURRENT SHIFT THEN THEY ARE NOT CLOCKED IN ETC
  if (!currentShift[0]) {
    return (
      <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 2 }}>
          {allRoles.map(role => {
            return <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden' }} width="200px" style={{ backgroundColor: "#fff" }}>
                <Typography variant="h6" textAlign='center'>
                {role.name}
                </Typography>
              </Box>
          })}

        <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
          <Button onClick={handleClockIn}>Clock In</Button>
        </Box>
      </Grid>
    )
  }

  // WHEN YOURE ON BREAK; NOT CLOCKED IN BUT STILL YOUR CURRENT SHIFT AND HAVENT CLOCKED OUT: ONLY CAN END BREAK HERE
  if (!currentShift[0].clockedIn && currentShift[0].currentShift && !currentShift[0].clockOut) {
    return (
      <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 2 }}>
        <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
          <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '15px 15px 0 0' }}>
            Break Start Time
          </Typography>
          <Typography sx={{ pl: 1, pr: 1 }}>
            {convertTimestamp(currentShift[0].breakStart)}
          </Typography>
        </Box>
        <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
          <Button onClick={handleBreakEnd}>End Break</Button>
        </Box>
      </Grid>
    )
  }

  // WHEN YOU CLOCK OUT FOR THE DAY AND SHOWS YOU ALL INFO ABOUT YOUR DAY
  if (!currentShift[0].clockedIn && currentShift[0].clockOut) {
    return (
      <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 2 }}>
        <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
          <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '15px 15px 0 0' }}>
            Clock In Time
          </Typography>
          <Typography sx={{ pl: 1, pr: 1 }}>
            {convertTimestamp(currentShift[0].clockIn)}
          </Typography>
        </Box>
        <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
          <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '15px 15px 0 0' }}>
            Break Start Time
          </Typography>
          <Typography sx={{ pl: 1, pr: 1 }}>
            {convertTimestamp(currentShift[0].breakStart)}
          </Typography>
        </Box>
        <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
          <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '15px 15px 0 0' }}>
            Break End Time
          </Typography>
          <Typography sx={{ pl: 1, pr: 1 }}>
            {convertTimestamp(currentShift[0].breakEnd)}
          </Typography>
        </Box>
        <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
          <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '15px 15px 0 0' }}>
            Clock Out Time
          </Typography>
          <Typography sx={{ pl: 1, pr: 1 }}>
            {convertTimestamp(profile.shifts[0].clockOut)}
          </Typography>
        </Box>
      </Grid>
    )
  }

  if(currentShift[0].clockedIn && currentShift[0].currentShift && currentShift[0].breakEnd) {
    return (
      <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 2 }}>
        {/* CLOCK IN STUFF */}
        <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
          <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '15px 15px 0 0' }}>
            Shift Start Time
          </Typography>
          <Typography sx={{ pl: 1, pr: 1 }}>
            {console.log(currentShift)}
            {convertTimestamp(currentShift[0].clockIn)}
          </Typography>
        </Box>
  
        <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
          <Button onClick={handleClockOut}>Clock Out</Button>
        </Box>
  
      </Grid>
    );
  }
  // DEFAULT RETURN: IF CLOCKED IN AND CURRENTSHIFT IS TRUE
  return (
    <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 2 }}>
      {/* CLOCK IN STUFF */}
      <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
        <Typography variant="h6" textAlign='center' sx={{ pt: 2, backgroundColor: "#fce698", borderRadius: '15px 15px 0 0' }}>
          Shift Start Time
        </Typography>
        <Typography sx={{ pl: 1, pr: 1 }}>
          {console.log(currentShift)}
          {convertTimestamp(currentShift[0].clockIn)}
        </Typography>
      </Box>

      <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
        <Button onClick={handleBreakStart}>Start Break</Button>
      </Box>

      <Box sx={{ m: 2, borderRadius: '15px', overflow: 'hidden', backgroundColor: "#fff" }}>
        <Button onClick={handleClockOut}>Clock Out</Button>
      </Box>

    </Grid>
  );
};

export default Shift;