import React from 'react';
import {Image, List, Header, Icon, Grid, Reveal, Segment} from 'semantic-ui-react';
import Smiley from '../../../images/Smiley.png';
import GithubIcon from '../../../images/GithubIcon.png';
import LinkedinIcon from '../../../images/LinkedinIcon.png';
import InstaIcon from '../../../images/InstaIcon.png';
import AdminIcon from '../../../images/AdminIcon.png';
import GmailIcon from '../../../images/GmailIcon.png';

const Contact = () => (

  <div>
    <div align='center'>
      <Segment compact vertical>
        <Reveal animated='slide up'>
          <Reveal.Content visible>
            <Icon.Group size='large'>
              <Image style={{width: 117}} src={AdminIcon} alt='https://icons8.com/icons/set/administrator-male'/>
              <Icon corner name='add' color='green'/>
            </Icon.Group>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image rounded style={{width: 117}} src={Smiley}/>
          </Reveal.Content>
        </Reveal>
      </Segment>
    </div>

    <div>
      <Segment textAlign="center">
        <Header as='h2' textAlign='center'>
          Feel Free to Contact Me
        </Header>
        <List selection verticalAlign='middle' size='big' relaxed='very' divided>

          <List.Item href="mailto:mason.deyre@gmail.com" target='_blank'>
            <Image size='mini' src={GmailIcon} alt='https://icons8.com/icons/set/gmail'/>
            <List.Content>
              <List.Header>mason.deyre@gmail.com</List.Header>
            </List.Content>
          </List.Item>

        </List>
      </Segment>
      <Segment>
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column>
              <List selection align='center' verticalAlign='middle' size='big' relaxed='very'>

                <List.Item href="https://github.com/DudeMason" target='_blank'>
                  <Image avatar src={GithubIcon} alt='https://icons8.com/icons/set/github' />
                  <List.Content>
                    <List.Header>GitHub</List.Header>
                  </List.Content>
                </List.Item>

              </List>
            </Grid.Column>
            <Grid.Column>
              <List selection verticalAlign='middle' size='big' relaxed='very' align='center'>

                <List.Item href="https://www.linkedin.com/in/masoneyre" target='_blank'>
                  <Image size='mini' src={LinkedinIcon} alt='https://icons8.com/icons/set/linkedin'/>
                  <List.Content>
                    <List.Header>LinkedIn</List.Header>
                  </List.Content>
                </List.Item>

              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <List selection verticalAlign='middle' size='big' relaxed='very' align='center'>

                <List.Item href="https://www.facebook.com/mason.deyre" target='_blank'>
                  <Image avatar src="https://img.icons8.com/dusk/64/000000/facebook-new--v2.png" />
                  <List.Content>
                    <List.Header>Facebook</List.Header>
                  </List.Content>
                </List.Item>

              </List>
            </Grid.Column>
            <Grid.Column>
              <List selection verticalAlign='middle' size='big' relaxed='very' align='center'>

                <List.Item href="https://www.instagram.com/masoneyre/" target='_blank'>
                  <Image size='mini' src={InstaIcon} alt="https://icons8.com/icons/set/instagram-new"/>
                  <List.Content>
                    <List.Header>Instagram</List.Header>
                  </List.Content>
                </List.Item>

              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  </div>
)


export default Contact;
