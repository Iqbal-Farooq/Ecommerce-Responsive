import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import ContextProvider from './components/Context/ContextProvider';
import AuthContextProvider from './components/Login/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthContextProvider>
  <ContextProvider>
  
    <App />
 
  </ContextProvider>
  </AuthContextProvider>
   </BrowserRouter>
);

