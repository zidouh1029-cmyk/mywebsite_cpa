import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 🔹 التأكد من وجود العنصر الجذر
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// 🔹 تصحيح المسار الأساسي للتطبيق (لـ GitHub Pages)
const basePath = '/my-landing-page/';

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode basename={basePath}>
    <App />
  </React.StrictMode>
);
