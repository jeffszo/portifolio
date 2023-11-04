import styled from "styled-components";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { SiReact, SiPhp } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiJavascript } from "react-icons/di";

export const ContainerGeral = styled.div`

    margin-bottom: 20rem;
`


export const Html = styled(AiFillHtml5)`
  color: #fb5607;
  font-size: 45px; 

  @media (max-width: 767px){
    font-size: 30px;
  }
`;

export const Css = styled(BiLogoCss3)`
  color: #00509d;
  font-size: 45px;

  @media (max-width: 767px){
    font-size: 30px;
  }
`;

export const Bootstrap = styled(FaBootstrap)`
  color: purple;
  font-size: 45px;

  @media (max-width: 767px){
    font-size: 30px;
  }
`;

export const Mysql = styled(GrMysql)`
  font-size: 45px;

  @media (max-width: 767px){
    font-size: 30px;
  }
`;

export const React = styled(SiReact)`
  color: #61dafb;
  font-size: 45px;
  margin: 0 0.2rem;

  @media (max-width: 767px){
    font-size: 30px;
  }
`;

export const Javascript = styled(DiJavascript)`
  color: #ffea00;
  font-size: 45px;

  @media (max-width: 767px){
    font-size: 30px;
  }
`;

export const Php = styled(SiPhp)`
  color: #7a86b8;
  font-size: 45px;

    @media (max-width: 767px){
    font-size: 30px;
  }
`;

export const ContainerTitle = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;

  font-size: 1.6rem;
  font-weight: 500;
  color:#657bca;
  


`;

export const ContainerExper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 8rem;

  @media (max-width: 375px){
    margin: 1rem 4rem;
  }

  @media (max-width: 767px){
    margin: 1rem 4rem;
  }
`;

export const TitleEmpresa = styled.p`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  opacity: 0.9;
  margin: 0.8rem 0;
  width: 50%;
  font-size: 1.2rem;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const DescEmpresa = styled.li`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  opacity: 0.8;
  list-style: none;
  width: 50%;

  @media (max-width: 767px) {
    width: 100%;
    
  }


  @media (max-width: 375px){
    font-size: 1rem;
}
`;

export const PeriodoEmpresa = styled.p`
  color: #fff ;
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  width: 50%;

  strong{
    font-weight: 400;
  }
  

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ContainerIcons = styled.div`
  margin: 1rem 0 0.2rem -0.4rem;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
