import React, { Component } from 'react';
import TimePicker from 'react-time-picker' 

export default class Pick extends Component {
  state = {
    time: '10:00',
  }
 
  onChange = time => this.setState({ time })
 
  render() {
    return (
      <div>
        <TimePicker
          onChange={this.onChange}
          value={this.state.time}
        />
      </div>
    );
  }
}