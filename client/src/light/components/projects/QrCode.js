import React from 'react';
import {Segment} from 'semantic-ui-react';
import MasonQR from '../../../images/MasonQR.png';
import WhateverYouWant from '../../../images/WhateverYouWant.png';
import EvenLink from '../../../images/EvenLink.png';
import SiteQR from '../../../images/SiteQR.png';

const QrCode = () => (

  <div>
    <h1><font color='white'>QR Code Generator</font></h1>
    <Segment textAlign='center'>
      <p style={{fontSize: 18}}>This project was inspired by my wife.
        She's a graphic designer and was looking for QR codes
        for business cards she was desiging for a client.
        She couldn't find any free generators online
        so she looked at me and said, "Your doing coding and stuff now, can't you make one?"
        <br/>
          I was just as curious, and wa-lah!
        <br/>
        <a href='https://github.com/DudeMason/QRCode_Generator' target='_blank' rel="noopener noreferrer">
          - Here you have it! -
        </a>
      </p>
      <p>⇡(GitHub link)⇡</p>
      <p>I have a pretty detailed README!</p>
    </Segment>
    <Segment align='center'>
      <p style={{fontSize: 17}}>
        Here are some examples of QR codes made in my generator!
        <br/>
        Get your phone ready and see if you can decipher their hidden messages!
      </p>
      <p style={{flex: 1}}>
        <img src={MasonQR} alt='QR Code from my generator'/>
        <img src={WhateverYouWant} alt='They an be whatever you want'/>
        <img src={EvenLink} alt='Even a link!'/>
        <img src={SiteQR} alt='www.masoneyre.com'/>
      </p>
    </Segment>
  </div>
)

export default QrCode;
