import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'
import scrollbar from 'tailwind-scrollbar'
import themes from './src/themes.json'

// Choose your themes here
const LIGHT_THEME = 'github-light'
const DARK_THEME = 'github-dark'

const lightTheme = themes[LIGHT_THEME]
const darkTheme = themes[DARK_THEME]

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cascadia Code', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        lightModeBg: lightTheme.colors['background'],
        darkModeBg: darkTheme.colors['background'],
        accentColorDark1: darkTheme.colors['accentColor1'],
        accentColorLight1: lightTheme.colors['accentColor1'],
        accentColorDark2: darkTheme.colors['accentColor2'],
        accentColorLight2: lightTheme.colors['accentColor2'],
        accentColorDark3: darkTheme.colors['accentColor3'],
        accentColorLight3: lightTheme.colors['accentColor3'],
        accentColorDark4: darkTheme.colors['accentColor4'],
        accentColorLight4: lightTheme.colors['accentColor4'],
        lightModeText: lightTheme.colors['foreground'],
        darkModeText: darkTheme.colors['foreground']
      },
      screens: {
        w500: { max: '500px' },
        w400: { max: '400px' }
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typography: (theme: any) => ({
        lightMode: {
          css: {
            '--tw-prose-kbd': theme('colors.lightModeText'),
            '--tw-prose-quote-borders': theme('colors.lightModeText'),
            '--tw-prose-bullets': theme('colors.lightModeText'),
            '--tw-prose-code': theme('colors.lightModeText'),
            '--tw-prose-headings': theme('colors.accentColorLight1'),
            'pre': {
              'background-color': 'transparent !important'
            }
          }
        },
        darkMode: {
          css: {
            '--tw-prose-kbd': theme('colors.darkModeText'),
            '--tw-prose-quote-borders': theme('colors.darkModeText'),
            '--tw-prose-bullets': theme('colors.darkModeText'),
            '--tw-prose-code': theme('colors.darkModeText'),
            '--tw-prose-headings': theme('colors.accentColorDark1'),
            'pre': {
              'background-color': 'transparent !important'
            }
          }
        }
      })
    }
  },
  darkMode: 'class',
  plugins: [typography, scrollbar]
} satisfies Config
