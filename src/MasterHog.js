import React, { Component } from 'react'
import Master from './assets/master-hog.png'
import BabyHog from './BabyHog'
import offspring from './db.js'

export default class MasterHog extends Component {

  constructor() {
    super();
    this.state = {
      eyeColor: "blue",
    }
  }


  changeEyeColor = (e) => {
    this.setState({
      eyeColor: e.target.value
    })
  }


  render() {
    return (
      <div>

        <input type="radio" name="eyeColor" value="blue" onChange={this.changeEyeColor} />
        Blue<br></br>
        <input type="radio" name="eyeColor" value="sun" onChange={this.changeEyeColor} />
        Sun<br></br>
        <input type="radio" name="eyeColor" value="glowing" onChange={this.changeEyeColor} />
        Glowing<br></br>
      
        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>
        
        <ul className="hoglist">
          {/* <BabyHog eyeColor={this.state.eyeColor} key={1} name={"JeffKatzy Katz"} hobby={"Never gonna give"} /> */}

          {/* hog = { 
            "id": 1,
            "name": "JeffKatzy Katz",
            "hobby": "Never gonna give"
          } */}

          {offspring.map(hog => <BabyHog key={hog.id} name={hog.name} hobby={hog.hobby} eyeColor={this.state.eyeColor} />)}

          {/* {[
            <BabyHog key={1} name={"JeffKatzy Katz"} hobby={"Never gonna give"} eyeColor={this.state.eyeColor} />,
            <BabyHog key={2} name={"Rachel"} hobby={"You up, never gonna"} eyeColor={this.state.eyeColor} />,
            <BabyHog key={3} name={"Maxwell"} hobby={"let you down"} eyeColor={this.state.eyeColor} />,
          ]} */}
        </ul>

      </div>
    )
  }

}
