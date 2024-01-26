import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// const root = ReactDOM.createRoot(document.getElementById('root'));
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-publishable-key'); // Replace with your actual Stripe publishable key


ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
  <ThemeProvider theme = {theme}>
  <CssBaseline/>
        <App />
        </ThemeProvider>
      </Elements>,
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
