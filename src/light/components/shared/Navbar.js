import React from 'react';
import { Menu, Icon, Dropdown, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = ({toggleMode}) => (
	<>
		<Menu size='mini' borderless icon='labeled' className='semanticMeh'>
			<Grid stackable celled='internally'>
				<Grid.Row columns='equal'>
					<Link to='/'>
						<Menu.Item>
							<Menu.Header as='h2' className='a'>
								<i>Mason Eyre</i>
							</Menu.Header>
						</Menu.Item>
					</Link>

					<Menu.Menu position='right'>
						<Grid.Column>
							<Link to='/'>
								<Menu.Item className='navItem'>
									<Icon className='homeIcon' name='medium m' color='blue' alt='Home'/>
									Home
								</Menu.Item>
							</Link>
						</Grid.Column>

						<Grid.Column>
							<Link to='/projects'>
								<Menu.Item className='navItem'>
									<Icon name='computer' className='computerIcon'/>
									Projects
								</Menu.Item>
							</Link>
						</Grid.Column>

						<Grid.Column>
							<Link to='/about'>
								<Menu.Item className='navItem'>
									<Icon className='aboutIcon' name='user' color='green'/>
									About Me
								</Menu.Item>
							</Link>
						</Grid.Column>

						<Grid.Column>
							<Link to='/contact'>
								<Menu.Item className='navItem'>
									<Icon className='contactIcon' name='at' color='violet'/>
									Contact
								</Menu.Item>
							</Link>
						</Grid.Column>

						<Grid.Column>
							<Dropdown icon='bars' item placeholder='‏‏‎ ' className='drop'>
								<Dropdown.Menu>
									<Dropdown.Item icon='lightbulb' text='Dark Mode' onClick={toggleMode}/>
								</Dropdown.Menu>
							</Dropdown>
						</Grid.Column>
					</Menu.Menu>
				</Grid.Row>
			</Grid>
		</Menu>
	</>
)

export default Navbar;
