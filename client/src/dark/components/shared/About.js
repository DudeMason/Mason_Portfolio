import { Header, Tab, Button, Progress, Divider, Image, Grid,
	Segment, Container, Popup, Modal } from 'semantic-ui-react';
import React from 'react';
import Masooon from '../../../images/Masooon.png';
import DevPoint from '../../../images/Beaker.png';
import MasonGrad from '../../../images/MasonGrad.png';
import MasonProject from '../../../images/MasonProject.png';
import Worst from '../../../images/Worst.png';
import BackLook from '../../../images/BackLook.png'
import Belaying from '../../../images/Belaying.png';
import Moab from '../../../images/Moab.png';
import FamBam from '../../../images/FamBam.png';
import FamilyThank from '../../../images/FamilyThank.png';
import Fam from '../../../images/Fam.png';
import FamilyTemple from '../../../images/FamilyTemple.png';
import Focused from '../../../images/Focused.png';
import Gallup1 from '../../../images/Gallup1.png';
import Gallup2 from '../../../images/Gallup2.png';
import Gallup3 from '../../../images/Gallup3.png';
import GothicGirlsClimb from '../../../images/GothicGirlsClimb.png';
import Searching from '../../../images/Searching.png';
import Victory from '../../../images/Victory.png';

const panes = [
	{
		menuItem: 'Life', render: () =>
			<Tab.Pane align='center' attached={false} inverted>
				<Header as='h2'>What's my story?</Header>
				<Divider/>
				<Grid stackable>
					<Grid.Row columns='equal'>
						<Grid.Column style={{marginLeft: '34px'}}>
							<Container textAlign='justified'>
								<p style={{fontSize: 16}}>
									I searched for quite some time to find a career path
									that fits my particular skills and abilities;
									a career path that I could find joy and satisfaction in.
									<p>
										I finally found that path in coding!
									</p>
									I took a dev course and instantly fell in love.
									<br/>
									It was a no-brainer that this career fits my natural skills and talents.
								</p>
								<p style={{fontSize: 21}}>
									In this section of my website
									you can learn about some of my
									qualities, interests, and abilites!
								</p>
							</Container>
						</Grid.Column>
						<Grid.Column>
							<Image width='300' src={Masooon}/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Tab.Pane>
	},
	{
		menuItem: 'Attributes', render: () =>
			<Tab.Pane align='center' attached={false} inverted>
				<div style={{paddingBottom: 70}}>
					<Header as='h2' style={{color: 'white'}}>
						These are a few of my natural attributes.
					</Header>
					<p style={{fontSize: 17}}><u>Communication</u> - <u>Problem Solving</u> - <u>Momentum Creation</u></p>
					<p style={{fontSize: 17}}><u>Inclusion of Others</u> - <u>Winning Others Over</u></p>
					<Modal basic closeIcon className='modals'
								 trigger={<Button size='big' compact color='facebook'>Attributes Report</Button>}>
						<Modal.Header align='center'>
							Mason's Gallup Report
						</Modal.Header>
						<Modal.Content>
							<Image src={Gallup1}/>
							<Image src={Gallup2}/>
							<Image src={Gallup3}/>
						</Modal.Content>
					</Modal>
					<Header as='h3' style={{color: 'white'}}>
						If you would like to learn more about each,
						<br/>this document goes into further detail.
					</Header>
				</div>
			</Tab.Pane>
	},
	{
		menuItem: 'Skills', render: () =>
			<Tab.Pane attached={false} inverted>
				<Header as='h2' align='center'>My Skills</Header>
				<Container>
					<p style={{fontSize: 16, textAlign: 'center'}}>
						Although this website somewhat shows a little of what I can do,
						<br/>
						this section further illustrates it with some pretty bars!
					</p>
					<p style={{fontSize: 16, textAlign: 'center'}}>
						These bars relate to eachother as they relate to me.
						<br/>
						They don't necessarily represent my skills compared to the industry.
						<br/>
						I still consider myself as having tons to learn!
					</p>
					<br/>
					<p>Laravel (PHP)</p>
					<Progress percent={85} indicating size='tiny'/>
					<p>Ruby on Rails</p>
					<Progress percent={72} indicating size='tiny'/>
					<p>React.js</p>
					<Progress percent={75} indicating size='tiny'/>
					<p>HTML</p>
					<Progress percent={80} indicating size='tiny'/>
					<p>CSS</p>
					<Progress percent={72} indicating size='tiny'/>
					<p>SQL</p>
					<Progress percent={82} indicating size='tiny'/>
					<p>Training Llamas</p>
					<Progress percent={10} indicating size='tiny'/>
					<p>Spanish</p>
					<Progress percent={95} indicating size='tiny'/>
				</Container>
			</Tab.Pane>
	},
	{
		menuItem: 'Smarts', render: () =>
			<Tab.Pane align='center' attached={false} inverted>
				<div style={{paddingBottom: 90}}>
					<Header align='center' as='h2' style={{color: 'white'}}>
						I graduated from DevPoint Labs
					</Header>
					<p style={{fontSize: 17}}>
						DevPoint Labs is a <u>web development</u> school that operates through the University of Utah.
					</p>
					<Image rounded width='100' src={DevPoint}/>
					<Divider/>
					<Grid columns={2} stackable>
						<Grid.Column>
							<Image rounded width='250' src={MasonGrad}/>
						</Grid.Column>
						<Grid.Column style={{alignContent: 'center'}}>
							<Image rounded width='500' src={MasonProject}/>
						</Grid.Column>
					</Grid>
					<Divider/>
					<Container textAlign='center'>
						<p style={{fontSize: 17}}>The languages I studied there are Ruby, JavaScript, HTML, CSS, and PostgreSQL.</p>
					</Container>
				</div>
			</Tab.Pane>
	},
	{
		menuItem: 'Hobbies', render: () =>
			<Tab.Pane attached={false} inverted>
				<div style={{paddingBottom: 75}}>
					<Header align='center' as='h2' style={{color: 'white'}}>
						Click one to see more!
					</Header>
					<Divider/>
					<br/>
					<Grid stackable textAlign='center'>
						<Modal
							basic
							closeIcon
							className='modals'
							trigger={<Button size='massive' compact inverted basic color='blue'>Family</Button>}
						>
							<Modal.Header align='center'>
								Family is my purpose in life!
								<Divider/>
								<Container textAlign='center'>
									<p style={{fontSize: 16}}>
										My family is very close. We love to spend time together!
									</p>
								</Container>
							</Modal.Header>
							<Modal.Content>
								<Grid columns={2} stackable>
								  <Grid.Row>
										<Grid.Column>
											<Segment compact>
												<Popup
													content='This is my family when I was a wee lad.'
													trigger={<Image fluid src={FamBam}/>}
													position='left center'
												/>
											</Segment>
										</Grid.Column>
										<Grid.Column>
											<Segment compact>
												<Popup
													content='This is my family now (minus a few recent additions).'
													trigger={<Image fluid src={Fam}/>}
													position='right center'
												/>
						 				  </Segment>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row>
										<Grid.Column>
											<Segment compact>
												<Popup
													content='This is my own family unit (with more to come!).'
													trigger={<Image fluid src={FamilyThank}/>}
													position='left center'
												/>
											</Segment>
										</Grid.Column>
										<Grid.Column>
											<Segment compact>
												<Popup
													content='Visiting the House of the Lord, where families are made eternal.'
													trigger={<Image fluid src={FamilyTemple}/>}
													position='right center'
												/>
					 				  	</Segment>
								  	</Grid.Column>
									</Grid.Row>
								</Grid>
							</Modal.Content>
						</Modal>

						<Modal
							basic
							closeIcon
							className='modals'
							trigger={<Button size='huge' compact inverted basic color='blue'>Rock Climbing</Button>}
						>
							<Modal.Header align='center'>
								I love rock climbing!
								<Divider/>
								<Header as='h3' inverted>Routes are rated from 5.6 to around 5.15.</Header>
								<Header as='h3' inverted>I generally climb in the 5.11 range.</Header>
							</Modal.Header>
							<Modal.Content>
								<Grid columns={2} stackable>
									<Grid.Row>
										<Grid.Column>
											<Segment compact>
												<Image fluid src={Moab}/>
											</Segment>
										</Grid.Column>

										<Grid.Column>
											<Segment compact>
												<Image fluid src={Belaying}/>
											</Segment>
										</Grid.Column>
									</Grid.Row>

									<Grid.Row>
										<Grid.Column>
											<Segment compact>
												<Image fluid src={Victory}/>
											</Segment>
										</Grid.Column>

										<Grid.Column>
											<Segment compact>
												<Image fluid src={Focused}/>
											</Segment>
										</Grid.Column>
									</Grid.Row>

									<Grid.Row>
										<Grid.Column>
											<Segment compact>
												<Image fluid src={Searching}/>
											</Segment>
										</Grid.Column>

										<Grid.Column>
											<Segment compact>
												<Image fluid src={BackLook}/>
											</Segment>
										</Grid.Column>
									</Grid.Row>

									<Grid.Row>
										<Grid.Column>
											<Segment compact>
												<Popup
													content="This climb has a sketchy ending where it changes from slab to an overhang. While you dangle from a massive arms-only overhang, your last-clipped bolt is on the slab. If you fall during that transition, you're hitting the slab, hard."
													trigger={<Image fluid src={GothicGirlsClimb}/>}
													position='left center'
												/>
											</Segment>
										</Grid.Column>

										<Grid.Column>
											<Segment compact>
												<Popup
													content="This was the hardest climb I've ever done. It's only a 10c (which I still don't believe) It's ALL feet and basically no hands. The only support there is are little dimples and pimples on a seemingly smooth wall. My feet were slipping left and right. BUT, I finished it! Maybe it IS a 10c but mentally it was a 12c for me! And yes, that is me on the wall :)"
													trigger={<Image fluid src={Worst}/>}
													position='right center'
												/>
											</Segment>
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Modal.Content>
						</Modal>
					</Grid>
				</div>
			</Tab.Pane>
	}
]

const About = () => (
	<div>
		<Header as='h2' inverted>
			A Little About Myself
		</Header>

		<Tab panes={panes} menu={{pointing: true, inverted: true, size: 'small', compact: true}}/>
	</div>
)

export default About;
