import React from 'react';
import '../../App.css';
import './Pricelist.css';

const pricelist = ({heading, data}) => {
  return (
    <div className="pricelist">
        
        <div className='headingDark'>{heading}</div>
        <div className='roundedContainerWrapper fullContainerPriceList'>
        
    {data.map((list, index) => {
        return(
            
                <div className="list" key={index}>
                    <div className='listName'>
                        {list.name} 
                    </div>
                    <div className='listPrice'>
                        {list.price}
                    </div>
                     
                </div>
           
        )
    })}
    </div>
    </div>
    );
};

export default pricelist;
