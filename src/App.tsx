import { ThemeProvider } from 'styled-components'
import { Header, Wrapper, Sidebar } from './components'
import GlobalStyle from './styles/global'

import { theme } from './styles/theme'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Wrapper />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
