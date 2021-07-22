import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutCommons' 

const GlobalStyle = createGlobalStyle`
/* Reset CSS */
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: #F5D7F1
  }

  #__next{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#F200EA',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
