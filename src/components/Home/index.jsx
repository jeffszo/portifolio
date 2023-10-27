import * as S from "./styles";
// import Fade from "react-reveal";

export function Home() {
  return (
    <S.Container>
      <S.ContainerApresentation>
        <S.TitleDesc>Hi, my name is Jeferson and</S.TitleDesc>
        <S.Describe>I am developer <S.Span>frontend</S.Span> </S.Describe>
      </S.ContainerApresentation>
      <S.ContainerRedes>
        <S.Link target="blank" href="https://www.linkedin.com/in/jeferson-ferreira-934abb234/">
          <S.Linkedin/>
        </S.Link>
        <S.Link target="blank" href="https://github.com/jeffszo">
          <S.Github/>
        </S.Link>
        <S.Link target="blank" href="https://twitter.com/jeffszo7">
          <S.Twitter/>
        </S.Link>
      </S.ContainerRedes>
    </S.Container>
  );
}
