import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import PicViewer from './AppEstViewer';

const AppEst = () => (
	<div>
		<Header as='h1' inverted>Application Estimator</Header>
		<Segment inverted>
			<p style={{fontSize: 17}}>
				The app estimator is a webpage made for DevPoint Studios.
				<br/>
				It's designed to give an estimate for people's website/app ideas.
				This tool helps DevPoint Studios handle customer quoting more effectively.
				<br/>
				This app was made by me and three other students.
				<br/>
				<br/>
			</p>
			<p style={{fontSize: 12}}>
				We were pretty proud of this!
			</p>
			<p style={{fontSize: 16}} align='center'>
				I don't own this project, so I can't really get it hosted without highjacking it. Haha.
				<br/>
				The link to the source code is below.
			</p>
			<div align='center'>
				<PicViewer/>
			</div>
			<a href="https://github.com/3mpirical/Final_Project" target='_blank' rel="noopener noreferrer">
				<b>-GitHub source code here-</b>
			</a>
		</Segment>
	</div>
)

export default AppEst;
