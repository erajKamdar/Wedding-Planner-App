import React from 'react';
import { Link } from 'react-router-dom'

export default class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                <div className='set_foot'>
              <div>
                  500 Terry Street
                  <br/>San Francisco, CA 94158
              </div>  
              <span className='foot_lines'></span>
              <div>
              Tel: 123-456-7890<br />
              Email: info@mysite.com
              </div>
              <span className='foot_lines'></span>
              <div>
              © 2019 by Belle Weddings.<br/>
               Proudly created..!!
              </div>
              <div>
              <Link to='/services/' className='set_foo'> <button className='btn_f set_foo'
              > Book a Consultation </button> </Link>
              
              </div>
              </div>
            </div>
        )
    }
}