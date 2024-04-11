import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom'
import BlogProvider from './providers/BlogProvider';

ReactDOM.render(
    <BlogProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </BlogProvider>,
	document.getElementById('root')
);
