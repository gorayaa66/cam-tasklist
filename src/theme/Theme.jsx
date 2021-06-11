import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const primaryColor = '#0071dc'
const secondaryColor = '#ffc220'
const textColor = '#fff'

const theme = createMuiTheme({
  status: {
    danger: red[500],
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: [
      'Bogle',
      'Bogle-Black',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ].join(','),
  },
  palette: {
    primary: {
      light: primaryColor,
      main: primaryColor,
      dark: primaryColor,
      contrastText: textColor,
    },
    secondary: {
      light: secondaryColor,
      main: secondaryColor,
      dark: secondaryColor,
      contrastText: textColor,
    },
  },
})

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
