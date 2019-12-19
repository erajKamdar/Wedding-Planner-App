import React from 'react';
import Footer from './footer';
import Navbar from './Navbar'

export default class Gallery extends React.Component {
    render() {
        return (
            <div className='gallery_M'>
               <Navbar /> 
               <div className='mainGalleryImg'></div>
            <div className='gallery_Content'>
                <div className='setGallery'>
                <div className='gC_1'>
                    <div className='gImg_1'></div>
                    <div className='set_space'></div>
                    <div className='gImg_2'></div>
                </div>
                <br/>
                <div className='gC_1'>
                    <div className='gImg_3'></div>
                    <div className='set_space'></div>
                    <div className='gImg_4'></div>
                </div>
                <br/><br/>
                <div className='gC_1'>
                    <div className='gImg_5'></div>
                    <div className='set_space'></div>
                    <div className='gImg_6'></div>
                </div>
                </div>
            </div>
            <Footer />
            </div>
        )
    }
}
