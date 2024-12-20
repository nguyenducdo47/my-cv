import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import './components/i18n';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
