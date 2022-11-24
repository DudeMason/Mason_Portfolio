import React from 'react';
import { Menu, Icon, Dropdown, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = ({toggleMode, colorChange, color}) => (
	<>
		<Menu size='mini' inverted borderless icon='labeled' className='semanticMeh' color={color}>
			<Grid stackable celled='internally'>
				<Grid.Row columns='equal'>
					<Link to='/'>
						<Menu.Item>
							<Menu.Header as='h2' className='ap'>
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
									<Icon className='aboutIcon' name='user outline' color='green'/>
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
									<Dropdown.Item icon='lightbulb outline' text='Light Mode' onClick={toggleMode}/>
									<Dropdown item
														text='🎨 ‏‏‎ Colors'>
										<Dropdown.Menu>
											<Dropdown.Item text='Black' name='black' onClick={colorChange}/>
											<Dropdown.Item text='Grey' name='grey' onClick={colorChange}/>
											<Dropdown.Item text='Brown' name='brown' onClick={colorChange}/>
											<Dropdown.Item text='Pink' name='pink' onClick={colorChange}/>
											<Dropdown.Item text='Purple' name='purple' onClick={colorChange}/>
											<Dropdown.Item text='Violet' name='violet' onClick={colorChange}/>
											<Dropdown.Item text='Blue' name='blue' onClick={colorChange}/>
											<Dropdown.Item text='Teal' name='teal' onClick={colorChange}/>
											<Dropdown.Item text='Green' name='green' onClick={colorChange}/>
											<Dropdown.Item text='Olive' name='olive' onClick={colorChange}/>
											<Dropdown.Item text='Yellow' name='yellow' onClick={colorChange}/>
											<Dropdown.Item text='Orange' name='orange' onClick={colorChange}/>
											<Dropdown.Item text='Red' name='red' onClick={colorChange}/>
										</Dropdown.Menu>
									</Dropdown>
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
