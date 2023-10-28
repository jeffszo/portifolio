import { createGlobalStyle, styled} from "styled-components";

export const InFromTop = styled.div`
    opacity: 0;
    transform: translateY(-20px);
    animation: Top;

    @keyframes Top {
      0%{
        opacity: 0;
        transform: translateY(-20px);
      }
      100%{
        opacity: 1;
        transform: translateY(0);
      }
    }
  
`;

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }   
`;
