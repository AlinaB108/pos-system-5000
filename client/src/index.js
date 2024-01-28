import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme';

// Import Stripe related dependencies
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Replace 'your-publishable-key' with your actual Stripe publishable key
const stripePromise = loadStripe('pk_test_51OcloAA1E5eaO9iGpyEKeknWFQC1wNcvlNAUgesTpdtMLNIr2AA9n0RlElzUCaIBOiGshPkZxCXifT78HYeYTnFf00p0U5DdPk');

ReactDOM.render(

  <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
  </ThemeProvider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
