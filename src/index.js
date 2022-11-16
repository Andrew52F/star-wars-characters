import React from 'react';
import ReactDOM from 'react-dom/client';
import '@styles/index.css';
import App from '@containers/App';
import store from '@store/store';
import { Provider } from 'react-redux';
import ThemeProvider from '@context/ThemeProvider';
import LocalizationProvider from '@localization';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider >
        <LocalizationProvider>
          <App />
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
); 