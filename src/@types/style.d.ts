import 'styled-components'
import { defaultThemes } from '../default'

type ThemeType = typeof defaultThemes

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
