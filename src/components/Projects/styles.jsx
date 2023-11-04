import styled from "styled-components";

export const ContainerGeral = styled.div`

  margin-bottom: 20rem;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  text-align: center;
  font-weight: 500;
  color: #657bca;

  @media (max-width: 910px) {
    margin: 0 0 -3rem 1.4rem;
  }
`;

export const ContainerProjects = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 5rem;
  margin: 3rem 0;

  @media (max-width: 967px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 481px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NameProject = styled.h3`
  font-weight: 500;
  opacity: 0.9;
`;

export const DescribeProject = styled.p`
  margin-bottom: 0.5rem;
`;

export const Caixa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 300px;
  margin: 1rem 0;
`;

export const ImgProject = styled.img`
  cursor: pointer;
  border-radius: 5px;
  width: 20rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  @media (max-width: 970px) {
    width: 20rem;
  }

  @media (max-width: 391px) {
    width: 17rem;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  margin-top: 1.5rem;
`;

export const LinkProject = styled.a`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  display: flex;
  justify-content: center;
  margin: 1rem 1.4rem;
  gap: 5px;
  border-radius: 5px;
  color: #fff;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  &:hover {
    opacity: 0.8;
    transition: all ease-in-out 0.2s;
  }

  @media (max-width: 391px) {
    margin: 1rem 0;
    padding: 0.6rem 0.8rem;
  }
`;

export const MouseHover = styled.span`
  opacity: 0.7;
  color: #fff;

  @media (max-width: 910px) {
    display: none;
  }

  @media (max-width: 391px) {
    display: none;
  }
`;
