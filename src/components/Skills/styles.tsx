import styled from "styled-components";
import { FaReact, FaFigma, FaSass, FaGitAlt } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { TfiHtml5 } from "react-icons/tfi";
import { SiStyledcomponents } from "react-icons/si";

export const Container = styled.div`
  background-color: #000814;
  margin-bottom: 20rem;
`;

export const ContainerIcon = styled.div`
  box-shadow: rgba(0, 0, 0, 0.9) 0px 3px 8px;
  padding: 1rem 0;
  margin: 0 1rem;
`;

export const React = styled(FaReact)`
  font-size: 5rem;
  margin: 1rem 2.5rem;

  transition: all 0.5s ease;
  color: #61dafb;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    font-size: 4rem;
    margin: 1rem 0.8rem;
  }

  @media (max-width: 375px) {
    font-size: 3.12rem;
  }
`;

export const Figma = styled(FaFigma)`
  font-size: 5rem;
  margin: 1rem 2.5rem;

  transition: all 0.5s ease;
  color: #e63946;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    font-size: 4rem;
    margin: 1rem 0.8rem;
  }

  @media (max-width: 375px) {
    font-size: 3.12rem;
  }
`;

export const Sass = styled(FaSass)`
  font-size: 5rem;
  margin: 1rem 2.5rem;

  transition: all 0.5s ease;
  color: #ffafcc;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    font-size: 4rem;
    margin: 1rem 0.8rem;
  }

  @media (max-width: 375px) {
    font-size: 3.12rem;
  }
`;

export const Git = styled(FaGitAlt)`
  font-size: 5rem;
  margin: 1rem 2.5rem;

  transition: all 0.5s ease;
  color: #fb5607;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    font-size: 4rem;
    margin: 1rem 0.8rem;
  }

  @media (max-width: 375px) {
    font-size: 3.12rem;
  }
`;

export const Css = styled(IoLogoCss3)`
  font-size: 5rem;
  margin: 1rem 2.5rem;

  transition: all 0.5s ease;
  color: #00509d;

  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 767px) {
    font-size: 4rem;
    margin: 1rem 0.8rem;
  }

  @media (max-width: 375px) {
    font-size: 3.12rem;
  }
`;
export const Javascript = styled(IoLogoJavascript)`
  font-size: 5rem;
  margin: 1rem 2.5rem;

  transition: all 0.5s ease;
  color: #ffea00;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    font-size: 4rem;
    margin: 1rem 0.8rem;
  }

  @media (max-width: 375px) {
    font-size: 3.12rem;
  }
`;
export const Html = styled(TfiHtml5)`
  font-size: 5rem;
  margin: 1rem 2.5rem;

  transition: all 0.5s ease;
  color: #fb5607;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    font-size: 4rem;
    margin: 1rem 0.8rem;
  }

  @media (max-width: 375px) {
    font-size: 3.12rem;
  }
`;

export const Styled = styled(SiStyledcomponents)`
  font-size: 5rem;
  margin: 1rem 2.5rem;

  transition: all 0.5s ease;
  color: #d81159;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    font-size: 4rem;
    margin: 1rem 0.8rem;
  }

  @media (max-width: 375px) {
    font-size: 3.12rem;
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
  justify-content: center;
  margin: 0 0 2rem 0;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    margin: 0 0 2rem 0;
  }
`;

export const ContainerTwo = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-weight: 500;
  color: #03C988;
  margin: 0 0 2rem 0;

  @media (max-width: 767px) {
    margin: 15rem 0 2rem 0;
  }
`;
