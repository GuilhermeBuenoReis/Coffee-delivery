import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import { defaultThemes } from './styles/themes/default'
import { CartContextProvider } from './context/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
