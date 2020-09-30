import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class Register extends React.Component {
	state = {email: '', password: '', passwordConfirmation: '',};

	handleSubmit = (e) => {
		e.preventDefault();
		const {email, password, passwordConfirmation} = this.state;
		const {auth: {handleRegister,}, history,} = this.props;

		if (password === passwordConfirmation)
			handleRegister({email, password, passwordConfirmation,}, history);
		else
			alert('Passwords Do Not Match!')
	}

	handleChange = (e) => {
		const {name, value,} = e.target;
		this.setState({[name]: value,});
	}

	render() {
		const {email, password, passwordConfirmation} = this.state;
		const {auth: {handleLogout}} = this.props

		return (
			<Segment basic inverted style={{paddingBottom: 150}}>
				<Header as='h1' textAlign='center'>Register</Header>
				<Form inverted onSubmit={this.handleSubmit}>
					<Form.Input
						label="Email"
						required
						autoFocus
						name='email'
						value={email}
						placeholder='Email'
						onChange={this.handleChange}
					/>
					<Form.Input
						label="Password"
						required
						name='password'
						value={password}
						placeholder='Password'
						type='password'
						onChange={this.handleChange}
					/>
					<Form.Input
						label="Password Confirmation"
						required
						name='passwordConfirmation'
						value={passwordConfirmation}
						placeholder='Password Confirmation'
						type='password'
						onChange={this.handleChange}
					/>
					<Segment textAlign='center' basic>
						<Button primary type='submit'>Submit</Button>
					</Segment>
				</Form>
				<Button color='red' onClick={() => handleLogout(this.props.history)}>Logout</Button>
			</Segment>
		)
	}
}

export default class ConnectedRegister extends React.Component {
	render() {
		return (
			<AuthConsumer>
				{auth => <Register {...this.props} auth={auth}/>}
			</AuthConsumer>
		)
	}
}
