import React from 'react';
import { Image, List, Header, Icon, Grid, Reveal, Segment } from 'semantic-ui-react';
import Smiley from '../../../images/Smiley.png';
import LinkedinIcon from '../../../images/LinkedinIcon.png';
import GithubIcon from '../../../images/GithubIcon.png';
import AdminIcon from '../../../images/AdminIcon.png';
import AppleMailIcon from '../../../images/AppleMailIcon.png';

const Contact = () => (
	<div>
		<div align='center'>
			<Segment compact vertical basic placeholder style={{minHeight: '11rem'}}>
				<Reveal animated='slide up'>
					<Reveal.Content visible>
						<Icon.Group size='large'>
							<Image style={{width: 117}} src={AdminIcon} alt='https://icons8.com/icons/set/administrator-male'/>
							<Icon corner name='add' color='green'/>
						</Icon.Group>
					</Reveal.Content>
					<Reveal.Content hidden>
						<Image rounded style={{width: 117}} src={Smiley}/>
					</Reveal.Content>
				</Reveal>
			</Segment>
		</div>

		<div>
			<Segment textAlign="center" inverted>
				<Header inverted as='h2' textAlign='center'>
					Feel Free to Contact Me
				</Header>
				<List animated verticalAlign='middle' size='big' relaxed='very' divided>

					<List.Item href="mailto:mason.eyre@icloud.com" target='_blank'>
						<Image size='mini' src={AppleMailIcon} alt='https://img.icons8.com/dusk/64/000000/apple-mail.png'/>
						<List.Content>
							<List.Header style={{color: 'white'}}>mason.eyre@icloud.com</List.Header>
						</List.Content>
					</List.Item>

				</List>
			</Segment>
			<Segment inverted>
				<Grid columns={2} stackable>
					<Grid.Row>
						<Grid.Column>
							<List animated align='center' verticalAlign='middle' size='big' relaxed='very'>

								<List.Item href="https://github.com/DudeMason" target='_blank'>
									<Image avatar src={GithubIcon} alt='https://icons8.com/icons/set/github'/>
									<List.Content>
										<List.Header style={{color: 'white'}}>GitHub</List.Header>
									</List.Content>
								</List.Item>

							</List>
						</Grid.Column>
						<Grid.Column>
							<List animated verticalAlign='middle' size='big' relaxed='very' align='center'>

								<List.Item href="https://www.linkedin.com/in/masoneyre" target='_blank'>
									<Image size='mini' src={LinkedinIcon} alt='https://icons8.com/icons/set/linkedin'/>
									<List.Content>
										<List.Header style={{color: 'white'}}>LinkedIn</List.Header>
									</List.Content>
								</List.Item>

							</List>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</div>
	</div>
)

export default Contact;
