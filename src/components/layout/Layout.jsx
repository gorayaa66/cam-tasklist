import React from 'react'
import AuthenticatedNavbar from '../navbar/AuthenticatedNavbar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: '64px'
  },
}))

export default function Layout(props) {
    const {children} = props
    const classes = useStyles()
    return (
      <div>
        <AuthenticatedNavbar />
        <div className={classes.content}>{children}</div>
      </div>
    )
}
