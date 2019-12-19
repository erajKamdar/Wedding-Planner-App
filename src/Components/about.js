import React from 'react';
import Footer from './footer';
import Navbar from './Navbar'

export default class About extends React.Component{
    render(){
    return(
        <div>
            <Navbar />
            <div className='about_1'>
               <div className='aboutImg_1'></div>
               <div className='ab_1'>
               <h3>
                    <span className='just_A'>A</span>bout <span className='just_A'>B</span>elle
                    <span className='just_A'>W</span>eddings
                </h3>
                <p>Our commitment is to let your own personal style prevail, providing unrivalled service to translate your wishes in the higher level of satisfaction.
                Our team is intuitive, passionate, thoughtful to give you a service beyond your expectations.
                </p>
                </div>
                </div>
            
                <div className='about_1'>
               <div className='ab_1'>
               <h3>
                    <span className='just_A'>M</span>ore <span className='just_A'>D</span>etails
                </h3>
                <p>A lot of people said that ours was the best wedding they have been to. Italy (esp. Lake Como and Milan) are David’s and my favorite place in the world now, so we will definitely go back! Thanks for everything again
                </p>
                
                </div>
                <div className='aboutImg_2'></div>
                </div>
                <Footer />
        </div>
    )
}


}