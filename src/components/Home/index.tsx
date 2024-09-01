import * as S from "./styles";
import Dotted from "../../../assets/Dotted.png";
import { Button } from "@chakra-ui/react";


export function Home() {
  return (
    <S.Container id="home">
      <S.ContainerApresentation>
        <S.ContainerDottedTwo>
          <S.IcontDotted src={Dotted} />
          <S.IcontDotted src={Dotted} />
        </S.ContainerDottedTwo>
        <S.ContainerText>

          <S.TitleDesc>
            Olá, meu nome é Jeferson Ferreira!
          </S.TitleDesc>
          <S.Describe>
            Desenvolvedor <S.Span>front-end</S.Span>{" "}
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
          <S.Link href="../../../public/Jeferson Ferreira - Front-end.pdf" download>
            <Button>BAIXAR CURRÍCULO</Button>
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
