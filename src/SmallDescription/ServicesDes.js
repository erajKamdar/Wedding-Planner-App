import React from 'react';
import {Link} from 'react-router-dom';

export default class ServiceDes extends React.Component {
    render(){
        return(
            <div className='s_des'>
                <h3>
                    <span className='just_S'>S</span>ervices
                </h3>
                <p>Wedding Planners help couples successfully plan their wedding day and see that everything runs smoothly.
                   As a wedding planner, your responsibilities include establishing a planning timeline and working with the bride and groom to choose everything from attire,
                    to ceremony and reception venues, music, and food.
                </p>
                <br></br>
                <Link to='/services' className='set_to'>
                   <span className='pckgs'> View Our Packages </span> 
                </Link>
                <div className='pckg_line'></div>
            </div>
        )
    }
}