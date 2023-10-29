import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";
import { keyframes, styled } from "styled-components";

export const Loading = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const IcontDotted = styled.img`
  animation: ${Loading} 7s linear infinite;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 466px) {
    align-items: center;
  }

  @media (max-width: 391px) {
    align-items: center;
  }

  @media (max-width: 307px) {
    align-items: center;
  }
  
`;

export const ContainerDotted = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 80px;

  @media (max-width: 1113px) {
    display: none;
  }
`;

export const ContainerDottedTwo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 80px;

  @media (max-width: 1113px) {
    display: none;
  }
`;

export const Link = styled.a`
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  &:hover {
    transform: translateY(-5px);
    color: #657bca;
  }
`;

export const Linkedin = styled(BsLinkedin)`
  cursor: pointer;
  font-size: 35px;
  color: #224ccc;
  @media (max-width: 391px) {
    font-size: 30px;
  }
`;

export const Github = styled(ImGithub)`
  cursor: pointer;
  font-size: 35px;
  margin: 0 0.5rem;
  transition: all 0.3s ease;
  color: gray;

  @media (max-width: 391px) {
    font-size: 30px;
  }
`;

export const Twitter = styled(RiTwitterXFill)`
  cursor: pointer;
  font-size: 35px;
  transition: all 0.3s ease;
  color: #fff;

  @media (max-width: 391px) {
    font-size: 30px;
  }
`;

export const ContainerApresentation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  background-color: #000814;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42rem;
  flex-direction: column;

  width: 100%;
  overflow-x: hidden;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 391px) {
    height: 35rem;
  }
`;

export const TitleDesc = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  line-height: 1.1;
  color: #fff;

  @media (max-width: 767px) {
    font-size: 1.1rem;
  }

  @media (max-width: 395px) {
    font-size: 1rem;
  }
`;

export const ContainerDescribe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Describe = styled.p`
  font-family: "Poppins", sans-serif;
  color: #fff;

  font-size: 4rem;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 2.5rem;
    text-align: center;
    margin: 0;
  }

  @media (max-width: 463px) {
    font-size: 2rem;
  }
  @media (max-width: 391px) {
    font-size: 1.7rem;
    margin: 0 0 1rem 0;

  }

  
  @media (max-width: 307px) {
    font-size: 1.4rem;
  }
  
`;

export const ContainerRedes = styled.div`
  display: flex;
  margin: 0.4rem 0;

  @media (max-width: 375px) {
    margin: 0.4rem 0 0 0;
  }
`;

export const Span = styled.span`
  color: #657bca;
`;
