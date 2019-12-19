import React from 'react';
import {Link} from 'react-router-dom';
import gallery_des from '../main_project_Image/gallery_des.jpg';

export default class GalleryDes extends React.Component{
    render(){
        return(
            <div className='gDesBoth'>
               <div className='gImage'></div>
               <div className='gDes'>
               <h3>
                    <span className='just_G'>G</span>allery
                </h3>
                <p>Photography coverage on the day. ...
                    A second photographer. ...
                    A pre-wedding photo session. ...
                    A USB stick. ...
                    A certain number of digital photographs. ...
                    A certain number of prints. ...
                    An Online Gallery.....
                    A wedding album.
                </p>
                <br></br>
                <Link to='/gallery' className='set_to'>
                   <span className='moreImg'> View Photos </span> 
                </Link>
                <div className='img_line'></div>
                </div>
            </div>
        )
    }
}