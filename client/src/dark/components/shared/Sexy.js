import React, { Component } from 'react'
import { Button, Dimmer, Header, Image } from 'semantic-ui-react'
import MasonDPL from '../../../images/MasonDPL.png';

export default class Sexy extends Component {

	state = {active: false, sexy: undefined, clicked: false}

	handleShow = () => this.setState({active: true})
	handleHide = () => this.setState({active: false, clicked: false})

	render() {
		const {active, sexy, clicked} = this.state

		const content = (
			<div>
				{
					sexy
					?
					<Header as='h2' inverted>
						Don't lie.
						<br/>
						<span role='img' aria-label='cool guy'>😢</span>
					</Header>
					:
					<Header as='h2' inverted>
						Cool.
						<br/>
						<span role='img' aria-label='cool guy'>😎</span>
					</Header>
				}
			</div>
		)

		const handsome = (
			<>
				<Header as='h2' inverted>
					Is this super cool?
				</Header>

				<Button color='green' onClick={() => this.setState({sexy: false, clicked: true})}>Yes</Button>
				<Button color='red' onClick={() => this.setState({sexy: true, clicked: true})}>No</Button>
			</>
		)

		return (
			<>
				{
					clicked
					?
					<Dimmer.Dimmable as={Image} dimmed={active} onMouseLeave={this.handleHide}>
						<Image size='medium' src={MasonDPL} rounded={true}/>
						<Dimmer active={active}>
							{content}
						</Dimmer>
					</Dimmer.Dimmable>
					:
					<Dimmer.Dimmable as={Image} dimmed={active} onClick={this.handleShow} onMouseLeave={this.handleHide}>
						<Image size='medium' src={MasonDPL} rounded={true}/>
						<Dimmer active={active}>
							{handsome}
						</Dimmer>
					</Dimmer.Dimmable>
				}
			</>
		)
	}
}
