import styled from "styled-components";
import { FaReact, FaGitAlt, FaNodeJs  } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TfiHtml5 } from "react-icons/tfi";
import { SiStyledcomponents,SiTypescript  } from "react-icons/si";
import { DiJavascript } from "react-icons/di";

export const Container = styled.div`
  margin-bottom: 19rem;
`;

export const ContainerIcon = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  padding: 1rem 0;
  margin: 1rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
  }

  @media (max-width: 510px) {
  }

  @media (max-width: 391px) {

  }
`;

export const React = styled(FaReact)`
  color: #61dafb;
  font-size: 4.2rem;
  margin: 1.5rem 4rem;


  transition: all 0.5s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    font-size: 3.2rem;
    margin: 1rem 0;
  }

  @media (max-width: 510px) {
  }
`;

export const Typescript = styled(SiTypescript )`
  font-size: 4.2rem;
  margin: 1.5rem 4rem;


  transition: all 0.5s ease;
  color: #205389;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    font-size: 3.2rem;
    margin: 1rem 0;
  }

  @media (max-width: 510px) {
  }
`;

export const Nodejs = styled(FaNodeJs )`
  font-size: 4.2rem;
  margin: 1.5rem 4rem;


  transition: all 0.5s ease;
  color: #84ba64;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    font-size: 3.2rem;
    margin: 1rem 0;
  }

  @media (max-width: 510px) {
  }
`;

export const Git = styled(FaGitAlt)`
  font-size: 4.2rem;
  margin: 1.5rem 4rem;


  transition: all 0.5s ease;
  color: #fb5607;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    font-size: 3.2rem;
    margin: 1rem 0;
  }

  @media (max-width: 510px) {
  }
`;

export const Css = styled(IoLogoCss3)`
  font-size: 4.2rem;
  margin: 1.5rem 4rem;


  transition: all 0.5s ease;
  color: #00509d;

  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 767px) {
    font-size: 3.2rem;
    margin: 1rem 0;
  }

  @media (max-width: 510px) {
  }
`;
export const Javascript = styled(DiJavascript)`
  font-size: 4.2rem;
  margin: 1.5rem 4rem;


  transition: all 0.5s ease;
  color: #ffea00;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    font-size: 3.2rem;
    margin: 1rem 0;
  }

  @media (max-width: 510px) {
  }
`;
export const Html = styled(TfiHtml5)`
  font-size: 4.2rem;
  margin: 1.5rem 4rem;


  transition: all 0.5s ease;
  color: #fb5607;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    font-size: 3.2rem;
    margin: 1rem 0;
  }
  @media (max-width: 510px) {
  }
`;

export const Styled = styled(SiStyledcomponents)`
  font-size: 4.2rem;
  margin: 1.5rem 4rem;


  transition: all 0.5s ease;
  color: #d81159;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 510px) {
  }

  @media (max-width: 767px) {
    font-size: 4.2rem;
    margin: 1rem 0;
  }
`;

export const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
  }
`;

export const ContainerOne = styled.div`
  display: flex;
  margin: 0 0 2rem 0;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 510px) {
    margin: 1rem;
    gap: 1rem;

  }
`;

export const ContainerTwo = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    margin: 2rem 0 0 0;
    gap: 1rem;

  }

  @media (max-width: 510px) {
    margin: 1rem;
    gap: 1rem;

  }
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-weight: 500;
  color: #657bca;
  margin: 0 0 4rem 0;

  @media (max-width: 767px) {
    margin: 15rem 0 2rem 0;
  }
`;
