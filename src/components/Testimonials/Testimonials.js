import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import './Testimonials.css';
import '../../App.css'

const Testimonials = ({heading, buttontext, data}) => {
  return (
    <div className="testimonials">
        <div className='headingLight'>{heading}</div>
        <div className='testimonialsList'>
            {data.map((testimonial, index) => {
                return(
                    
                        <div className="testimonial" key={index}>
                            {'" '}{testimonial.content}  {'" - '}
                            {testimonial.author}
                        </div>
                    
                )
            })}
        </div>
        <PrimaryButton buttontext={buttontext}/>
        
  </div>
  );
};

export default Testimonials;
