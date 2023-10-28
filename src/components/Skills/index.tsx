import * as S from "./styles.js";

export function Skills() {
  return (
    <>
      <S.Container>
        <S.Title>Tools</S.Title>
        <S.ContainerGeral>
          <S.ContainerOne>
            <S.ContainerIcon>
              <S.Html />
            </S.ContainerIcon>
            <S.ContainerIcon>
              <S.Css />
            </S.ContainerIcon>
            <S.ContainerIcon>
              <S.Javascript />
            </S.ContainerIcon>
            <S.ContainerIcon>
              <S.React />
            </S.ContainerIcon>
          </S.ContainerOne>

          <S.ContainerTwo>
            <S.ContainerIcon>
              <S.Figma />
            </S.ContainerIcon>
            <S.ContainerIcon>
              <S.Styled />
            </S.ContainerIcon>
            <S.ContainerIcon>
              <S.Sass />
            </S.ContainerIcon>
            <S.ContainerIcon>
              <S.Git />
            </S.ContainerIcon>
          </S.ContainerTwo>
        </S.ContainerGeral>
      </S.Container>
    </>
  );
}
