import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

import React from 'react';
import ApolloProvider from './ApolloProvider';

function App() {
  return (
    <ApolloProvider>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
