import styled from 'styled-components';

export const PaslaugosContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
  color: #292929;
  
`;

export const PaslaugosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background: #8082BB;
  border-radius:20px;
  padding-top: 1rem;
`;

export const PaslaugosCard = styled.div`
  margin: 0.8rem 1rem;
  line-height: 1;

`;


export const PaslaugosHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  color: #292929;
`;


export const PaslaugosDesc = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  color: rgb(241, 241, 241);

`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;



export const PaslaugosButton = styled.button`
  font-size: 1.1rem;
  padding: 1rem 3rem;
  margin: 2rem 4rem;
  border: none;
  background: rgb(241, 241, 241) ;
  border-radius:20px;
  color: #292929;
  width: fit-content;
  transition: 0.2 ease-out;
  &:hover {
    background: rgb(200, 200, 200);
    color: #292929;
    transition: 0.2s ease-out;
    cursor: pointer;
    
  }
`;