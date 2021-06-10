import React from 'react'
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'


const theme = createMuiTheme({
  status: {
    danger: red[500],
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  //   palette: {
  //       primary: red
  //   }
})

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
