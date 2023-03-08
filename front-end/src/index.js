import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import MainProvider from './Provider/MainProvider';
import StorageProvider from './Provider/StorageProvider';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
      <Router>
        <StorageProvider>
          <App />
        </StorageProvider>
      </Router>
    </MainProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
