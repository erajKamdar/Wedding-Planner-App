import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Submit extends Component {
    render() {
        return (
            <div>
            <div className="center">
            <div className="submit">
                THANKYOU FOR BOOKING IN GLAMROUS BEACH RESORT
                <Link to='/submit'>  </Link> 
            <br /> <br />
            <p> Thankyou for all the team members to support the glamrous resort (stay blesssed). </p>
            </div>
            </div>
            <div className='information'>
                <Link to ="/Home" className='child-div'>
            <button className='service_btn r_home'>Return Home</button>
            </Link>
            </div>
            </div>
        )
    }
}
