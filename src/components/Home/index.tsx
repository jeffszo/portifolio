import * as S from "./styles";
import Dotted from "../../../assets/Dotted.png";
// import Fade from "react-reveal";

export function Home() {
  return (
    <S.Container>
      <S.ContainerApresentation>
        <S.ContainerDottedTwo>
          <S.IcontDotted src={Dotted} />
          <S.IcontDotted src={Dotted} />
        </S.ContainerDottedTwo>
        <S.ContainerText>
          <S.TitleDesc>Hi, my name is Jeferson Ferreira and</S.TitleDesc>
          <S.Describe>
            I'm developer <S.Span>frontend</S.Span>{" "}
          </S.Describe>
        </S.ContainerText>
        <S.ContainerRedes>
          <S.Link
            target="blank"
            href="https://www.linkedin.com/in/jeferson-ferreira-934abb234/"
          >
            <S.Linkedin />
          </S.Link>
          <S.Link target="blank" href="https://github.com/jeffszo">
            <S.Github />
          </S.Link>
          <S.Link target="blank" href="https://twitter.com/jeffszo7">
            <S.Twitter />
          </S.Link>
        </S.ContainerRedes>
        <S.ContainerDotted>
          <S.IcontDotted src={Dotted} />
          <S.IcontDotted src={Dotted} />
        </S.ContainerDotted>
      </S.ContainerApresentation>
    </S.Container>
  );
}
