/// <reference types="react-scripts" />

import 'styled-components';
interface IPalette {
  main: string
  contrastText: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    bg: {
      primary: string
      secondary: string
    }
    palette: {
      common: {
        black: string
        white: string
      }
      primary: IPalette
      secondary: IPalette
   }
  }
}