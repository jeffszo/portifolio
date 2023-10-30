import * as S from "./styles.js";



export function Contacts() {


 const btn = () => {
    alert('Enviado com sucesso!')
  }





  return (
    <S.Container id="contacts">
      <S.Title>Contacts</S.Title>
      <S.Subtitle>Contact me</S.Subtitle>
      <S.ContainerForm>
        <S.Form>
          <S.Label>Name:</S.Label>
          <S.Input placeholder="Enter your name"></S.Input>

          <S.Label>E-mail:</S.Label>
          <S.Input placeholder="Enter your email"></S.Input>

          <S.Label>Subject:</S.Label>
          <S.Input placeholder="State the subject"></S.Input>

          <S.Label>Message:</S.Label>
          <S.Descricao></S.Descricao>

          <S.ContainerBtnForm>
            <S.BtnForm onClick={btn} type="submit">Send message</S.BtnForm>
          </S.ContainerBtnForm>
        </S.Form>
      </S.ContainerForm>
    </S.Container>
  );
}
