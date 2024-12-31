import React from 'react';
import { Header, Image, Grid, Segment, List, Reveal } from 'semantic-ui-react';
import LaptopIcon from '../../../images/LaptopIcon.png';
import MasonDev from '../../../images/MasonDev.png';
import QrIcon from '../../../images/QrIcon.png';
import { Link } from 'react-router-dom';
import CartIcon from '../../../images/CartIcon.png';
import CardIcon from '../../../images/CardIcon.png';
import MapIcon from '../../../images/MapIcon.png';
import Janitor from '../../../images/Janitor.png';
import AppEst from '../../../images/AppEst.png';
import GithubIcon from '../../../images/GithubIcon.png';
import Bass from '../../../images/Bass.png';
import Counter from '../../../images/Counter.png';
import LaravelContact from '../../../images/LaravelContact.png';
import RubyContact from '../../../images/RubyContact.png';

const Projects = () => (
	<div>
		<div align='center'>
			<Segment compact vertical basic placeholder style={{minHeight: '11rem'}}>
				<Reveal animated='fade'>
					<Reveal.Content visible>
						<Image style={{width: 120, marginLeft: 8, marginTop: 1}} src={LaptopIcon} alt='Laptop Icon'/>
					</Reveal.Content>
					<Reveal.Content hidden>
						<Image style={{width: 130}} src={MasonDev} target='_blank'/>
					</Reveal.Content>
				</Reveal>
			</Segment>
		</div>

		<div>
			<Segment textAlign='center' inverted>
				<Header as='h2' inverted textAlign='center'>
					My Projects
				</Header>

				<List animated verticalAlign='middle' size='big' relaxed='very' divided>

					<List.Item href="https://github.com/DudeMason" target='_blank'>
						<Image size='mini' src={GithubIcon} alt='GitHub Icon'/>
						<List.Content>
							<List.Header style={{color: 'white'}}>Check My GitHub!</List.Header>
						</List.Content>
					</List.Item>

				</List>
			</Segment>

			<Segment inverted>
				<Grid columns={2} stackable>
					<Grid.Row>
						<Grid.Column>

							<Link to='/store'>
								<List animated verticalAlign='middle' align='center' relaxed='very' size='big'>

									<List.Item>
										<Image size='mini' src={CartIcon} alt='Cart Icon'/>
										<List.Content>
											<List.Header style={{color: 'white'}}>Ruby Store</List.Header>
										</List.Content>
									</List.Item>

								</List>
							</Link>

						</Grid.Column>
						<Grid.Column>

							<Link to='/appEst'>
								<List animated verticalAlign='middle' align='center' relaxed='very' size='big'>

									<List.Item>
										<Image size='mini' src={AppEst} alt='App Estimator'/>
										<List.Content>
											<List.Header style={{color: 'white'}}>Application Estimator</List.Header>
										</List.Content>
									</List.Item>

								</List>
							</Link>

						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>

							<Link to='/casino'>
								<List animated verticalAlign='middle' align='center' relaxed='very' size='big'>

									<List.Item>
										<Image size='mini' src={CardIcon} alt='Card Icon'/>
										<List.Content>
											<List.Header style={{color: 'white'}}>Small Ruby Casino</List.Header>
										</List.Content>
									</List.Item>

								</List>
							</Link>

						</Grid.Column>
						<Grid.Column>

							<Link to='/trip'>
								<List animated verticalAlign='middle' align='center' relaxed='very' size='big'>

									<List.Item>
										<Image size='mini' src={MapIcon} alt='Map Icon'/>
										<List.Content>
											<List.Header style={{color: 'white'}}>Trip Tracker</List.Header>
										</List.Content>
									</List.Item>

								</List>
							</Link>

						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>

							<Link to='/qrcode'>
								<List animated verticalAlign='middle' align='center' relaxed='very' size='big'>

									<List.Item>
										<Image size='mini' src={QrIcon} alt='QR Icon'/>
										<List.Content>
											<List.Header style={{color: 'white'}}>QR Code Generator</List.Header>
										</List.Content>
									</List.Item>

								</List>
							</Link>

						</Grid.Column>
						<Grid.Column>

							<Link to='/janitorial'>
								<List animated verticalAlign='middle' align='center' relaxed='very' size='big'>

									<List.Item>
										<Image size='mini' src={Janitor} alt='Mop & Bucket'/>
										<List.Content>
											<List.Header style={{color: 'white'}}>CEO Janitorial</List.Header>
										</List.Content>
									</List.Item>

								</List>
							</Link>

						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<a href='https://simplereactcounter.netlify.app' target='_blank' rel='noopener noreferrer'>
								<List animated verticalAlign='middle' align='center' relaxed='very' size='big'>
									<List.Item>
										<Image size='mini' src={Counter} alt='Counter'/>
										<List.Content>
											<List.Header style={{color: 'white'}}>Simple React Counter</List.Header>
										</List.Content>
									</List.Item>

								</List>
							</a>

						</Grid.Column>
						<Grid.Column>

							<a href='https://stringthing.netlify.app' target='_blank' rel='noopener noreferrer'>
								<List animated verticalAlign='middle' align='center' relaxed='very' size='big'>

									<List.Item>
										<Image size='mini' src={Bass} alt='Music'/>
										<List.Content>
											<List.Header style={{color: 'white'}}>String Thing</List.Header>
										</List.Content>
									</List.Item>

								</List>
							</a>

						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>

							<a href='https://repl.it/@MasonMan/Ruby-Contact-List' target='_blank' rel='noopener noreferrer'>
								<List animated verticalAlign='middle' align='center' relaxed='very' size='big'>

									<List.Item>
										<Image size='mini' src={RubyContact} alt='Counter'/>
										<List.Content>
											<List.Header style={{color: 'white'}}>Ruby Contact List</List.Header>
										</List.Content>
									</List.Item>

								</List>
							</a>

						</Grid.Column>
						<Grid.Column>
							<a href='https://replit.com/@MasonMan/PHP-Contact-List' target='_blank' rel='noopener noreferrer'>
								<List animated verticalAlign='middle' align='center' relaxed='very' size='big'>
									<List.Item>
										<Image size='mini' src={LaravelContact} alt='Music'/>
										<List.Content>
											<List.Header style={{color: 'white'}}>PHP Contact List</List.Header>
										</List.Content>
									</List.Item>
								</List>
							</a>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</div>
	</div>
)

export default Projects;
