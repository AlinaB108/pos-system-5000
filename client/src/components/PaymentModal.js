import React, { useState, useEffect } from 'react';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {
  Typography, Tabs, Tab, Button, Grid, Paper, TableRow, Box
} from "@mui/material";
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const PaymentModal = ({ display, orderTotal, items, onClose, onPaymentSuccess, }) => {
  //error handling vv
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [localLoading, setLocalLoading] = useState(false);
  const [localError, setLocalError] = useState(null);

  // card and payment information vv
  const [cardType, setCardType] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [total, setTotal] = useState(orderTotal);

  //display the modal or not


  useEffect(() => {
    setError(null);
  }, [display]);

  const handlePaymentConfirmation = async (token) => {
    token.preventDefault();
    setLocalLoading(true);
  
    const transactionInfo = {
      total: total,
      items: items,
    };

    const paymentInfo = {
      cardType: cardType,
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cvv: cvv,
    }
  
    console.log(transactionInfo, paymentInfo);
  
    try {
      // Create a on your server
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transactionInfo),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create Payment Intent');
      }
  
      const result = await response.json();
  
      // Confirm the Payment Intent on the client side
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        result.clientSecret,
        {
          payment_method: {
            card:JSON.stringify(paymentInfo),
            // Add other payment method details as needed
          },
        }
      );
  
      if (error) {
        console.error('Error confirming payment:', error.message);
        setLocalError('Error confirming payment');
      } else if (paymentIntent.status === 'succeeded') {
        // Payment successful
        console.log('Payment succeeded!');
      } else {
        // Payment failed or requires additional action
        console.log('Payment failed or requires additional action');
        setLocalError('Payment failed');
      }
    } catch (error) {
      console.error('Error processing payment:', error.message);
      setLocalError('Error processing payment');
    } finally {
      setLocalLoading(false);
    }
  };

  return (
    <Paper sx={{display: display, top: 0, p: 2, position: 'absolute', marginTop: '10vh', zIndex: 9999, width: '50vw', height: '50vh', boxShadow: '0px 0px 100px 0px rgba(0, 0, 0, 1)' }}>
      <form onSubmit={handlePaymentConfirmation}>
        <h1>{total}</h1>

        <div>
          Card Type
          <button type="button" onClick={() => setCardType('Visa')}>Visa</button>
          <button type="button" onClick={() => setCardType('MasterCard')}>MasterCard</button>
          <button type="button" onClick={() => setCardType('Amex')}>Amex</button>
        </div>

        <div>
          Card Number
          <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        </div>

        <div>
          Expiration Date
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            pattern="(0[1-9]|1[0-2])\/\d{2}"
          />
        </div>

        <div>
          CVV
          <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} maxLength="3" pattern="\d{3}" />
        </div>

        <div>
          <Button type="submit" disabled={loading} color="success">
            {loading ? 'Processing...' : 'Pay Now'}
          </Button>
        </div>
        CHECK CONSOLE LOGS FOR PAYMENT OBJECT!
      </form>
    </Paper>
  );
};

export default PaymentModal;
