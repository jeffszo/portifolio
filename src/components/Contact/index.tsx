import * as S from "./styles.js";
import { FaLinkedin,FaGithub,FaWhatsapp   } from "react-icons/fa6";




export function Contacts() {
 
  return (
    <S.Container id="contacts">
      <S.Title>Contato</S.Title>
      <S.Desc>Se você deseja entrar em contato comigo, pode me encontrar nas seguintes redes:</S.Desc>
      <S.ContainerIcon>
        <a target="_blank" href="https://www.linkedin.com/in/jeferson-ferreira-934abb234/">
          <FaLinkedin size='30' color="#00509d"/>
        </a>
        <a target="_blank" href="https://github.com/jeffszo">
          <FaGithub size="30" color="#808080"/>
        </a>
        <a target="_blank"  href="https://api.whatsapp.com/send/?phone=7197123061&text&type=phone_number&app_absent=0">
        <FaWhatsapp size="30" color="#25d366"/>
        </a>
      </S.ContainerIcon>
    </S.Container>
  );
}
