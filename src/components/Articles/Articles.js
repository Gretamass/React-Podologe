import React from 'react';

import '../../App.css';
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton';
import './Articles.css';

const Articles = ({heading, buttontext, data}) => {
  return (
        <div className='articles'>
            <div className='headingDark'>{heading}</div>
        <div className='articleColumn'>
                {data.map((article, index) => {
                    return(
                        
                            <div className="article" key={index}>
                                <div className='articleDiv'>
                                    <img src={article.image} alt="" className="articleImg" />
                                </div>
                            <div className='roundedContainerSmall fullRoundContainer'>
                                <div className='articlePreview '>
                                    {article.summary}
                                </div>
                            </div>
                        </div>
                    )
                })}
            
        </div>
            <SecondaryButton buttontext={buttontext}/>
        </div>
    );
};

export default Articles;
