import * as S from "./styles";
import Image from "../../../assets/img/screen-login.png";
import ImageJoker from "../../../assets/img/screen-page.png";
import Learnovation from "../../../assets/img/learnovatio.png"
import ImageRegularShow from "../../../assets/img/screen-home.png"
import { BsGithub } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";

export function Projects() {
  return (
    <S.ContainerGeral id="projects">
      <S.ContainerText>
        <S.Title>Projects</S.Title>
        <S.MouseHover>(Hover over the image *)</S.MouseHover>
      </S.ContainerText>
      <S.ContainerProjects>
        <S.Caixa>
          {/* <S.NameProject>Dashboard</S.NameProject>
          <S.DescribeProject>
            Sistema desenvolvido para registrar produtos eletrônicos. Utilizei
            <strong> HTML, CSS, Javascript e React</strong>.
          </S.DescribeProject> */}
          <S.ImgProject src={Image} />
          <S.ContainerLinks>
            <S.LinkProject backgroundColor="black">
              <BsGithub size={26} />
              code
            </S.LinkProject>
            <S.LinkProject backgroundColor="#657bca">
              <GrDeploy size={26} />
              deploy
            </S.LinkProject>
          </S.ContainerLinks>
        </S.Caixa>
        <S.Caixa>
          <S.ImgProject src={ImageJoker} />
          <S.ContainerLinks>
            <a target="blank" href="https://github.com/jeffszo/joker">
              <S.LinkProject backgroundColor="black">
                <BsGithub size={26} />
                code
              </S.LinkProject>
            </a>
            <a target="blank" href="https://joker-wheat.vercel.app/">
              <S.LinkProject backgroundColor="#657bca">
                <GrDeploy size={26} />
                deploy
              </S.LinkProject>
            </a>
          </S.ContainerLinks>
        </S.Caixa>
        
      </S.ContainerProjects>
      <S.ContainerProjects>
      <S.Caixa>
          <S.ImgProject src={Learnovation} />
          <S.ContainerLinks>
            <a target="blank" href="https://github.com/jeffszo/learnovation">
              <S.LinkProject backgroundColor="black">
                <BsGithub size={26} />
                code
              </S.LinkProject>
            </a>
            <a target="blank" href="https://learnovation.vercel.app/">
              <S.LinkProject backgroundColor="#657bca">
                <GrDeploy size={26} />
                deploy
              </S.LinkProject>
            </a>
          </S.ContainerLinks>
        </S.Caixa>
        <S.Caixa>
          <S.ImgProject src={ImageRegularShow} />
          <S.ContainerLinks>
            <a target="blank" href="https://github.com/jeffszo/regularshow">
              <S.LinkProject backgroundColor="black">
                <BsGithub size={26} />
                code
              </S.LinkProject>
            </a>
            <a target="blank" href="https://regularshow.vercel.app/">
              <S.LinkProject backgroundColor="#657bca">
                <GrDeploy size={26} />
                deploy
              </S.LinkProject>
            </a>
          </S.ContainerLinks>
        </S.Caixa>
      </S.ContainerProjects>
    </S.ContainerGeral>
  );
}
