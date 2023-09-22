import * as S from "./styles.tsx";
import { BsFillBalloonHeartFill } from "react-icons/bs";

export function About() {
  return (
    <S.Container>
      <S.AboutTitle>About</S.AboutTitle>

      <S.AboutDesc>
        I develop responsive, visually pleasing and performant websites
        
        <BsFillBalloonHeartFill
          style={{
            fontSize: 25,
          }}
        ></BsFillBalloonHeartFill>
      </S.AboutDesc>
    </S.Container>
  );
}
