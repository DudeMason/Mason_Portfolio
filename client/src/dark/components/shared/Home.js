import React from 'react';
import { Header, Segment, Grid, Divider } from 'semantic-ui-react';
import Sexy from './Sexy';

const Home = () => (
	<>
		<Segment inverted>
			<h2><u className='wd'>FULL STACK WEB DEVELOPER</u></h2>
			<Divider/>
			<Grid stackable>
				<Grid.Row columns='equal'>

					<Grid.Column verticalAlign='middle' align='left' style={{marginLeft: '34px'}}>
						<Header as='h2' inverted>Welcome,</Header>
						<Header as='h3' inverted>The purpose of this page is to <br/> showcase some of the things I can do.</Header>
						<Header as='h5' inverted>
							This was created solely by me, using React on Rails!
							<br/>
							<i style={{fontSize: 11}}>
								(HTML, CSS, JavaScript, & RUBY)
							</i>
						</Header>
					</Grid.Column>

					<Grid.Column verticalAlign='middle' align='center'>
						<Segment basic placeholder>
							<div>
								<Sexy/>
							</div>
						</Segment>
					</Grid.Column>

				</Grid.Row>
			</Grid>

		</Segment>
		<Segment inverted>

			<Divider hidden/>
			<Grid stackable>
				<Grid.Row columns={2}>

					<Grid.Column align='center'>
						<Header as='h3' inverted>MOTIVATED.</Header>
					</Grid.Column>

					<Grid.Column>
					</Grid.Column>

				</Grid.Row>
				<Grid.Row>

					<Grid.Column align='center'>
						<Header as='h3' inverted>DEDICATED.</Header>
					</Grid.Column>

				</Grid.Row>
				<Grid.Row columns={2}>

					<Grid.Column>
					</Grid.Column>

					<Grid.Column align='center'>
						<Header as='h3' inverted>EARNEST.</Header>
						<br/>
					</Grid.Column>
					<Divider hidden/>

				</Grid.Row>
			</Grid>
		</Segment>
	</>
)

export default Home;
