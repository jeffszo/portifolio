import { Container, Lista, ItemLista, Menu, MoodDark } from "./styles";

export function Header() {



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
      <Lista>
        <MoodDark />
        <Menu />
      </Lista>
    </Container>
  );
}
