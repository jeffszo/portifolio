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
        <ItemLista href="#home">Home</ItemLista>
        <ItemLista href="#about">About</ItemLista>
        <ItemLista href="#experience">Experience</ItemLista>
        <ItemLista href="#tools">Tools</ItemLista>
        <ItemLista href="#projects">Projects</ItemLista>
        <ItemLista href="#contacts">Contacts</ItemLista>
      </Lista>
      <ListaTwo>
        <ItemListaTwo onClick={toggleMenu}>{MenuIcon}</ItemListaTwo>
        {isOpen && (
          <>
        <ItemListaTwo href="#home">Home</ItemListaTwo>
        <ItemListaTwo href="#about">About</ItemListaTwo>
        <ItemListaTwo href="#experience">Experience</ItemListaTwo>
        <ItemListaTwo href="#tools">Tools</ItemListaTwo>
        <ItemListaTwo href="#projects">Projects</ItemListaTwo>
        <ItemListaTwo href="#contacts">Contacts</ItemListaTwo>
          </>
        )}
      </ListaTwo>
    </Container>
  );
}