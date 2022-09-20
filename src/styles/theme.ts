import 'styled-components'

export const theme = {
  colors: {
    white: '#FFF',

    gray_100: '#E1E1E6',
    gray_300: '#C4C4CC',
    gray_400: '#8D8D99',
    gray_600: '#323238',
    gray_700: '#29292E',
    gray_800: '#202024',
    gray_900: '#121214',

    green_300: '#00B37E',
    green_500: '#00875F',
  }
}

declare module 'styled-components' {
  type TTheme = typeof theme

  export interface DefaultTheme extends TTheme { }
}