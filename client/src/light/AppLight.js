import React from 'react';
import {Container} from 'semantic-ui-react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import About from './components/shared/About';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Projects from './components/shared/Projects';
import Blog from './components/blog/Blog';
import Contact from './components/shared/Contact';
import QrCode from './components/projects/QrCode';
import Store from './components/projects/Store';
import Casino from './components/projects/Casino';
import Trip from './components/projects/Trip';
import Janitorial from './components/projects/Janitorial';
import AppEst from './components/projects/AppEst';

const AppLight = () => (

  <div className='appLight'>
    <Navbar/>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/qrcode' component={QrCode} />
        <Route exact path='/store' component={Store} />
        <Route exact path='/janitorial' component={Janitorial} />
        <Route exact path='/appEst' component={AppEst} />
        <Route exact path='/casino' component={Casino} />
        <Route exact path='/trip' component={Trip} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
    <p align='center' style={{color: 'white', opacity: .5, paddingTop: 50, paddingBottom: 50}}>
      © 2020 Website Created by Mason D Eyre
      <br/>
      <a href='mailto:mason.deyre@gmail.com' target='_blank' rel="noopener noreferrer" style={{color: 'orange'}}>
        mason.deyre@gmail.com
      </a>
      <br/>
      Icons created by &nbsp;
      <a href='https://icons8.com/' target='_blank' rel="noopener noreferrer" style={{color: 'orange'}}>
        Icons8
      </a>
    </p>
  </div>
)

export default AppLight;
