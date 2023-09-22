import { ContainerOne, ContainerTwo, Title } from "./styles.tsx";
import { FaReact, FaFigma, FaSass, FaGitAlt } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { TfiHtml5 } from "react-icons/tfi";
import { SiStyledcomponents } from "react-icons/si";
import Fade from "react-reveal";

export function Skills() {
  return (
    <div>
      <div>
        <Fade delay={15000}>
          <Title
            style={{
              marginTop: 350,
              marginBottom: 35,
            }}
          >
            Skills
          </Title>
        </Fade>

        <ContainerOne>
          <Fade delay={15000} top>
            <TfiHtml5
              style={{
                fontSize: 70,
                marginRight: 80,
                paddingLeft: 10,
                cursor: "pointer",
                color: "#000",
              }}
            ></TfiHtml5>
          </Fade>
          <Fade delay={15000} top>
            <IoLogoCss3
              style={{
                fontSize: 70,
                marginRight: 80,
                paddingLeft: 10,
                cursor: "pointer",
                color: "#000",
              }}
            ></IoLogoCss3>
          </Fade>
          <Fade delay={15000} top>
            <IoLogoJavascript
              style={{
                fontSize: 70,
                marginRight: 80,
                paddingLeft: 10,
                cursor: "pointer",
                color: "#000",
              }}
            ></IoLogoJavascript>
          </Fade>
          <Fade delay={15000} top>
            <FaReact
              style={{
                fontSize: 70,
                marginRight: 80,
                paddingLeft: 10,
                cursor: "pointer",
                color: "#000",
              }}
            />
          </Fade>
        </ContainerOne>

        <ContainerTwo
          style={{
            marginTop: 45,
          }}
        >
          <Fade delay={15000} top>
            <FaFigma
              style={{
                fontSize: 70,
                marginRight: 80,
                paddingLeft: 10,
                cursor: "pointer",
                color: "#000",
              }}
            />
          </Fade>
          <Fade delay={15000} top>
            <SiStyledcomponents
              style={{
                fontSize: 70,
                marginRight: 80,
                paddingLeft: 10,
                cursor: "pointer",
                color: "#000",
              }}
            />
          </Fade>
          <Fade delay={15000} top>
            <FaSass
              style={{
                fontSize: 70,
                marginRight: 80,
                paddingLeft: 10,
                cursor: "pointer",
                color: "#000",
              }}
            ></FaSass>
          </Fade>
          <Fade delay={15000} top>
            <FaGitAlt
              style={{
                fontSize: 70,
                marginRight: 80,
                paddingLeft: 10,
                cursor: "pointer",
                color: "#000",
              }}
            />
          </Fade>
        </ContainerTwo>
      </div>
    </div>
  );
}
