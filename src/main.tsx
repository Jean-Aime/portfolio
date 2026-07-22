"use client";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster 
      position="bottom-right" 
      toastOptions={{
        style: {
          background: '#0f172a',
          color: '#f8fafc',
          border: '1 border-white/10',
          borderRadius: '12px',
          fontFamily: 'sans-serif',
          fontSize: '14px',
        },
        success: {
          iconTheme: {
            primary: '#0ea5e9',
            secondary: '#ffffff',
          },
        },
      }}
    />
    <App />
  </React.StrictMode>
);