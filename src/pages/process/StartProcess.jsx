import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Button, Typography } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  login_cont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
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

export default function StartProcess() {
  const classes = useStyles()
  const history = useHistory()
  const {pid} = useParams()


  return (
    <div className={classes.login_cont}>
      <Typography variant='h5'>Start process {pid}</Typography>
      <TextField
        className={classes.textField}
        label='First name'
        variant='outlined'
        size='small'
      />
      <TextField
        className={classes.textField}
        label='Last name'
        variant='outlined'
        size='small'
      />
      <TextField
        className={classes.textField}
        label='Email'
        variant='outlined'
        size='small'
        type="email"
      />
      <TextField
        className={classes.textField}
        label='Items'
        variant='outlined'
        size='small'
      />
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        size='large'
        onClick={() => history.push('/')}
      >
        Submit
      </Button>
    </div>
  )
}
