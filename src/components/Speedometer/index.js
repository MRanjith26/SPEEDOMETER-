import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevSate => ({speed: prevSate.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevSate => ({speed: prevSate.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="title">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="avatar"
        />
        <h2 className="description">Speed is {speed}mph</h2>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            className="button accelerate"
            onClick={this.onAccelerate}
            type="button"
          >
            Accelerate
          </button>
          <button className="button brake" onClick={this.onBrake} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
