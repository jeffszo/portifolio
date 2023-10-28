import { Header } from "./components/Header";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
  import  Projects  from "./components/Projects";
import { Contacts } from "./components/Contact";
import "./styles/global.css";


export default function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>

      <Contacts></Contacts>
    </>
  );
}
