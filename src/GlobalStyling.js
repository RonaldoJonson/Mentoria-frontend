import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
  font-family: 'Red Hat Display', sans-serif;
}

body{
  background:#fff no-repeat center top;
  -webkit-font-smoothing:antialiased;
}

section {
  width:98vw;
  margin: auto;
}

body, input, button {
  font-size: 1rem;
}

Input, select, button{
  color: #1A1E23;
  background: #FFFFFF;
  border: none;
  border-radius: 9px;
}

`;
