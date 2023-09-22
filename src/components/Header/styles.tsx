import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem;

  @media(max-width: 320px){
    
  }
  
`;

export const Lista = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 1.3%;
  li:nth-child(1) {
    margin-right: 24%;
  }
  li:nth-child(8) {
    margin-left: 24%;
  }
`;

export const ItemLista = styled.li`
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  &:hover {
    color: #657bca;
    transition: 0.2s;
    opacity: 0.9;
  }
  list-style-type: none;
  margin: 0 45px 0 0;
`;
