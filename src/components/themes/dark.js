import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['#424242', '#6d6d6d', '#1b1b1b'],
  secondary: ['#62727b', '#102027', '#37474f'],
  text: ['#eeeeee', '#b0bec5', '#62727b'],
  background: ['#757575', '#616161', '#212121'],
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
