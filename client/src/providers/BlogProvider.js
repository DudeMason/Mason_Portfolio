import React, { Component } from 'react';

export const BlogContext = React.createContext(undefined, undefined);
export const BlogConsumer = BlogContext.Consumer;

export default class BlogProvider extends Component {
	cookieMode = document.cookie === '' ? 'black' : document.cookie
	state = {entries: [], mode: this.cookieMode, order: false}

	componentDidMount() {
		this.setState({
			entries: [
				{
					id: 3,
					title: 'Merger',
					body: 'Pinnacle Quality Insight got acquired by Home Care Pulse. I now work as the Retain™ team lead for the company. I\'m no longer a junior engineer, but have since been promoted to a mid-level engineer!',
					date: 'October 05, 2023',
					like: 15,
					dislike: 0,
				},
				{
					id: 2,
					title: 'Backend Removal',
					body: 'Backend services were removed (increased prices), so these are now hard-coded. Hehe',
					date: 'March 25, 2020',
					like: 11,
					dislike: 4,
				},
				{
					id: 1,
					title: 'Graduated',
					body: 'I graduated from DevPoint Labs this month and I already landed my first job as a Junior Software Engineer at Pinnacle Quality Insight! I\'m stoked for my journey and progress :)',
					date: 'February 25, 2020',
					like: 28,
					dislike: 1,
				}
			]
		})
	}

	toggleOrder = () => {
		this.setState({order: !this.state.order})
	}

	// This should be moved to a separate provider.
	setMode = (mode) => {
		document.cookie = mode
		this.setState({mode: mode})
	}

	render() {
		return (
			<BlogContext.Provider value={{
				...this.state,
				setMode: this.setMode,
				toggleOrder: this.toggleOrder
			}}>
				{this.props.children}
			</BlogContext.Provider>
		)
	}
}
