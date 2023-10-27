import * as S from "./styles.js";

import Fade from "react-reveal";

export function Skills() {
  return (
    <S.Container>
      <S.Title>Tools</S.Title>
      <S.ContainerGeral>
        <Fade delay={15000}></Fade>
        <S.ContainerOne>
          <Fade delay={15000} top>
            <S.ContainerIcon>
              <S.Html />
            </S.ContainerIcon>
          </Fade>
          <Fade delay={15000} top>
            <S.ContainerIcon>
              <S.Css />
            </S.ContainerIcon>
          </Fade>
          <Fade delay={15000} top>
            <S.ContainerIcon>
              <S.Javascript />
            </S.ContainerIcon>
          </Fade>
          <Fade delay={15000} top>
            <S.ContainerIcon>
              <S.React />
            </S.ContainerIcon>
          </Fade>
        </S.ContainerOne>

        <S.ContainerTwo>
          <Fade delay={15000} top>
            <S.ContainerIcon>
              <S.Figma />
            </S.ContainerIcon>
          </Fade>
          <Fade delay={15000} top>
            <S.ContainerIcon>
              <S.Styled />
            </S.ContainerIcon>
          </Fade>
          <Fade delay={15000} top>
            <S.ContainerIcon>
              <S.Sass />
            </S.ContainerIcon>
          </Fade>
          <Fade delay={15000} top>
            <S.ContainerIcon>
              <S.Git />
            </S.ContainerIcon>
          </Fade>
        </S.ContainerTwo>
      </S.ContainerGeral>
    </S.Container>
  );
}
