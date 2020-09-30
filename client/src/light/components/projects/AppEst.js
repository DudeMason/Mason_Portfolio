import React from 'react';
import { Segment } from 'semantic-ui-react';
import PicViewer from '../../../dark/components/projects/AppEstViewer';

const AppEst = () => (
	<div>
		<h2 style={{color: 'white'}}>Application Estimator</h2>
		<Segment>
			<p style={{fontSize: 17}}>
				The app estimator is a webpage made for DevPoint Studios.
				<br/>
				It's designed to give an estimate for people's website/app ideas.
				This tool helps DevPoint Studios handle customer quoting more effectively.
				<br/>
				This app was made by me and three other students.
				<br/>
				<br/>
				Check out the website here
			</p>
			<a href='https://appestimation.herokuapp.com/' target='_blank' rel="noopener noreferrer" style={{fontSize: 18}}>
				-App Estimator-
			</a>
			<p style={{fontSize: 12}}>
				We're pretty proud of this!
			</p>
			<div className='tripDiv' align='center'>
				<PicViewer/>
			</div>
			<a href="https://github.com/3mpirical/Final_Project" target='_blank' rel="noopener noreferrer">
				<b>-GitHub source code here-</b>
			</a>
		</Segment>
	</div>
)

export default AppEst;
