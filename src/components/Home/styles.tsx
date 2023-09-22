import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #EDE7F6;
  width: 100%;
  padding-bottom: 17em;
  @media(max-width: 320px){

  }
`;

export const Describe = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  margin: 0 0 0 6rem;
  line-height: 1.1;
  width: 50rem;

`;

export const Span = styled.span`
  color: #657bca;
`;

export const AboutTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  display: flex;
  text-align: center;
  font-size: 1.4rem;
  margin: 15em 45% 0 45%;
`;

export const AboutDesc = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  width: 100%;
  
`;
