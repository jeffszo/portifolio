import { Container, Describe, Span } from "./styles";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { SiMinutemailer } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import Fade from "react-reveal";

export function Home() {
  return (
    <Container>
      <Fade delay={15000} top>
        <Describe
          style={{
            marginTop: 170,
          }}
        >
          Hi, my name is Jeferson Ferreira and
        </Describe>
        <Describe
          style={{
            fontSize: 102,
            marginRight: 10,
          }}
        >
          I am developer <Span>front-end</Span>
        </Describe>

        <Describe>
          <BsLinkedin
            cursor={PointerEvent}
            href="https://www.linkedin.com/in/jeferson-ferreira-934abb234/"
            style={{
              fontSize: 30,
              marginRight: 4,
            }}
          ></BsLinkedin>
          <ImGithub
            href="https://github.com/jeffszo"
            target="blank"
            style={{
              fontSize: 30,
              marginRight: 4,
            }}
          ></ImGithub>
          <RiTwitterXFill
            href="https://twitter.com/jeffszo7"
            target="blank"
            style={{
              fontSize: 30,
            }}
          ></RiTwitterXFill>
          <SiMinutemailer
            type="email"
            target="blank"
            style={{
              fontSize: 30,
              marginRight: 4,
            }}
          ></SiMinutemailer>
        </Describe>
      </Fade>
      <Fade delay={15000}></Fade>
    </Container>
  );
}
