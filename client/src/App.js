import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import HomePage from './pages/HomePage/HomePage';
import HomeLogin from './pages/HomeLogin/HomeLogin';
import Signup from './pages/HomeSignup/HomeSignup';
import NoMatch from './pages/NoMatch/NoMatch';
// FRONT END WEBSITE ROUTES ^^

// POS APPLICATION ROUTES vv
import Tips from './pages/Tips/Tips';
import Orders from './pages/Orders/Orders';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import SingleOrder from './pages/SingleOrder/SingleOrder';
// import Nav from './components/Nav';

import { StoreProvider } from './utils/GlobalState';


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
        <StoreProvider>

          <Routes>
            {/* 404 ROUTE vv */}
            <Route
              path="*"
              element={<NoMatch />}
            />

            {/* FRONTEND WEBSITE ROUTES vv */}
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/login/"
              element={<HomeLogin />}
            />
            <Route
              path="/signup/"
              element={<Signup />}
            />

            {/* BACKEND POS SYSTEM ROUTES vv */}
            <Route
              path="/pos/"
              element={<Login />}
            />
            <Route
              path="/pos/profile"
              element={<Profile />}
            />
            <Route
              path="/pos/order"
              element={<SingleOrder />}
            />
            <Route
              path="/pos/orders"
              element={<Orders />}
            />
            <Route
              path="/pos/tips"
              element={<Tips />}
            />
          </Routes>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
