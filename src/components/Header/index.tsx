import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { Container, Lista, ItemLista, ListaTwo, ItemListaTwo } from "./styles";
// import { Globe } from "phosphor-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isIconShow, setIsIconShow] = useState(false);
  // const [isIconMood, setIsIconMood] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsIconShow(!isIconShow);
  };


  const MenuIcon = isIconShow ? (
    <AiOutlineClose size={40} />
  ) : (
    <HiOutlineMenu size={40} />
  );
  // const MoodIcon = isIconMood? (
  //   <PiSunDimThin size={40} />
  // ) : (
  //   <MdDarkMode size={40} />
  // );

  return (
    <Container>
      <Lista>
        <ItemLista href="#about">Sobre</ItemLista>
        <ItemLista href="#tools">Tecnologias</ItemLista>
        <ItemLista href="#experience">Serviços</ItemLista>
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
            <ItemListaTwo href="#experience">Tecnologias</ItemListaTwo>
            <ItemListaTwo href="#tools">Serviços</ItemListaTwo>
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
