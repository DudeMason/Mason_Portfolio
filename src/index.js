import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import DarkModeProvider from './providers/DarkModeProvider';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<DarkModeProvider>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</DarkModeProvider>,

	document.getElementById('root')
);
