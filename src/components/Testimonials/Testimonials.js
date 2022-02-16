import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import './Testimonials.css';
import '../../App.css'

const Testimonials = ({heading, buttontext, data}) => {

    var data1 = data.slice(0, 3);
    var data2 = data.slice(3, 6);
  return (
    <div className="testimonials">
        <div className='headingLight'>{heading}</div>
        <div className='testimonialsList'>
            <div className='lists'>
                <div className='leftList'>
                    {data1.map((testimonial, index) => {
                        return(
                            <div className="testimonial" key={index}>
                                {'" '}{testimonial.content}  {'" - '}
                                {testimonial.author}
                            </div>
                        )
                    })}
                </div>
                <div className='rightList'>
                    {data2.map((testimonial, index) => {
                        return(
                            <div className="testimonial" key={index}>
                                {'" '}{testimonial.content}  {'" - '}
                                {testimonial.author}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <PrimaryButton buttontext={buttontext}/>
        
  </div>
  );
};

export default Testimonials;
