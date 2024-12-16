import React from 'react';
import AppLight from './light/AppLight';
import AppDark from './dark/AppDark';
import { BlogConsumer } from './providers/BlogProvider';
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
		<BlogConsumer>
			{
				value => (
					<App darkMode={value.darkMode}/>
				)
			}
		</BlogConsumer>
	)
}

export default ConnectedApp;
