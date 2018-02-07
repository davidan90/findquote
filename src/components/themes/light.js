import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['#e0e0e0', '#aeaeae', '#ffffff'],
  secondary: ['#d6d6d6', '#c1d5e0', '#62757f'],
  text: ['#000000', '#e0e0e0', '#d6d6d6'],
  background: ['#eeeeee', '#e0e0e0', '#212121'],
  danger: ['#d32f2f', '#484848'],
  white: ['#eeeeee'],
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
