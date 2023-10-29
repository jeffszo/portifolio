import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu4Line } from "react-icons/ri";
import {
  Container,
  Lista,
  ItemLista,
  ListaTwo,
  ItemListaTwo,
} from "./styles";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isIconShow, setIsIconShow] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsIconShow(!isIconShow);
  };

  const MenuIcon = isIconShow ? <AiOutlineClose size={50} /> : <RiMenu4Line size={50} />; 

  return (
    <Container>
      <Lista>
        <ItemLista>Home</ItemLista>
        <ItemLista>About</ItemLista>
        <ItemLista>Experience</ItemLista>
        <ItemLista>Tools</ItemLista>
        <ItemLista>Projects</ItemLista>
        <ItemLista>Contacts</ItemLista>
      </Lista>
      <ListaTwo>
        <ItemListaTwo onClick={toggleMenu}>{MenuIcon}</ItemListaTwo>
        {isOpen && (
          <>
            <ItemListaTwo>About</ItemListaTwo>
            <ItemListaTwo>Experience</ItemListaTwo>
            <ItemListaTwo>Tools</ItemListaTwo>
            <ItemListaTwo>Projects</ItemListaTwo>
            <ItemListaTwo>Contacts</ItemListaTwo>
          </>
        )}
      </ListaTwo>
    </Container>
  );
}