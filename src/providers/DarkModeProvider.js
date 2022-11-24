import React, { Component } from 'react';

export const DarkModeContext = React.createContext(undefined, undefined);
export const DarkModeConsumer = DarkModeContext.Consumer;

export default class DarkModeProvider extends Component {
	state = {color: 'black', darkMode: true}

	toggleMode = () => {
		this.setState({darkMode: !this.state.darkMode})
	}

	colorChange = (e, {name}) => this.setState({color: name})

	render() {
		return (
			<DarkModeContext.Provider value={{
				...this.state,
				toggleMode: this.toggleMode,
				colorChange: this.colorChange
			}}>
				{this.props.children}
			</DarkModeContext.Provider>
		)
	}
}
