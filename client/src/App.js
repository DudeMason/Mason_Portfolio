import React from 'react';
import AppLight from './light/AppLight';
import AppDark from './dark/AppDark';
import { BlogConsumer } from './providers/BlogProvider';
import './Index.css'

const App = ({mode}) => (
	<>
		{
			mode === 'white'
			?
			<AppLight/>
			:
			<AppDark/>
		}
	</>
)

const ConnectedApp = () => {
	return (
		<BlogConsumer>
			{
				value => (
					<App mode={value.mode}/>
				)
			}
		</BlogConsumer>
	)
}

export default ConnectedApp;
