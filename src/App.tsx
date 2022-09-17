import { ThemeProvider } from 'styled-components'
import { Header } from './components'
import GlobalStyle from './styles/global'

import { theme } from './styles/theme'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
