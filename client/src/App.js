import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import HomePage from './pages/Front/HomePage';
// import HomeLogin from './pages/Front/HomeLogin';
// import Signup from './pages/Front/HomeSignup';
import NoMatch from './pages/Front/NoMatch';
// FRONT END WEBSITE ROUTES ^^

// POS APPLICATION ROUTES vv
import Shift from './pages/Pos/Shift';
import Orders from './pages/Pos/Orders';
import EmployeeList from './pages/Pos/EmployeeList';
import MenuList from './pages/Pos/MenuList';
import CommandsList from './pages/Pos/CommandsList';
import Profile from './pages/Pos/Profile';
// import ServerProfile from './pages/ServerProfile/ServerProfile';
import PosMain from './pages/Pos/PosMain';
import Table from './pages/Pos/Table';
// import Nav from './components/Nav';

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


            {/* FRONTEND WEBSITE ROUTES vv */}
            <Route
              path="/"
              element={<HomePage />}
            />

            {/* BACKEND POS SYSTEM ROUTES vv */}
            <Route
              path="/pos"
              element={<PosMain />}>
                <Route
                  path="/pos/shift"
                  element={<Shift />}
                />
                <Route
                  path="/pos/profile"
                  index
                  element={<Profile />}
                  />
                <Route
                  path="/pos/order/:_id"
                  element={<Table />}
                />
                <Route
                  path="/pos/orders"
                  element={<Orders />}
                />
                <Route
                  path="/pos/employees"
                  element={<EmployeeList />}
                />
                <Route
                  path="/pos/menu"
                  element={<MenuList />}
                />
                <Route
                  path="/pos/ordrs" /*  another layer of security  */
                  element={<CommandsList />}
                />
            </Route>            
            {/* 404 ROUTE vv */}
            <Route
              path="*"
              element={<NoMatch />}
            />
          </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
