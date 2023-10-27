import styled from "styled-components";
import { RiMenu4Line } from "react-icons/ri";
// import { MdDarkMode } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
  background-color: #000814;
  margin-top: 1rem;

  @media (max-width: 767px) {
    display: flex;
    justify-content: end;
    align-items: start;
    padding: 1rem 0;
  }
`;

export const Lista = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ListaTwo = styled.div`
  display: flex;
  justify-content: end;

`

export const ItemLista = styled.li`
  font-family: "Poppins", sans-serif;
  color: #fff;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    color: #657bca;
    transition: 0.2s;
    opacity: 0.9;
  }
  list-style-type: none;
  margin: 0 45px 0 0;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Menu = styled(RiMenu4Line)`
  font-size: 45px;
  display: none;
  color: #fff;

  @media (max-width: 967px) {
    margin: 0 1rem;
    display: block;
  }
`;

// export const MoodDark = styled(MdDarkMode)`
//   font-size: 30px;
//   color: #657bca;
//   transition: all 0.3s ease;
//   cursor: pointer;  &:hover {
//     transform: translateY(-5px);
//     color: #657bca;
//   }

//   @media (max-width: 767px) {
//     margin: 0 1rem;
//     display: block;
//   }
// `;
