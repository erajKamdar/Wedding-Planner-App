import React from 'react'
import Main from './UnderHead';
import Header from './Header';
import {Link} from 'react-router-dom';
import Slideshow from './SlideImages';
import ServiceDes from '../SmallDescription/ServicesDes'
import GalleryDes from '../SmallDescription/GalleryDes';
import Footer from './footer';
import Navbar from './Navbar';
import Submit from '../page/submit';
export default function Home() {
    return ( 
        <>
        <Navbar />
        <Main>
            <Header title="Belle Weddings" subtitle="Bespoke Wedding Planners">
                <Link to="/">
                    
                </Link>
            </Header>
        </Main>
        <div className='setDefault'>
            <ServiceDes /><Slideshow />
            

        </div>
        <div className='set_gDes'>
        <div>
            <GalleryDes />
        </div>
        </div>
        <div>
            <Footer />
        </div>
        </>
        
    )
}