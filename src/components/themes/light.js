import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['#a5d6a7', '#d7ffd9', '#75a478'],
  secondary: ['#4caf50', '#80e27e', '#087f23'],
  text: ['#000000',],
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
