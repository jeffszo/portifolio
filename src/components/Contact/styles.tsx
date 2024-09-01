import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 1rem 0;

  @media (max-width: 767px){
    margin: 0 0 2rem 0;
  }
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  color: #657bca;
`;

export const Desc = styled.p`
  color: #455065;
  margin: 0.2rem 0 0.8rem 0;

  
  @media (max-width: 767px){
   font-size: 0.88rem;
   text-align: center;
  }

`

export const ContainerIcon = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  svg{
    cursor: pointer;
  }

`


