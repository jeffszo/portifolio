import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #000814;
  margin: 0;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  color: #03C988;
`;

export const Subtitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  opacity: 0.7;
  margin-top: 0.1rem;
  text-align: center;
  color: #fff;
`;

export const ContainerForm = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: "Poppins", sans-serif;

`;

export const Input = styled.input`
  background-color: #ede7f6;
  font-family: "Poppins", sans-serif;
  width: 40rem;
  height: 2.5rem;
  border-radius: 5px;
  border: 1px solid transparent;
  padding-left: 0.3rem;
  margin-bottom: 1rem;


  @media (max-width: 767px){
    width: 20rem;
  }

  @media (max-width: 367px){
    width: 15rem;
  }
`;

export const Descricao = styled.textarea`
  font-family: "Poppins", sans-serif;
  padding: 0.3rem;
  width: 40rem;
  height: 10rem;
  border-radius: 5px;
  border: 1px solid transparent;
  background-color: #ede7f6;
  resize: none;

  @media (max-width: 767px){
    width: 20rem;
  }

  @media (max-width: 367px){
    width: 15rem;
  }
`;

export const ContainerBtnForm = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

`;

export const BtnForm = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  background-color: #657bca;
  color: #fff;
  margin-top: 1rem;
  height: 3rem;
  width: 200px;
  cursor: pointer;
`