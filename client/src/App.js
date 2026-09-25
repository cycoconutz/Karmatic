import React, { useState, useEffect } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Login from './pages/LoginSignup/Login';
import SignUp from './pages/LoginSignup/SignUp'
import Profile from './pages/Profile/Profile';
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home';
import Nav from './GlobalComponents/Nav/Nav';
import Footer from "./GlobalComponents/Footer/Footer"
import Auth from './utils/auth';
import DemoAccountsModal, { DEMO_DISMISS_KEY, demoAccountsWereDismissed } from './GlobalComponents/Modals/DemoAccountsModal';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// FOR AUTH
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const theme = {
  colors: {
    darkteal: '#00A191',
    teal: '#5EACA4',
    lightteal: '#B1DCD8',
    purple: '#E2B4E5',
    lightpurple: '#E0B9B9',
    darkpurple: '#A85EAC',
    lightgrey: '#E9E9E9',
    darkgrey: '#4A5655',
  },
  fonts: {
    otherfont: 'Nunito Sans'
  }
}

export default function App() {
  
  // Determines if the Modal for edit post should open
  const [isOpen, setIsOpen] = useState(false)
  // Logic to have app follow the current page being displayed
  const [currentPage, setCurrentPage] = useState('Home');
  const [accessPage, setCurrentAccessPage] = useState('Login')
  const handlePageChange = (page) => setCurrentPage(page);

  // Demo account modal state
  const [demoOpen, setDemoOpen] = useState(false);
  const [autoShown, setAutoShown] = useState(false);

  // Show demo account logins once per session for logged-out visitors
  useEffect(() => {
    if (Auth.loggedIn()) return;
    if (autoShown) return;
    setAutoShown(true);
    if (demoAccountsWereDismissed()) return;
    setDemoOpen(true);
  }, [autoShown]);

  const dismissDemo = () => {
    try {
      sessionStorage.setItem(DEMO_DISMISS_KEY, '1');
    } catch {
      // storage unavailable — still close
    }
    setDemoOpen(false);
  };
  
  // Renders current page based on user login
  const renderCurrentPage = () => {
    if (currentPage === 'Profile') {

      return <Profile/>;
    }
    if (currentPage === 'Dashboard') {
      return <Dashboard handlePageChange={handlePageChange} isOpen={isOpen} setIsOpen={setIsOpen} />;
    }
    if (currentPage === 'Login') {
      return <Login handlePageChange={handlePageChange} />;
    }
    if (currentPage === 'SignUp') {
      return <SignUp handlePageChange={handlePageChange} />;
    }
      return <Home handlePageChange={handlePageChange} />;
  }

  return (
    <>
    <ApolloProvider client={client}>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} accessPage={accessPage} setCurrentAccessPage={setCurrentAccessPage} onOpenDemo={() => setDemoOpen(true)} />
        {renderCurrentPage()}
        <DemoAccountsModal open={demoOpen} onDismiss={dismissDemo} />
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
    </>
  );
}
