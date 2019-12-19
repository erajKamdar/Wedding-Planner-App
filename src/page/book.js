import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Pick from './pick';
import {Link} from 'react-router-dom';
import Navbar from '../Components/Navbar'

export default class Booking extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Navbar />
      <div className="set-calendar">
        <div className="para2">
          <p className="paraSet">Select the available date or time and book your main day with us!!</p></div>
      <div className="btn-primary  set">
        <Calendar 
        className="color calendar "
        onChange={this.onChange}
        value={this.state.date}
        />
        <Pick />
      </div>
      </div>
      <div className="information">
        <Link to="/submit" className="btn-primary child-div">
            COMFIRM BOOKING
        </Link>
      </div>
      {/* <Navbar /> */}
      </div>
    );
  }
}










// import React, { Component } from 'react';
// import Calendar from 'react-calendar';

// export default class Book extends Component {
//   state = {
//     date: new Date(),
//   }
 
//   onChange = date => this.setState({ date })
 
//   render() {
//     return (
//       <div>
//         <Calendar
//           onChange={this.onChange}
//           value={this.state.date}
//         />
//       </div>
//     );
//   }
// }