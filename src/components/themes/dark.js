import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['#424242', '#6d6d6d', '#1b1b1b'],
  secondary: ['#37474f', '#62727b', '#102027'],
  text: ['#ffffff'],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
}

theme.sizes = {
  maxWidth: '1100px',
}

export default theme
