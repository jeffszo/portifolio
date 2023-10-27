import * as S from "./styles.js";
// import Swal from "sweetalert2";
// import withReactContent from 'sweetalert2-react-content'


export function Contacts() {


 const btn = () => {
    alert('Enviado com sucesso!')
  }





  return (
    <S.Container>
      <S.Title>Contacts</S.Title>
      <S.Subtitle>Entre em contato comigo!</S.Subtitle>
      <S.ContainerForm>
        <S.Form>
          <S.Label>Nome:</S.Label>
          <S.Input placeholder="Informe o seu nome"></S.Input>

          <S.Label>E-mail:</S.Label>
          <S.Input placeholder="Informe o seu e-mail"></S.Input>

          <S.Label>Assunto:</S.Label>
          <S.Input placeholder="Informe o assunto"></S.Input>

          <S.Label>Mensagem</S.Label>
          <S.Descricao></S.Descricao>

          <S.ContainerBtnForm>
            <S.BtnForm onClick={btn} type="submit">Enviar mensagem</S.BtnForm>
          </S.ContainerBtnForm>
        </S.Form>
      </S.ContainerForm>
    </S.Container>
  );
}
