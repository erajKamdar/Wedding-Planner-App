import React from 'react';
import { Slide } from 'react-slideshow-image';

 
const properties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
class Slideshow extends React.Component {
    render(){
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div className='slider_1'>
            </div>
          </div>
          <div className="each-slide">
            <div className='slider_2'>
              
            </div>
          </div>
          <div className="each-slide">
            <div className='slider_3'>
              
            </div>
          </div>
        </Slide>
      </div>
    )
}
}
export default Slideshow;