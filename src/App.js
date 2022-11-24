import React from 'react';
import AppLight from './light/AppLight';
import AppDark from './dark/AppDark';
import { DarkModeConsumer } from './providers/DarkModeProvider';
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

const ConnectedApp = () => {
	return (
		<DarkModeConsumer>
			{
				value => (
					<App darkMode={value.darkMode}/>
				)
			}
		</DarkModeConsumer>
	)
}

export default ConnectedApp;
