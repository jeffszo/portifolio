import styled from "styled-components";
import { AiFillLayout } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { FaUser, FaServer } from "react-icons/fa";

export const ContainerGeral = styled.div`
  margin-bottom: 20rem;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;

  font-size: 1.6rem;
  font-weight: 500;
  color: #657bca;

  @media (max-width: 767px) {
    margin-bottom: 0.2rem;
  }
`;


export const Desc = styled.span`
  color: #455065;
`;

export const ContainerAllCardsOne = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: 10rem;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    margin: 2rem 0;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ContainerAllCardsTwo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  gap: 10rem;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    margin: 2rem 0;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ContainerCardService = styled.div`
  display: flex;
  justify-content: center;
  border: none;
  background-color: #000814;
  flex-direction: column;
  align-items: center;
  height: 13.5rem;
  width: 20rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const TypeCardSerive = styled.p`
  color: #aea3b0;
`;

export const IconOne = styled(AiFillLayout)`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #fff;
`;

export const IconTwo = styled(FaServer)`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #fff;
`;

export const IconThree = styled(GiProgression)`
  font-size: 2.3rem;
  margin-bottom: 0.5rem;
  color: #fff;
`;
export const IconFour = styled(FaUser)`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #fff;
`;
