import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store';
import { App } from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store} basename="/car-rental-app">
        <BrowserRouter>
          <App />
          
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
