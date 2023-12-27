// CSS import
import './index.css';

//Library import
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

// component import
import App from './App.jsx';
import store from './Redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
                <Toaster/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
