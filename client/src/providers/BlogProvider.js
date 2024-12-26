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
					id: 5,
					title: 'Back to Coding',
					body: 'After about 6 months of running this new tree trimming business, it went very well and was able to recoup my investment and begin to make a profit. Although this business provides plenty for sustaining my family, it definitely puts my health and life at risk on a daily basis. I follow all appropriate and necessary safety measures, of course. My background in rock climbing and mountaineering provide a solid rock of experience towards my safety. But it\'s a fairly stressful environment on ones physical health, not to mention the mental stress of potentially dropping a fat limb on power lines or someone\'s house. After a 6 months of hands-on experience, I\'ve decided it\'s best for me and my family to get back to coding. The work is far easier and a lot less dangerous. Haha. Part of this decision comes from me and another part comes from my wife :), who recently gave birth and would love an extra helper floating around in the background (if I work remote, that is). I believe this decision will be best for me and my family long term (unless AI takes our jobs, I guess. We\'ll see!).',
					date: 'December 25, 2024',
					like: 30,
					dislike: 1,
				},
				{
					id: 4,
					title: 'Starting My Own Business',
					body: 'Home Care Pulse rebranded to Activated Insights. I really loved my job there and I felt like I was making a difference. However, I was feeling a strong pull to start my own business, getting out of the office and into the trees! I left my job there and started a tree trimming business. It all started with me doing my own trees with all the climbing gear I brought from Utah. I got quoted $2,000 for my small oak tree and instead did it myself in about 3 hours. I realized that there was a lot of money to be made in that industry and that I was pretty good at it. It required a good sense of physics and engineering, especially with all the trees over power lines, fences, and homes (some of them being absolutely massive trees). My skills in engineering and problem solving served me greatly in this new endeavor. Plus it was really nice to be out and about in the phyiscal world instead of being couped up behind a computer screen.',
					date: 'July 07, 2024',
					like: 20,
					dislike: 10,
				},
				{
					id: 3,
					title: 'Merger',
					body: 'Pinnacle Quality Insight got acquired by Home Care Pulse. I now work as the Retain™ team lead for the company. I\'ve also been promoted from a junior engineer to a mid-level engineer!',
					date: 'October 05, 2023',
					like: 15,
					dislike: 2,
				},
				{
					id: 2,
					title: 'Backend Removal',
					body: 'Backend services were removed (increased prices, and I\'m not sure if anyone reads these anyways lol), so these are now hard-coded. Hehe. The like and dislike functionality still works, but doesn\'t save. They basically just represent how I feel about it now. Haha.',
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
