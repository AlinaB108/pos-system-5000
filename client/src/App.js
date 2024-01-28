import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import HomePage from './pages/Front/HomePage';
import Login from './pages/Front/HomeLogin';
import NoMatch from './pages/Front/NoMatch';
import Shift from './pages/Pos/Shift';
import Orders from './pages/Pos/Orders';
import Employees from './pages/Pos/Employees';
import Menu from './pages/Pos/Menu';
import Profile from './pages/Pos/Profile';
import PosMain from './pages/Pos/PosMain';
import Table from './pages/Pos/Table';

// Replace 'your-publishable-key' with your actual Stripe publishable key
const stripePromise = loadStripe('pk_test_51OcloAA1E5eaO9iGpyEKeknWFQC1wNcvlNAUgesTpdtMLNIr2AA9n0RlElzUCaIBOiGshPkZxCXifT78HYeYTnFf00p0U5DdPk');

// Create Apollo Client setup
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          {/* Frontend Website Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />

          {/* Backend POS System Routes */}
          <Route path="/pos" element={<PosMain />}>
            {/* Wrap the POS components with Elements for Stripe */}
              <Route path="/pos/shift" element={<Shift />} />

              <Route path="/pos/profile" index element={<Profile />} />

              <Route path="/pos/order/:_id" element={<Table />} />

              <Route path="/pos/orders" element={<Orders />} />

              <Route path="/pos/employees" element={<Employees />} />
              
              <Route path="/pos/menu" element={<Menu />} />
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
