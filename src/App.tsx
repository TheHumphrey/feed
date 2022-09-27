import { ThemeProvider } from 'styled-components'
import { Header, Wrapper, Sidebar } from './components'
import GlobalStyle from './styles/global'

import { theme } from './styles/theme'

type TAuthor = {
  name: string
  avatarUrl: string
  role: string
}

type TContent = {
  type: 'paragraph' | 'link'
  content: string;
}

export type TPost = {
  id: number;
  author: TAuthor;
  content: TContent[],
  publishedAt: Date
}

const posts: TPost[] = [
  {
    id: 1,
    author: {
      name: 'Fernando Barros',
      avatarUrl: 'https://github.com/TheHumphrey.png',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: ' Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-09-03 20:00:00')
  },
  {
    id: 2,
    author: {
      name: 'Euler Lobo',
      avatarUrl: 'https://github.com/eulerlobo.png',
      role: 'Fullstack Developer'
    },
    content: [
      { type: 'paragraph', content: ' Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-09-04 19:00:00')
  },
]

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Wrapper posts={posts} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
