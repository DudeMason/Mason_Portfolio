import React from 'react';
import {Segment, Divider, Header} from 'semantic-ui-react';

const Store = () => (

  <div>
    <Header as='h1' inverted>Ruby Store</Header>
    <Segment textAlign='center' style={{fontSize: 17}}>
      <p style={{fontSize: 20}}>This is an app that must be run through a terminal using Ruby.</p>
      <Divider invisible='true'/>
      <p>You can click
        <a href='https://repl.it/@MasonMan/Ruby-Store' target='_blank' rel="noopener noreferrer">
          -this link-
        </a>
        to run it in your browser. (Just hit "run" when you get there)
        <br/>
        Or you can download
          <a href='https://github.com/DudeMason/Store' target='_blank' rel="noopener noreferrer">
            -the file-
          </a>
        yourself from GitHub to run it in your own terminal.
      </p>
      <h3>Description:</h3>
      <p>
        At the ruby store you can select products,
        place them in your cart, edit your cart, and checkout.
        <br/>
        If you enter the Admin portal
        (<i style={{fontSize: 16}}> password 'Admin'</i>
        <span role='img' aria-label='winky-emjoi'>😉</span>)
        you can manage store inventory and more!
      </p>
    </Segment>
  </div>
)

export default Store;
