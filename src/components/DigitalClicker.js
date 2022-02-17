// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {

    constructor() {
        super();
    
        // Initial state is defined
        this.state = {
            timesClicked: 0,
        };
      }

    handleClick = () => {
        // debugger;
        this.setState(previousState => {
          return {
            timesClicked: previousState.timesClicked + 1
          }
        })
      }

    render() {
        return (
            <div>
                <h1>{this.state.timesClicked}</h1>
                <button onClick={this.handleClick} >{this.state.timesClicked}</button>
            </div>
        );
    }
}

export default DigitalClicker;