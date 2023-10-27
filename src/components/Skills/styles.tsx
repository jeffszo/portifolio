import styled from "styled-components";
import { FaReact, FaFigma, FaSass, FaGitAlt } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TfiHtml5 } from "react-icons/tfi";
import { SiStyledcomponents } from "react-icons/si";
import { DiJavascript } from "react-icons/di";

export const Container = styled.div`
  background-color: #000814;
  margin-bottom: 20rem;
`;

export const ContainerIcon = styled.div`
  box-shadow: rgba(0, 0, 0, 0.9) 0px 3px 8px;
  padding: 1rem 0;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    height: 7rem;
    width: 5.5rem;
  }

  @media (max-width: 510px) {
    height: 4rem;
    width: 4rem;
  }

  @media (max-width: 391px) {
    margin: 0.4rem;
  }
`;

export const React = styled(FaReact)`
  color: #61dafb;
  font-size: 5rem;
  margin: 1rem 2.5rem;

  transition: all 0.5s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    font-size: 4rem;
    margin: 1rem 0;
  }

  @media (max-width: 510px) {
    font-size: 2rem;
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
    margin: 1rem 0;
  }

  @media (max-width: 510px) {
    font-size: 2rem;
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
    margin: 1rem 0;
  }

  @media (max-width: 510px) {
    font-size: 2rem;
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
    margin: 1rem 0;
  }

  @media (max-width: 510px) {
    font-size: 2rem;
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
    margin: 1rem 0;
  }

  @media (max-width: 510px) {
    font-size: 2rem;
  }
`;
export const Javascript = styled(DiJavascript)`
  font-size: 5rem;
  margin: 1rem 2.5rem;

  transition: all 0.5s ease;
  color: #ffea00;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    font-size: 4rem;
    margin: 1rem 0;
  }

  @media (max-width: 510px) {
    font-size: 2rem;
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
    margin: 1rem 0;
  }
  @media (max-width: 510px) {
    font-size: 2rem;
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

  @media (max-width: 510px) {
    font-size: 2rem;
  }

  @media (max-width: 767px) {
    font-size: 4rem;
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
  gap: 10re;
  margin: 0 0 2rem 0;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }

  @media (max-width: 510px) {
    margin: 1rem;
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
  color: #657bca;
  margin: 0 0 2rem 0;

  @media (max-width: 767px) {
    margin: 15rem 0 2rem 0;
  }
`;
