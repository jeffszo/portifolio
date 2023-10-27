import * as S from "./styles.jsx";

export function Experience() {
  return (
    <S.ContainerGeral>
      <S.ContainerTitle>
        <S.Title>Experience</S.Title>
      </S.ContainerTitle>
      <S.ContainerExper>
        <S.TitleEmpresa>Mitikas - Information Technology</S.TitleEmpresa>
        <S.DescEmpresa>
          Responsible for creating mobile applications with React Native.
          Furthermore, in web development I used HTML, CSS and JavaScript.
          <S.ContainerIcons>
            <S.Html />
            <S.Css />
            <S.Javascript />
            <S.Bootstrap />
            <S.React />
            <S.Php />
            <S.Mysql />
          </S.ContainerIcons>
        </S.DescEmpresa>
        <S.PeriodoEmpresa>
          <strong>Period</strong>: August/2023
        </S.PeriodoEmpresa>
      </S.ContainerExper>
    </S.ContainerGeral>
  );
}
