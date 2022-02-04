import React from 'react';
import '../../App.css';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton';
import './Gallery.css';



const Gallery = ({heading, buttontext, data}) => {
  return (
    <div className='galleryFull'>
        <div className='headingDark'>{heading}</div> 
        <div className='galleryContainer'>
            <div className='galleryList'>

          
            {data.map((gallery, index) => {
                return(
                    
                        
                            <div className="gallery" key={index}>
                                <div className='gallery-item'>
                                    <img className="galleryImage" src={gallery.image} alt={gallery.alt}/>
                                </div>
                                
                            </div>
                     
                        
                    
                )
            })}  
                </div>
            <SecondaryButton buttontext={buttontext}/>
        </div>
           
    </div>
    );
};

export default Gallery;
