import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

export default function Time() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Typography variant="h6" sx={{ p: '1%' }} style={{ color: 'white' }}>
      {currentTime}
    </Typography>
  );
};