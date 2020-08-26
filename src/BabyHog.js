import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images? 
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

// const BabyHog = props => {
//   // WON'T HAVE ACCESS TO STATE
//   const changeWeight = (e) => {
//     // nothing needs to change here
//     const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
//     this.setState({
//       weight: newWeight
//     })
//   }

//   const getImage = () => {
//     const eyeColor = this.props.eyeColor;
//     if (eyeColor === 'blue') {
//       return BlueBaby;
//     } else if (eyeColor === 'sun') {
//       return SunBaby;
//     } else if (eyeColor === 'glowing') {
//       return GlowingBaby;
//     } else {
//       return normalBaby;
//     }
//   }

//   return (
//     <li className="hogbabies">
//       <h1>{props.name}</h1>
//       <h3>Weight: {state.weight}</h3> {/* no state so this line won't work */}
//       <h3>Hobby: {props.hobby}</h3>
//       <h4>Eye Color: {props.eyeColor}</h4>
        
//       <Button onClick={changeWeight} name="+">
//         Increase Weight
//       </Button>
//       <Button onClick={changeWeight} rname="-">
//         Decrease Weight
//       </Button>

//       <div className="hb-wrap">
//         <img src={getImage()} style={{height: '200px'}} alt="MasterBlasterJrJr" />
//       </div>
      
//     </li>
//   )
// }

export default class BabyHog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weight: 100,
    }
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  // getImage = () => {
  //   switch (this.props.eyeColor) {
  //     case 'blue':
  //       return BlueBaby;
  //     case 'sun':
  //       return SunBaby;
  //     case 'glowing':
  //       return GlowingBaby;
  //     default:
  //       return normalBaby;
  //   }
  // }

  getImage = () => {
    const eyeColor = this.props.eyeColor;
    if (eyeColor === 'blue') {
      return BlueBaby;
    } else if (eyeColor === 'sun') {
      return SunBaby;
    } else if (eyeColor === 'glowing') {
      return GlowingBaby;
    } else {
      return normalBaby;
    }
  }

  // this.props = {
  //   eyeColor: 'blue',
  //   key: 1,
  //   name:'JeffKatzy Katz',
  //   hobby: 'Never gonna give'
  // }

  render() {
    return (
      <li className="hogbabies">
        <h1>{this.props.name}</h1>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Hobby: {this.props.hobby}</h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>
          
        <Button onClick={this.changeWeight} name="+">
          Increase Weight
        </Button>
        <Button onClick={this.changeWeight} rname="-">
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={this.getImage()} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>
        
      </li>
    )
  }
}

{/* <BabyHog eyeColor={this.state.eyeColor} key={1} name={"JeffKatzy Katz"} hobby={"Never gonna give"} /> */}
// this.props = {
//   eyeColor: 'blue',
//   key: 1,
//   name:'JeffKatzy Katz',
//   hobby: 'Never gonna give'
// }