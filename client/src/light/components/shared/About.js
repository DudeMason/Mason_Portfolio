import { Header, Tab, Button, Progress, Divider, Image, Grid,
	Segment, Container, Popup, List, Modal } from 'semantic-ui-react';
import React from 'react';
import Masooon from '../../../images/Masooon.png';
import DevPoint from '../../../images/Beaker.png';
import Worst from '../../../images/Worst.png';
import Belaying from '../../../images/Belaying.png';
import Moab from '../../../images/Moab.png';
import FamBam from '../../../images/FamBam.png';
import Fam from '../../../images/Fam.png';
import Gallup1 from '../../../images/Gallup1.png';
import Gallup2 from '../../../images/Gallup2.png';
import Gallup3 from '../../../images/Gallup3.png';
import Wall from '../../../images/Wall.png';

const panes = [
	{
		menuItem: 'Life', render: () =>
			<Tab.Pane align='center' attached={false}>
				<div>
					<Header as='h2'>What's my story?</Header>
					<Divider/>
					<Grid stackable>
						<Grid.Row columns='equal'>
							<Grid.Column style={{marginLeft: '34px'}}>
								<Container textAlign='justified'>
									<p style={{fontSize: 16}}>
										I struggled for quite some time to find a career path
										that fits my particular skills and abilities;
										a career path that I could find joy and satisfaction in.
										<p>
											I finally found that path in coding!
										</p>
										I took a dev course and instantly fell in love.
										<br/>
										It was a no-brainer that this career fits my natural skill set.
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
				</div>
			</Tab.Pane>
	},
	{
		menuItem: 'Attributes', render: () =>
			<Tab.Pane align='center' attached={false}>
				<div style={{paddingBottom: 75}}>
					<Header as='h2'>
						These are a few of my natural attributes.
					</Header>
					<p style={{fontSize: 17}}><u>Communication</u> - <u>Problem Solving</u> - <u>Momentum Creation</u></p>
					<p style={{fontSize: 17}}><u>Inclusion of Others</u> - <u>Winning Others Over</u></p>
					<Modal closeIcon className='modals' style={{marginTop: 50, padding: 0}}
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
					<Header as='h3'>
						If you would like to learn more about each,
						<br/>this document goes into further detail.
					</Header>
				</div>
			</Tab.Pane>
	},
	{
		menuItem: 'Skills', render: () =>
			<Tab.Pane attached={false}>
				<Header as='h1' align='center'>My Skills</Header>
				<Container>
					<p style={{fontSize: 18, textAlign: 'center'}}>
						Although this website somewhat shows what I can do,
						<br/>this section further illustrates with some pretty bars!
					</p>
					<p style={{fontSize: 16, textAlign: 'center'}}>
						These bars relate to eachother as they relate to me.
						<br/>
						They do not represent my skills compared to the industry.
						<br/>
						I still consider myself quite the newb!
					</p>
					<br/>
					<p>Laravel (PHP)</p>
					<Progress percent={75} indicating size='tiny'/>
					<p>Ruby on Rails</p>
					<Progress percent={80} indicating size='tiny'/>
					<p>React.js</p>
					<Progress percent={85} indicating size='tiny'/>
					<p>HTML</p>
					<Progress percent={70} indicating size='tiny'/>
					<p>CSS</p>
					<Progress percent={57} indicating size='tiny'/>
					<p>Cooking <i style={{fontSize: 7}}>hehe</i></p>
					<Progress percent={10} indicating size='tiny'/>
					<p>Spanish</p>
					<Progress percent={95} indicating size='tiny'/>
				</Container>
			</Tab.Pane>
	},
	{
		menuItem: 'Smarts', render: () =>
			<Tab.Pane align='center' attached={false}>
				<div style={{paddingBottom: 50}}>
					<Header align='center' as='h2'>
						I graduated from DevPoint Labs
					</Header>
					<p style={{fontSize: 17}}>
						DevPoint Labs is a <u>web development</u> school that operates through the University of Utah.
					</p>
					<Divider/>
					<Image rounded width='100' src={DevPoint}/>
					<Divider/>
					<Container textAlign='center'>
						<p style={{fontSize: 17}}>The languages I've been working with recently are Ruby, JavaScript, HTML, and
							CSS.</p>
					</Container>
				</div>
			</Tab.Pane>
	},
	{
		menuItem: 'Hobbies', render: () =>
			<Tab.Pane attached={false} textAlign='center'>
				<div style={{paddingBottom: 75}} align='center'>
					<Header align='center' as='h2'>
						Click one to see more!
					</Header>
					<Divider/>
					<br/>
					<Grid stackable textAlign='center'>
						<Modal closeIcon className='modals' style={{marginTop: 50, padding: 0}}
									 trigger={<Button size='massive' compact color='facebook'>Family</Button>}>
							<Modal.Header align='center'>
								Family is my purpose in life.
								<Divider/>
								<Container textAlign='center'>
									<p style={{fontSize: 16}}>
										My family is very close. We love to spend time together!
									</p>
								</Container>
							</Modal.Header>
							<Modal.Content>
								<Grid columns={1} align='center'>
									<Grid.Column>
										<Segment compact>
											<Popup content="This is my family when I was a wee lad."
														 trigger={<Image fluid src={FamBam}/>}
														 position='left center'/>
										</Segment>

										<Segment compact>
											<Popup content="This is my family now."
														 trigger={<Image fluid src={Fam}/>}
														 position='left center'/>
										</Segment>
									</Grid.Column>
								</Grid>
							</Modal.Content>
						</Modal>

						<Modal closeIcon className='modals' style={{marginTop: 50, padding: 0}}
									 trigger={<Button size='huge' compact color='facebook'>Rock Climbing</Button>}>
							<Modal.Header align='center'>
								I love rock climbing!
								<Divider/>
								<Header as='h3'>Routes are rated from 5.6 to around 5.15.</Header>
								<Header as='h3'>I generally climb in the 5.11 range.</Header>
							</Modal.Header>
							<Modal.Content>
								<Grid columns={2} align='center'>

									<Grid.Column>
										<List>

											<Segment compact>
												<List.Item>
													<Image fluid src={Moab}/>
												</List.Item>
											</Segment>

											<Segment compact>
												<List.Item>
													<Popup
														content="This was the hardest climb I've ever done. It's only a 10c (which I still don't believe) It's ALL feet and basically no hands. The only support there is are little dimples and pimples on a seemingly smooth wall. My feet were slipping left and right. BUT, I finished it! Maybe it IS a 10c but mentally it was a 12c for me! And yes, that is me on the wall :)"
														trigger={<Image fluid src={Worst}/>}
														position='left center'/>
												</List.Item>
											</Segment>

										</List>
									</Grid.Column>
									<Grid.Column>
										<List>

											<Segment compact>
												<List.Item>
													<Image fluid src={Belaying}/>
												</List.Item>
											</Segment>

											<Segment compact>
												<List.Item>
													<Image fluid src={Wall}/>
												</List.Item>
											</Segment>

										</List>
									</Grid.Column>

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

		<Tab panes={panes} menu={{pointing: true, compact: true, size: 'small'}}/>
	</div>
)
export default About;
