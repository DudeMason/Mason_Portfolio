import React from 'react';
import { Segment, Divider, Header } from 'semantic-ui-react';

const Casino = () => (
	<div>
		<Header as='h1' inverted>Ruby Casino</Header>
		<Segment inverted textAlign='center' style={{fontSize: 17}}>
			<p style={{fontSize: 20}}>This is an app that must be run through a terminal using Ruby.</p>
			<Divider invisible='true'/>
			<p>You can click
				<a href='https://repl.it/@MasonMan/Ruby-Casino' target='_blank' rel="noopener noreferrer">
					-this link-
				</a>
				to run it in your browser. (Just hit "run" when you get there)
				<br/>
				Or you can download
				<a href='https://github.com/DudeMason/Casino' target='_blank' rel="noopener noreferrer">
					-the file-
				</a>
				yourself from GitHub to run it in your own terminal.
			</p>
			<h3>Description:</h3>
			<p>
				The Ruby Casino is a simple casino app that allows you to play three different games.
				<br/>
				You can play <u>slots</u>, <u>high/low</u>, and <u>guess-the-total</u>!
				<br/>
				This was for a school project. It's a fairly simple app that we made in a couple days.
			</p>
		</Segment>
	</div>
)

export default Casino;
