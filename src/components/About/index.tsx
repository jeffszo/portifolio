import * as S from "./styles.tsx";


export function About() {
  return (
      <S.Container id="about">
        <S.AboutTitle>Sobre</S.AboutTitle>
        <S.AboutDesc>
          
            Desde 2022, eu decidi estudar programação, com foco no <strong>desenvolvimento front-end</strong>. No início, 
            realizei um curso da Estação Hack em parceria com Facebook, onde obtive conhencimentos sobre HTML, CSS, Javascript
            e Bootstrap. <br/><br/>
            
            Paralelamente, iniciei a minha graduação em <strong>Análise e Desenvolvimento de Sistemas</strong>. A partir do 3º semestre, conquistei um estágio e tive a oportunidade de contribuir para a recriação de um aplicativo estudantil. Atualmente, continuo desenvolvendo sites e aprimorando minhas habilidades como desenvolvedor front-end.
        </S.AboutDesc>
      </S.Container>
  );
}
