import React from 'react';
import {Header, Tab, Button, Progress, Divider, Image, Grid, Segment, Container, Popup, List, Modal} from 'semantic-ui-react';
import Masooon from '../../../images/Masooon.png';
import DevPoint from '../../../images/Beaker.png';
import Wall from '../../../images/Wall.png';
import Worst from '../../../images/Worst.png';
import Belaying from '../../../images/Belaying.png';
import Moab from '../../../images/Moab.png';
import FamBam from '../../../images/FamBam.png';
import Fam from '../../../images/Fam.png';
import SmashBros from '../../../images/SmashBros.png';
import Overwatch from '../../../images/Overwatch.png';
import Botw from '../../../images/Botw.png';
import Fortnite from '../../../images/Fortnite.png';
import BeatSaber from '../../../images/BeatSaber.png';
import SeaofThieves from '../../../images/SeaofThieves.png';
import MineCraft from '../../../images/MineCraft.png';
import Gallup1 from '../../../images/Gallup1.png';
import Gallup2 from '../../../images/Gallup2.png';
import Gallup3 from '../../../images/Gallup3.png';

const panes = [
  { menuItem: 'Life', render: () =>
    <Tab.Pane align='center' attached={false} inverted>
      <Header as='h2'>What's my story?</Header>
      <Divider/>
      <Grid stackable>
        <Grid.Row columns='equal'>
          <Grid.Column style={{marginLeft: '34px'}}>
            <Container textAlign='justified'>
              <p style={{fontSize: 16}}>
                I had been struggling for quite some time to find a career path
                that fits my particular skills and abilities;
                a career path that I could find joy and satisfaction in.
                <p>
                  I finally found that path in coding!
                </p>
                I signed up for a coding course and instantly fell in love.
                It's a no-brainer that this is THE career path for me.
              </p>
              <p style={{fontSize: 21}}>
                In this section of my website
                you can learn about some of my
                qualities, interests, and abilites!
              </p>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Image width='300' src={Masooon}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Tab.Pane>
  },
  { menuItem: 'Attributes', render: () =>
    <Tab.Pane align='center' attached={false} inverted>
      <div style={{paddingBottom: 70}}>
        <Header as='h2' style={{color: 'white'}}>
          These are a few of my natural attributes.
        </Header>
        <p style={{fontSize: 17}}><u>Communication</u> - <u>Problem Solving</u> - <u>Momentum Creation</u></p>
        <p style={{fontSize: 17}}><u>Inclusion of Others</u> - <u>Winning Others Over</u></p>
        <Modal basic closeIcon className='modals' trigger={<Button size='big' compact color='facebook'>Attributes Report</Button>}>
          <Modal.Header align='center'>
            Mason's Gallup Report
          </Modal.Header>
          <Modal.Content>
            <Image src={Gallup1}></Image>
            <Image src={Gallup2}></Image>
            <Image src={Gallup3}></Image>
          </Modal.Content>
        </Modal>
        <Header as='h3' style={{color: 'white'}}>
          If you would like to learn more about each,
          <br/>this document goes into further detail.
        </Header>
      </div>
    </Tab.Pane>
  },
  { menuItem: 'Skills', render: () =>
    <Tab.Pane attached={false} inverted>
      <Header as='h2' align='center'>My Skills</Header>
      <Container>
        <p style={{fontSize: 16, textAlign: 'center'}}>
          Although this website somewhat shows what I can do,
          <br/>
          this section further illustrates with some pretty bars!
          <br/>
        </p>
        <p style={{fontSize: 16, textAlign: 'center'}}>
          These bars relate to eachother as they relate to me.
          <br/>
          They do not represent my skills compared to the industry.
          <br/>
          I still consider myself quite the newb!
        </p>
        <br/>
        <p>Laravel (PHP)</p>
        <Progress percent={65} indicating size='tiny'/>
        <p>Ruby on Rails</p>
        <Progress percent={80} indicating size='tiny'/>
        <p>React.js</p>
        <Progress percent={85} indicating size='tiny'/>
        <p>HTML</p>
        <Progress percent={70} indicating size='tiny'/>
        <p>CSS</p>
        <Progress percent={57} indicating size='tiny'/>
        <p>Cooking <i style={{fontSize: 7}}>hehe</i></p>
        <Progress percent={10} indicating size='tiny'/>
        <p>Spanish</p>
        <Progress percent={95} indicating size='tiny'/>
      </Container>
    </Tab.Pane>
  },
  { menuItem: 'Smarts', render: () =>
    <Tab.Pane align='center' attached={false} inverted>
      <div style={{paddingBottom: 90}}>
        <Header align='center' as='h2' style={{color: 'white'}}>
          I graduated from DevPoint Labs
        </Header>
        <p style={{fontSize: 17}}>
          DevPoint Labs is a <u>web development</u> school that operates through the University of Utah.
        </p>
        <Divider/>
          <Image rounded width='100' src={DevPoint}/>
        <Divider/>
        <Container textAlign='center'>
          <p style={{fontSize: 17}}>The languages I've been working with recently are Ruby, JavaScript, HTML, and CSS.</p>
        </Container>
      </div>
    </Tab.Pane> },
  { menuItem: 'Hobbies', render: () =>
    <Tab.Pane attached={false} inverted>
      <div style={{paddingBottom: 75}}>
        <Header align='center' as='h2' style={{color: 'white'}}>
          Click one to see more!
        </Header>
        <Divider/>
        <br/>
        <Grid stackable textAlign='center'>
          <Modal basic closeIcon className='modals' trigger={<Button size='massive' compact inverted basic color='blue'>Family</Button>}>
            <Modal.Header align='center'>
              Family is my purpose in life!
              <Divider/>
              <Container textAlign='center'>
                <p style={{fontSize: 16}}>
                  My family is very close. We love to spend time together!
                </p>
              </Container>
            </Modal.Header>
            <Modal.Content>
              <Grid columns={2} align='center'>

                <Grid.Column>
                  <List>

                    <Segment compact>
                      <List.Item>
                        <Popup content="This is my family when I was a wee lad."
                          trigger={<Image fluid src={FamBam}/>}
                          position='left center'/>
                      </List.Item>
                    </Segment>

                  </List>
                </Grid.Column>
                <Grid.Column>
                  <List>

                    <Segment compact>
                      <List.Item>
                        <Popup content="This is my family now."
                          trigger={<Image fluid src={Fam}/>}
                          position='left center'/>
                      </List.Item>
                    </Segment>

                  </List>
                </Grid.Column>

              </Grid>
            </Modal.Content>
          </Modal>

          <Modal basic closeIcon className='modals' trigger={<Button size='huge' compact inverted basic color='blue'>Rock Climbing</Button>}>
            <Modal.Header align='center'>
              I love rock climbing!
              <Divider/>
              <Header as='h3' inverted>Routes are rated from 5.6 to around 5.15.</Header>
              <Header as='h3' inverted>I generally climb in the 5.11 range.</Header>
            </Modal.Header>
            <Modal.Content>
              <Grid columns={2} align='center'>

                <Grid.Column>
                  <List>

                    <Segment compact>
                      <List.Item>
                        <Image fluid src={Moab}/>
                      </List.Item>
                    </Segment>

                    <Segment compact>
                      <List.Item>
                        <Popup content="This was the hardest climb I've ever done. It's only a 10c (which I still don't believe) It's ALL feet and basically no hands. The only support there is are little dimples and pimples on a seemingly smooth wall. My feet were slipping left and right. BUT, I finished it! Maybe it IS a 10c but mentally it was a 12c for me! And yes, that is me on the wall :)"
                          trigger={<Image fluid src={Worst}/>}
                          position='left center'/>
                      </List.Item>
                    </Segment>

                  </List>
                </Grid.Column>
                <Grid.Column>
                  <List>

                    <Segment compact>
                      <List.Item>
                        <Image fluid src={Belaying}/>
                      </List.Item>
                    </Segment>

                    <Segment compact>
                      <List.Item>
                        <Image fluid src={Wall}/>
                      </List.Item>
                    </Segment>

                  </List>
                </Grid.Column>

              </Grid>
            </Modal.Content>
          </Modal>

          <Modal basic closeIcon className='modals' trigger={<Button size='big' compact inverted basic color='blue'>Video Games</Button>}>
            <Modal.Header align='center' as='h2'>
              I'm a gaming enthusiast!
              <Divider/>
              <p style={{fontSize: 16}}>Below are some games that I really like!</p>
            </Modal.Header>
            <Modal.Content>

              <Grid columns={2} align='center'>
                <Grid.Column>
                  <List>

                    <Segment compact>
                      <List.Item>
                        <Popup content="Breath of the Wild is the greatest game I've ever played"
                          trigger={<Image fluid src={Botw}/>}
                          position='left center'
                        />
                      </List.Item>
                    </Segment>

                    <Segment compact>
                      <List.Item>
                        <Popup content="I love this game and how competitive it can get!"
                          trigger={<Image fluid src={SmashBros}/>}
                          position='left center'
                        />
                      </List.Item>
                    </Segment>

                    <Segment compact>
                      <List.Item>
                        <Popup content="This game changed the world. I've been playing it since the first week it was launched! It's changed a lot but it's still good."
                          trigger={<Image fluid src={Fortnite}/>}
                          position='left center'
                        />
                      </List.Item>
                    </Segment>

                    <Segment compact>
                      <List.Item>
                        <Popup content="Minecraft is pretty theraputic for me. Just chill, buid, and create with some nice background music."
                          trigger={<Image fluid src={MineCraft}/>}
                          position='left center'
                        />
                      </List.Item>
                    </Segment>

                  </List>
                </Grid.Column>
                <Grid.Column>
                  <List>

                    <Segment compact>
                      <List.Item>
                        <Popup content="I love how unique this game is and I love the art style"
                          trigger={<Image fluid src={Overwatch}/>}
                          position='right center'
                        />
                      </List.Item>
                    </Segment>

                    <Segment compact>
                      <List.Item>
                        <Popup content="Beat Saber is the best! It's a VR Guitar Hero mixed with DDR and light-sabers. Makes you feel like a musical jedi. Great work-out, dancing, and a lot of fun. lol"
                          trigger={<Image fluid src={BeatSaber}/>}
                          position='right center'
                        />
                      </List.Item>
                    </Segment>

                    <Segment compact>
                      <List.Item>
                        <Popup content="This game really puts you into the adventure of being independant pirate on the seas. You get to explore and make ethical desicions with/against real people. You can steal, give, aid, or flee from other pirates! And you literally sail a ship around the seas!"
                          trigger={<Image fluid src={SeaofThieves}/>}
                          position='right center'
                        />
                      </List.Item>
                    </Segment>

                  </List>
                </Grid.Column>

              </Grid>
            </Modal.Content>
          </Modal>
        </Grid>
      </div>
    </Tab.Pane>
  }
]

const About = () => (

  <div>
    <Header as='h2' inverted>
      A Little About Myself
    </Header>

    <Tab panes={panes} menu={{ pointing: true, inverted: true, size: 'small', compact: true }} />
  </div>
)

export default About;
