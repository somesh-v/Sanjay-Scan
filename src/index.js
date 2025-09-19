import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import for React 18
import { HashRouter } from 'react-router-dom'; // Use HashRouter instead of BrowserRouter
import App from './App';
import './index.css';
import './styles/styles.css'; // Import custom CSS if needed

// Get the root element
const rootElement = document.getElementById('root');
// Create a root
const root = createRoot(rootElement);

// Render the app
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);