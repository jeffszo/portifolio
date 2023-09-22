import { Header } from "./components/Header";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contact";
import "./styles/global.css";
import "@radix-ui/themes/styles.css";
import Fade from "react-reveal";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [theme, setTheme] = useState('Light')
  const themeToggler = () => {
    theme === "light" ? setTheme('dark'): setTheme('light')
  }


  return (
    <div className="scrollable-container">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Fade delay={5000}>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
        <Contacts></Contacts>
      </Fade>
    </div>
  );
}
