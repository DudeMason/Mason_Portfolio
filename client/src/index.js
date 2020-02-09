import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom'
import BlogProvider from './providers/BlogProvider';
import AuthProvider from './providers/AuthProvider';
import { initMiddleware } from 'devise-axios';

initMiddleware();

ReactDOM.render(

  <AuthProvider>
    <BlogProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </BlogProvider>
  </AuthProvider>,

  document.getElementById('root')

);
