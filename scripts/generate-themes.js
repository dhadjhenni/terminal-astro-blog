import { createHighlighter } from 'shiki'
import fs from 'fs/promises'
import path from 'path'

const THEMES = [
  'dark-plus',
  'dracula',
  'github-dark',
  'github-light',
  'light-plus',
  'material-theme',
  'min-dark',
  'min-light',
  'monokai',
  'nord',
  'one-dark-pro',
  'solarized-dark',
  'solarized-light',
  'vitesse-dark',
  'vitesse-light'
]

async function generateThemes() {
  const highlighter = await createHighlighter({
    themes: THEMES
  })
  
  const themes = {}
  
  // Generate theme data for each theme
  for (const themeName of THEMES) {
    const theme = await highlighter.getTheme(themeName)
    const colors = {}
    
    // Only include colors that exist
    Object.entries(theme.colors).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        colors[key] = value
      }
    })
    
    themes[themeName] = {
      name: themeName,
      bg: theme.bg,
      fg: theme.fg,
      colors
    }
  }
  
  // Write to themes.json
  await fs.writeFile(
    path.join(process.cwd(), 'src/themes.json'),
    JSON.stringify(themes, null, 2)
  )
  
  // Log example themes
  console.log('\nExample themes:')
  for (const themeName of ['dark-plus', 'dracula']) {
    console.log(`\n${themeName}:`, JSON.stringify(themes[themeName], null, 2))
  }
  console.log(`\nGenerated themes.json with ${Object.keys(themes).length} themes`)
}

generateThemes().catch(console.error) 