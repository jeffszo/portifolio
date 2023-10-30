import styled from "styled-components";
// import { RiMenu4Line } from "react-icons/ri";
// import { MdDarkMode } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow-x: hidden;
  background-color: #000814;
  margin-top: 1rem;

  @media (max-width: 910px) {
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 1rem 0;
  }


`;

export const Lista = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  @media (max-width: 910px) {
    display: none;
  }
`;

export const ListaTwo = styled.div`
  display: none;
  justify-content: end;

  @media (max-width: 967px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00081430;
  }
`;

export const ItemLista = styled.a`
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

  @media (max-width: 967px) {
    display: none;
  }
`;

export const ItemListaTwo = styled.a`
  font-family: "Poppins", sans-serif;
  color: #fff;
  opacity: 0.7;
  display: none;
  cursor: pointer;
  &:hover {
    color: #657bca;
    transition: 0.2s;
    opacity: 0.9;
  }
  list-style-type: none;
  margin: 0 45px 0 0;

  @media (max-width: 967px) {
    display: block;
    margin: 0 1rem;
  }
`;

// export const Menu = styled(RiMenu4Line)`
//   font-size: 45px;
//   display: block;
//   color: #fff;
//   cursor: pointer;

//   @media (max-width: 967px) {
//     margin: 0 1rem;

//   }
// `;

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
