import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom'
import BlogProvider from './providers/BlogProvider';

const root = createRoot(document.getElementById('root'));
root.render(
  <BlogProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </BlogProvider>
);
