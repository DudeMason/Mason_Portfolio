import React from 'react';
import AppLight from './light/AppLight';
import AppDark from './dark/AppDark';
import './Index.css'

const App = ({darkMode}) => (

	<>
		{
			darkMode
			?
			<AppDark/>
			:
			<AppLight/>
		}
	</>
)

export default App;
