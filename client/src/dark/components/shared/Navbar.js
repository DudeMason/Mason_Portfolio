import React from 'react';
import { Menu, Icon, Dropdown, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { BlogConsumer } from '../../../providers/BlogProvider';

const Navbar = ({setMode, mode}) => (
	<>
		<Menu size='mini' inverted borderless icon='labeled' className='semanticMeh' color={mode}>
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
							<Link to='/blog'>
								<Menu.Item className='navItem'>
									<Icon className='blogIcon' name='sticky note outline' color='orange'/>
									Blog
								</Menu.Item>
							</Link>
						</Grid.Column>

						<Grid.Column>
							<Dropdown icon='bars' item placeholder='‏‏‎ ' className='drop'>
								<Dropdown.Menu>
									<Dropdown.Item icon='lightbulb outline' text='Light Mode' onClick={() => setMode('white')}/>
									<Dropdown item
														text='🎨 ‏‏‎ Colors'>
										<Dropdown.Menu>
											<Dropdown.Item text='Black' name='black' onClick={() => setMode('true')}/>
											<Dropdown.Item text='Grey' name='grey' onClick={() => setMode('grey')}/>
											<Dropdown.Item text='Brown' name='brown' onClick={() => setMode('brown')}/>
											<Dropdown.Item text='Pink' name='pink' onClick={() => setMode('pink')}/>
											<Dropdown.Item text='Purple' name='purple' onClick={() => setMode('purple')}/>
											<Dropdown.Item text='Violet' name='violet' onClick={() => setMode('violet')}/>
											<Dropdown.Item text='Blue' name='blue' onClick={() => setMode('blue')}/>
											<Dropdown.Item text='Teal' name='teal' onClick={() => setMode('teal')}/>
											<Dropdown.Item text='Green' name='green' onClick={() => setMode('green')}/>
											<Dropdown.Item text='Olive' name='olive' onClick={() => setMode('olive')}/>
											<Dropdown.Item text='Yellow' name='yellow' onClick={() => setMode('yellow')}/>
											<Dropdown.Item text='Orange' name='orange' onClick={() => setMode('orange')}/>
											<Dropdown.Item text='Red' name='red' onClick={() => setMode('red')}/>
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

const ConnectedNavbar = () => {
	return (
		<BlogConsumer>
			{
				value => (
					<Navbar
						mode={value.mode}
						setMode={value.setMode}
					/>
				)
			}
		</BlogConsumer>
	)
}

export default ConnectedNavbar;
