// CSS import
import './index.css';

//Library import
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// component import
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <BrowserRouter>
                <App />
                <Toaster/>
            </BrowserRouter>
    </React.StrictMode>
)
