import React from 'react';
import { Segment } from 'semantic-ui-react';
import PicViewer from './JanitorialViewer';

const Janitorial = () => (
	<div>
		<h2 style={{color: 'white'}}>CEO Janitorial</h2>
		<Segment inverted>
			<p style={{fontSize: 17}}>
				I made this website for a friend who has a custodial services company.
				They needed a simple website where customers could see pictures,
				learn about the services the company offers, and set up appointments.
				<br/>
				<br/>
				The website is live
				<br/>
				<a href='https://www.ceojanitorial.com/' target='_blank' rel="noopener noreferrer">-CEO Janitorial-</a>
			</p>
			<div align='center'>
				Here are some photos.
				<PicViewer/>
			</div>
			<a href="https://github.com/DudeMason/CEO_Janitorial" target='_blank' rel="noopener noreferrer">
				<b>-GitHub source code here-</b>
			</a>
		</Segment>
	</div>
)

export default Janitorial;
