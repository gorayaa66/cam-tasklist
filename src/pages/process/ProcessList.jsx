import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Button, Typography } from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import { useHistory } from 'react-router-dom'
import AccountTreeIcon from '@material-ui/icons/AccountTree'

const useStyles = makeStyles((theme) => ({
  list_cont: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  root: {
    width: '70%',
    backgroundColor: theme.palette.background.paper,
    marginTop: '40px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  heading: {
    margin: '15px 0px',
  },
  list_item: {
    background: '#eee',
    margin: '5px 0px',
  },
  list_item_head: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  list_item_left: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '60%',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '45%',
    },
  },
  list_item_head_left: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '45%',
    },
  },
  expand: {
    cursor: 'pointer',
  },
}))

export default function ProcessList() {
  const classes = useStyles()
  const history = useHistory()
  return (
    <div className={classes.list_cont}>
      <List className={classes.root}>
        <Typography className={classes.heading} variant='h6' noWrap>
          Select a process to start
        </Typography>
        <ProcessListHead />

        {[0, 1, 2, 3].map((value, index) => {
          return (
            <ProcessListItem
              key={index}
              onProcessClicked={() => history.push(`/process/start/${index}`)}
            />
          )
        })}
      </List>
    </div>
  )
}

const ProcessListHead = () => {
  const classes = useStyles()
  return (
    <ListItem dense className={classes.list_item_head}>
      <div className={classes.list_item_head_left}>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary={`Process`} />
      </div>
      <ListItemText primary={`Created`} />
      <ListItemText primary={`Updated`} />
      <div style={{width: '90px'}}></div>
    </ListItem>
  )
}

const ProcessListItem = (props) => {
  const { onProcessClicked } = props
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <div>
      <ListItem
        dense
        // onClick={handleToggle(value)}
        className={classes.list_item}
      >
        <div
          className={classes.list_item_left}
          onClick={() => onProcessClicked()}
        >
          <ListItemIcon>
            <AccountTreeIcon />
          </ListItemIcon>
          <ListItemText primary={`Line item ${1}`} />
          {/* <ListItemSecondaryAction>
          <IconButton edge='end' aria-label='comments'>
            <CommentIcon />
          </IconButton>
        </ListItemSecondaryAction> */}
        </div>
        <ListItemText primary='12-26-2021' />
        <ListItemText primary='12-27-2021' />
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          size='small'
          onClick={() => setOpen(!open)}
        >
          preview
          {open ? (
            <ExpandLess
              className={classes.expand}
              onClick={() => setOpen(!open)}
            />
          ) : (
            <ExpandMore
              className={classes.expand}
              onClick={() => setOpen(!open)}
            />
          )}
        </Button>
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem button>
            <ListItemText primary='Diagram placeholder' />
          </ListItem>
        </List>
      </Collapse>
    </div>
  )
}
