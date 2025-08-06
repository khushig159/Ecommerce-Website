import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartContextProvider } from './store/CartContest.jsx'

createRoot(document.getElementById('root')).render(
    <CartContextProvider>
    <App />
    </CartContextProvider>
);
