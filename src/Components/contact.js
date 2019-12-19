import React, { Component } from 'react'
import Footer from './footer';
import Form from './form';
import Navbar from './Navbar'
export default class Contact extends Component {
    render() {
        return (
            <div className='contacts'>
                <Navbar />
                <div className='contact_1'>
               <div className='con_1'>
               <h3>
                    <span className='just_A'>C</span>ontact 
                    <span > U</span>s
                </h3>
                <p>500 Terry Francois Street <br/>
                  San Francisco, CA 94158
                  <br/><br />
                Tel: 123-456-7890<br/>
                Fax: 123-456-7890
                </p>
                
                </div>
                <div className='contact_img1'></div>
                </div>


                <div className='contact_2'>
               <div className='contactImg_2'>
                   <Form />
               </div>
               <div className='ab_1'>
               <h3>
                    <span className='just_A'>G</span>et in touch
                </h3>
                <p> Here's the form submission...!!<br/>
                    If you want to get in touch with us submit this form with details...!!!
                </p>
                </div>
                </div>
                <Footer />
            </div>

        )
    }
}
