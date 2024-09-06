import * as S from "./styles.jsx";

export function Experience() {
  return (
    <S.ContainerGeral id="services">
      <S.ContainerTitle>
        <S.Title>Serviços_</S.Title>
        <S.Desc>As minhas atribuições e responsabilidades</S.Desc>
      </S.ContainerTitle>

      <S.ContainerAllCardsOne>
        <S.ContainerCardService>
          <S.IconOne />
          <S.TypeCardSerive>Criação de interfaces responsivas</S.TypeCardSerive>
        </S.ContainerCardService>

        <S.ContainerCardService>
          <S.IconTwo />
          <S.TypeCardSerive>Consumo de APIs</S.TypeCardSerive>
        </S.ContainerCardService>
      </S.ContainerAllCardsOne>

      <S.ContainerAllCardsTwo>
        <S.ContainerCardService>
          <S.IconThree />
          <S.TypeCardSerive>Otimização para perfomance</S.TypeCardSerive>
        </S.ContainerCardService>
        <S.ContainerCardService>
          <S.IconFour />
          <S.TypeCardSerive>
            Experiência do usuário
          </S.TypeCardSerive>
        </S.ContainerCardService>
      </S.ContainerAllCardsTwo>
    </S.ContainerGeral>
  );
}
