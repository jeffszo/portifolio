import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20rem;
  overflow-x: hidden;
`;

export const AboutTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  color: #657bca;
  text-align: center;
  margin: 15rem 0 0 0;
`;

export const AboutDesc = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  font-weight: 200;
  text-align: center;
  color: #fff;
  width: 60%;
  margin: 1rem 0;

  @media (max-width: 767px) {
    width: 90%;
  }

  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;
