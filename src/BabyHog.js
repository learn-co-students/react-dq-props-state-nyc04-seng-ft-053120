import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class BabyHog extends Component {

  state = {
    weight: 0
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  render() {
    const {name, eyeColor, hobby} = this.props
    return (
      <li className="hogbabies">
        <h1>{name}</h1>
        <h3>Weight: {this.state.weight} </h3>
        <h3>Hobby: {hobby}</h3>
        <h4>Eye Color: {eyeColor}</h4>
          
        <Button onClick={this.changeWeight} name="+">
          Increase Weight
        </Button>
        <Button onClick={this.changeWeight} name="-">
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={require(`./assets/${eyeColor}-eyes.png`)} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>
        
      </li>
    )
  }
}
