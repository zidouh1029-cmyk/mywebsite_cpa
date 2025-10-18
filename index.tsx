import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// ✅ GitHub Pages يحتاج basename يساوي اسم مجلد المشروع
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/my-landing-page">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
