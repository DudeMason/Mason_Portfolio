import React from 'react';
import AppLight from './light/AppLight';
import AppDark from './dark/AppDark';
import './Index.css'
import {BlogConsumer} from './providers/BlogProvider';

const App = ({toggleMode, darkMode}) => (

  <>
    {
      darkMode
      ?
      <AppDark/>
      :
      <AppLight/>
    }
  </>
)

const ConnectedApp = () => {
  return(
    <BlogConsumer>
    {
      value => (
        <App toggleMode={value.toggleMode} darkMode={value.darkMode}/>
      )
    }
    </BlogConsumer>
  )
}
export default ConnectedApp;
