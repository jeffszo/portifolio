import { Container, Lista, ItemLista, Menu, ListaTwo} from "./styles";

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
      <ListaTwo>
        <Menu />
      </ListaTwo>
    </Container>
  );
}
