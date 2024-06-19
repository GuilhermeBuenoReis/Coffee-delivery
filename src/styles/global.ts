import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin:0 ;
    padding:0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}
  }

  body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;

    margin-bottom: 17.813rem;
  } 

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 1rem;
  }

  .container {
    width: 100%;
    max-width: 80rem;

    margin-right: auto;
    margin-left: auto;
  }
`
