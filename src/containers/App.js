import React, { Component } from 'react';
import CardList from '../components/CardList';

import Scroll from '../components/Scroll';
import './App.css';
import { photos } from './photos.js'

class App extends Component{
  // constructor(){
  //   super();
  //   this.state(){
  //     description: "Click here"
  //   }
  // }

  render(){
  return (
      <div className='tc'>
        <h1 className='f1'>Our memories of 200 days</h1>
        <div id="intro_p">
        <p>I am glad I met you. You helped me learned what it's like being in love. 
          Not only that, your smile helps brighten up my days. To me, you are one of 
          the kindest girl I've known with a dorky personality. Moreover, you're the most
          beautiful girl both inside and outside. Keep on smiling, my dear Be Heo.               
          - Be Dau</p>
        </div>
        <h2>Below are the reasons I love you</h2>
        <Scroll>
          <CardList jinzPhotos={photos} />
        </Scroll>
      </div>
  )
  }
}


export default App;