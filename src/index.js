import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'animate.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import NetworkStatus from './components/NetworkStatus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Toaster
      toastOptions={{
        style: { zIndex: 9999 }, // Ensure it's above the navbar
      }}
    />
    <App />
    <NetworkStatus />
  </Router>
);
