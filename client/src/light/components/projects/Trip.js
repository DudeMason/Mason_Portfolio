import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import PicViewer from './TripViewer';

const Trip = () => (
	<div>
		<Header as='h1' inverted>Trip Tracker</Header>
		<Segment align='left' style={{fontSize: 15}}>
			<p>
				At school we had something called a hackathon.
				In a hackathon we form groups of three and attempt
				to make a full scale website within 6 hours.
				<br/>
				The website we made was a trip planner.
				Something that allows you to easily plan trips, destinations, and specific locations.
				At the end of the hackathon the school announces the winner based on the set criteria.
			</p>
			<p>
				Drum roll......... <strong>We won!!</strong>
			</p>
			<p style={{fontSize: 18}} align='center'>
				The project has been launched on its own website.
				<br/>
 				The backend has been removed, however, so data will not be persisted.
				<br/>
				<a href='https://triptrackplan.netlify.app/' target='_blank' rel='noopener noreferrer'>
					<b>-Check it out here-</b>
				</a>
			</p>
			<div className='tripDiv' align='center'>
				<PicViewer/>
			</div>
			<a href="https://github.com/DudeMason/Trip_Tracker" target='_blank' rel="noopener noreferrer">
				<b>-GitHub source code here-</b>
			</a>
		</Segment>
	</div>
)

export default Trip;
