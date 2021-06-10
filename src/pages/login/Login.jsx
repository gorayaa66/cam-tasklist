import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Button, Typography } from '@material-ui/core'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  login_cont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
  },
  textField: {
    width: '400px',
    margin: '10px 0px',
  },
  button: {
    width: '400px',
    margin: '10px 0px',
  },
  [theme.breakpoints.down('sm')]: {
    textField: {
      width: '90%',
    },
    button: {
      width: '90%',
    },
  },
}))

export default function Login() {
  const classes = useStyles()
  const history = useHistory()

  return (
    <div className={classes.login_cont}>
      <Typography variant='h5'>Welcome</Typography>
      <TextField
        className={classes.textField}
        label='Username'
        variant='outlined'
        size='small'
      />
      <TextField
        className={classes.textField}
        label='Password'
        variant='outlined'
        size='small'
        type='password'
      />
      <Button className={classes.button} variant='contained' color='secondary' size="large" onClick={() => history.push("/")}>
        Log in
      </Button>
    </div>
  )
}
