import React, { Component } from 'react';
// import { photos } from './photos.js'
import './Card.css';
class Card extends Component {
  constructor(){
    super();
    this.state = {
      id:"",
      description: "Click here"

    };
  }
  changeDescription = () => {
    this.setState({description: this.props.description});
    console.log(this.state.description);
  };

  render(){
    return (
      <div className='spoiler photos tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img  onClick ={this.changeDescription} alt='jinz_photos' src={require(`../jinz_photos_png/jinz${this.props.id}.png`)} />
        {<h2>{this.state.description}</h2>}
        {<h2>{this.props.id}</h2>}
      </div>
    );
  }
}


export default Card;
