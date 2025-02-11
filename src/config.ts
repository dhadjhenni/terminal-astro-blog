import type { ThemeObjectOrShikiThemeName } from 'astro-expressive-code'

type Config = {
  author: string
  title: string
  description: string
  lang: string
  themes: {
    dark: ThemeObjectOrShikiThemeName
    light: ThemeObjectOrShikiThemeName
  }
}

export default {
  author: 'Djouwad Hadj-Henni',
  title: 'Terminal - Astro blog theme',
  description: 'Terminal inspired blog theme for astro',
  lang: 'en',
  themes: {
    dark: 'github-dark',
    light: 'github-light'
  }
} satisfies Config
