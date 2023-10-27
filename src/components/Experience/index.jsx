import * as S from "./styles.jsx";


export function Experience() {
  return (
    <S.ContainerGeral>
      <S.ContainerTitle>
        <S.Title>Experience</S.Title>
      </S.ContainerTitle>
      <S.ContainerExper>
        <S.TitleEmpresa>Mitikas - Tecnologia da Informação</S.TitleEmpresa>
        <S.DescEmpresa>
          Responsável pela criação de aplicações mobile com React Native. Além disso, no desenvolvimento web utilizei HTML, CSS e
          Javascript.
          <S.ContainerIcons>
            <S.Html/>
            <S.Css/>
            <S.Javascript/>
            <S.Bootstrap/>
            <S.React/>
            <S.Php/>
            <S.Mysql/>
          </S.ContainerIcons>
        </S.DescEmpresa>
        <S.PeriodoEmpresa>
          <strong>Período</strong>: Agosto/2023
        </S.PeriodoEmpresa>
      </S.ContainerExper>
    </S.ContainerGeral>
  );
}
