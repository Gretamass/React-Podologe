import React from 'react';
import {
    PaslaugosContainer,
    PaslaugosWrapper,
    PaslaugosHeading,
    PaslaugosCard,
    PaslaugosDesc,
    PaslaugosButton
  } from './PaslaugosElements';

const Paslaugos = ({heading, buttontext, data}) => {
  return (
      <PaslaugosContainer>
          <PaslaugosHeading>{heading}</PaslaugosHeading>
          <PaslaugosWrapper>
          {data.map((product, index) => {
              return(
                  <PaslaugosCard key={index}>
                      <PaslaugosDesc>{product.desc}</PaslaugosDesc>
                      
                  </PaslaugosCard>
              )
          })}
          <PaslaugosButton>{buttontext}</PaslaugosButton>
          </PaslaugosWrapper>
      </PaslaugosContainer>
  );
};

export default Paslaugos;
