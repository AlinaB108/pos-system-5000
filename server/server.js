const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const stripe = require('stripe')('sk_test_51OcloAA1E5eaO9iGvYqFBReJ0O4fORJY5rLZ7dPuiflmfypJ6C2NIewyfQVgi7iVyfeQ8OqYerkmqArazlax3xmX001nI8HcPg');
 // Replace with your actual Stripe secret key

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware, // Adding authentication middleware to the Apollo Server
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  // Serving static files from the build directory in production
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Endpoint to create a Stripe Checkout session
app.post('/create-checkout-session', async (req, res) => {
  try {
    // Creating a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Your Product Name', // Replace with actual product name
            },
            unit_amount: 1000, // Amount in cents (replace with actual amount)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success', // Replace with your success URL
      cancel_url: 'http://localhost:3000/cancel', // Replace with your cancel URL
    });

    // Responding with the Checkout session ID
    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to check the status of a Stripe Checkout session
app.get('/session-status/:session_id', async (req, res) => {
  const { session_id } = req.params;

  try {
    // Retrieve the session status from Stripe
    const session = await stripe.checkout.sessions.retrieve(session_id);
    
    // Responding with the session status and customer email
    res.json({ status: session.payment_status, customer_email: session.customer_email });
  } catch (error) {
    console.error('Error checking session status:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serving the React app for any other routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Starting Apollo Server and Express
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  // Starting the Express server on the specified port
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Calling the function to start the server
startApolloServer();
