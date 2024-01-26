import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const PaymentModal = ({ isOpen, onClose, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    // Confirm the card payment on the client
    const { token, error } = await stripe.createToken(elements.getElement(CardElement));

    if (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    } else {
      // Send the token to your server for further processing
      await handlePaymentConfirmation(token);
    }
  };

  const handlePaymentConfirmation = async (token) => {
    // Send the token to your server for payment processing
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: token.id }),
    });

    const result = await response.json();

    if (result.id) {
      // Payment successful
      onPaymentSuccess(result.id);
    } else {
      // Payment failed
      setError(result.error);
    }

    setLoading(false);
  };

  useEffect(() => {
    setError(null);
  }, [isOpen]);

  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <label>
            Card Details
            <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
          </label>

          {error && <p className="error">{error}</p>}

          <button type="submit" disabled={loading} className="button is-primary">
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>
  );
};

export default PaymentModal;
