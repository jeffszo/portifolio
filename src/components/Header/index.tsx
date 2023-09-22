import { Container, Lista, ItemLista } from "./styles";
import { BsGlobe } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
// import { useState } from "react";

export function Header() {
  // const [showElement, setShowElement] = useState(false)
  // const showOrHide = () => setShowElement(true)

  return (
    <Container>
      <Lista>
        <ItemLista>
          <BsGlobe
            style={{
              color: "#657BCA",
              fontSize: 20,
            }}
          ></BsGlobe>
          {/* { showElement ? <p>Tô aqui</p> : null }  */}
        </ItemLista>
        <ItemLista>Home</ItemLista>
        <ItemLista>About</ItemLista>
        <ItemLista>Experience</ItemLista>
        <ItemLista>Skills</ItemLista>
        <ItemLista>Projects</ItemLista>
        <ItemLista>Contacts</ItemLista>
        <ItemLista>
          <MdDarkMode
            style={{
              color: "#657BCA",
              fontSize: 25,
            }}
          ></MdDarkMode>
        </ItemLista>
      </Lista>
    </Container>
  );
}
