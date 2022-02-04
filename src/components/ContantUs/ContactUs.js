import React from 'react';
import './ContactUs.css';
import map from '../images/hero1.JPG'


const ContactUs = ({heading}) => {
  return (
    <div className='contactUs'>
        <div className='roundedContainerFullSimple'>
            <div className='headingLight'>{heading}</div> 
            <div className='contactInfo'>
                <div className='textInfo'>
                    <div className='section1'>
                        <div className='mainInfo'>
                            Kontaktai
                        </div>
                        <div className='secondaryInfo'>
                            (8-601) 36466
                        </div>

                    </div>
                    <div className='section2'>
                        <div className='mainInfo'>
                            Adresas
                        </div>
                        <div className='secondaryInfo'>
                            Klinika Vibramedica, Kapsų g. 17 <br />
                            Kaunas 50176 <br />
                            Lietuva
                        </div>
                    </div>
                    <div className='section3'>
                        <div className='mainInfo'>
                            Darbo valandos
                        </div>
                        <div className='secondaryInfo'>
                            Pirm. - Penkt. : 9:00 - 20:00 <br />
                            Šešt. : 10:00 - 16:00 <br />
                            Sekm. : Nedirbame <br />
                        </div>
                    </div>

                </div>

                <div className='mapInfo'>
                    <img className="map" src={map} />
                    
                </div>
            </div>
                
                
        </div>
    </div>
  );
};

export default ContactUs;
