import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { Container, Lista, ItemLista, ListaTwo, ItemListaTwo } from "./styles";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isIconShow, setIsIconShow] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsIconShow(!isIconShow);
  };


  const MenuIcon = isIconShow ? (
    <AiOutlineClose size={40} />
  ) : (
    <HiOutlineMenu size={40} />
  );


  return (
    <Container>
      <Lista>
        <ItemLista href="#about">Sobre</ItemLista>
        <ItemLista href="#skills">Tecnologias</ItemLista>
        <ItemLista href="#services">Serviços</ItemLista>
        <ItemLista href="#projects">Projetos</ItemLista>
        <ItemLista href="#contacts">Contato</ItemLista>
        {/* <ItemLista>
        <Globe size={32} />
        </ItemLista> */}
      </Lista>
      {/* <ItemListaTwo onClick={toggleIcon}>{MoodIcon}</ItemListaTwo> */}
      <ListaTwo>
        <ItemListaTwo onClick={toggleMenu}>{MenuIcon}</ItemListaTwo>
        {isOpen && (
          <>
            <ItemListaTwo href="#about">Sobre</ItemListaTwo>
            <ItemListaTwo href="#skills">Tecnologias</ItemListaTwo>
            <ItemListaTwo href="#services">Serviços</ItemListaTwo>
            <ItemListaTwo href="#projects">Projetos</ItemListaTwo>
            <ItemListaTwo href="#contacts">Contato</ItemListaTwo>
            {/* <ItemListaTwo>
            <Globe size={32} />
            </ItemListaTwo> */}
          </>
        )}
      </ListaTwo>
    </Container>
  );
}
