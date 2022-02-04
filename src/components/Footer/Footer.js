import React from 'react';
import './Footer.css'


const Footer = () => {
  return (
        <div className='footer'>
            <div className='footerContainer'>
                <div className='section1'>
                    <div className='main'>
                        Darbo valandos
                    </div>
                    <div className='secondary'>
                        Pirm. - Penkt. : 9:00 - 20:00 <br />
                        Šešt. : 10:00 - 16:00 <br />
                        Sekm. : Nedirbame <br />
                    </div>
                </div>
                <div className='section2'>
                    <div className='main'>
                        Kaunas
                    </div>
                    <div className='secondary'>
                        Klinika Vibramedica <br />
                        Kapsų g. 17 
                    </div>
                </div>
                <div className='section3'>
                    <div className='main'>
                        Kontaktai
                    </div>
                    <div className='secondary'>
                        (8-601) 36466
                    </div>
                </div>

                
            </div>
                <div className='c'>
                    &#xA9; 2021 Julija Podologė
                </div>
        </div>
    );
};

export default Footer;
