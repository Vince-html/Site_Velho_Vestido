// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  
    margin: 0 auto;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  
    max-width: 80vw;
    box-sizing: border-box;



   &::after, &::before {
    box-sizing: border-box;
  }


}
.mainContainer {
  margin: 0 auto;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
}



`;

export default GlobalStyle;
