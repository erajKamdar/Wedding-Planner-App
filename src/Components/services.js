import React from 'react';
import Footer from './footer'
import Book from '../page/book';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
export default class Services extends React.Component{
    render() {
        return(
            <div className='main_S'>
                <Navbar />
                <div className='setServiceImg'>
                    <p className='img_para'>We turn your dream into reality</p>
                </div>
                <div id='consultation'></div>
                <div className='content_S'>
                    <hr />
                    <div className='setServiceContent'>
                        <div className='pckg_n'> Wedding Coordinator </div>
                        <div className='pckg_p'>1hr<br/>$150</div>
                       <Link to="/book/"> <div className='pckg_b'>
                           <button className='service_btn'>
                               Book Now
                            </button></div>
                        </Link>
                    </div>
                    <hr />
                    <div className='setServiceContent'>
                        <div className='pckg_n'>Destination Wedding</div>
                        <div className='pckg_p'>1hr<br/>$150</div>
                        <Link to="/book/"><div className='pckg_b'>
                            <button className='service_btn'>
                                Book Now
                            </button></div>
                        </Link>
                    </div>
                    <hr />
                    <div className='setServiceContent'>
                        <div className='pckg_n'> Full Package </div>
                        <div className='pckg_p'>1hr<br/>$150</div>
                        <Link to="/book/"><div className='pckg_b'>
                            <button className='service_btn'>
                                Book Now
                        </button></div></Link>
                    </div>
                    <hr />
                    <div className='setServiceContent'>
                        <div className='pckg_n'> Partial Package </div>
                        <div className='pckg_p'>1hr<br/>$150</div>
                        <Link to="/book/"> <div className='pckg_b'>
                            <button className='service_btn'>
                                Book Now
                            </button></div></Link>
                    </div>
                    <hr />
                </div>
                <Footer />
            </div>
        )
    }
}