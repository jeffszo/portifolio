import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";

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
  color: #657bca;
`;

export const Github = styled(ImGithub)`
  cursor: pointer;
  font-size: 35px;
  margin: 0 0.3rem;
  transition: all 0.3s ease;
  color: #657bca;
`;

export const Twitter = styled(RiTwitterXFill)`
  cursor: pointer;
  font-size: 35px;
  transition: all 0.3s ease;
  color: #657bca;
`;

export const ContainerApresentation = styled.div`
  display: flex;
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
  overflow: hidden;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleDesc = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  line-height: 1.1;
  color: #fff;
  opacity: 0.7;

  @media (max-width: 767px) {
    font-size: 1.1rem;
    text-align: center;
  }

  @media (max-width: 375px) {
    line-height: normal;
    font-size: 0.9rem;
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
  opacity: 0.7;
  font-size: 4rem;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 3rem;
    text-align: center;
    margin: 0;
  }

  @media (max-width: 375px) {
    font-size: 1.6rem;
    margin: 0 0 1rem 0;
  }
`;

export const ContainerRedes = styled.div`
  display: flex;

  @media (max-width: 375px) {
    margin: 0.4rem 0 0 0;
  }
`;

export const Span = styled.span`
  color: #657bca;
`;
