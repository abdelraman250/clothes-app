import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import ShoppingContext from './components/jsx/shopingcontext.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShoppingContext>
      <App />
    </ShoppingContext>
  </StrictMode>
);
