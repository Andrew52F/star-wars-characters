import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './containers/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('root')
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
); 