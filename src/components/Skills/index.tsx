import * as S from "./styles.js";

export function Skills() {
  return (
    <S.Container id="tools">
      <S.Title>Tecnologias</S.Title>
      <S.ContainerGeral>
        <S.ContainerOne>
          <S.Html />
          <S.Css />
          <S.Javascript />
          <S.Typescript />
        </S.ContainerOne>

        <S.ContainerTwo>
          <S.React />

          <S.Styled />

          <S.Nodejs />

          <S.Git />
        </S.ContainerTwo>
      </S.ContainerGeral>
    </S.Container>
  );
}
