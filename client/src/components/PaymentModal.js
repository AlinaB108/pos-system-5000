import React, { useState, useEffect } from 'react';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {
  Typography, Tabs, Tab, Button, Grid, Paper, TableRow, Box
} from "@mui/material";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const PaymentModal = ({ isOpen, onClose, onPaymentSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [localLoading, setLocalLoading] = useState(false);
  const [localError, setLocalError] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [cardType, setCardType] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  useEffect(() => {
    setError(null);
  }, [isOpen]);

  const handlePaymentConfirmation = async (token) => {
    token.preventDefault();
    setLocalLoading(true);

    const cardInfo = {
      cardType: cardType,
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cvv: cvv,
    };

    try {
      // Send the token to your server for payment processing
      const response = await fetch('/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardInfo)
      });

      if (!response.ok) {
        throw new Error('Payment processing failed');
      }

      const result = await response.json();

      if (result.success) {
        // Payment successful
      } else {
        // Payment failed
        setLocalError(result.error || 'Payment failed');
      }
    } catch (error) {
      console.error('Error processing payment:', error.message);
      setLocalError('Error processing payment');
    } finally {
      setLocalLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 2, zIndex: 9999, width: '50vw', height: '50vh', boxShadow: '0px 0px 100px 0px rgba(0, 0, 0, 1)' }}>
      <form onSubmit={handlePaymentConfirmation}>
        Card Type
        <TableRow>
          <button onClick={() => setCardType('Visa')}>Visa</button>
          <button onClick={() => setCardType('MasterCard')}>MasterCard</button>
          <button onClick={() => setCardType('Amex')}>Amex</button>
        </TableRow>

        Card Number
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />

        Expiration Date
        <input type="month" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />

        CVV
        <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} maxLength="3" pattern="\d{3}" />

        <Button type="submit" disabled={loading} color="success">
          {loading ? 'Processing...' : 'Pay Now'}
        </Button>
      </form>
    </Paper>
  );
};

export default PaymentModal;
