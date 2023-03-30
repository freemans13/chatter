/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable comma-dangle */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import AuthenticationProviderWithNavigate from './auth0/AuthenticationProviderWithNavigate';
import App from './App';
import Callback from './components/Callback';
import GlobalStyles from './GlobalStyles';
import AuthenticationGuard from './auth0/AuthenticationGuard';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <GlobalStyles />
    <AuthenticationProviderWithNavigate>
      <Routes>
        <Route path="/" element={<AuthenticationGuard component={App} />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </AuthenticationProviderWithNavigate>
  </BrowserRouter>
  // </React.StrictMode>
);
