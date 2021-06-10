import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  edit: {
    display: 'flex',
    justifyContent: 'center',
    '&:hover': {
      color: 'blue !important',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  list_item: {
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
      borderLeft: '2px solid blue',
    },
  },
  selected_list_item: {
    display: 'flex',
    justifyContent: 'space-between',
    borderLeft: '2px solid red'
  },
  textField: {
    width: '250px',
    margin: '10px 0px',
  },
  hideTextField: {
    display: 'none',
  },
  time: {
    fontSize: '12px',
  },
  priority: {
    fontSize: '14px',
  },
  list_left: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  list_right: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
}))

export default function TasksFilter(props) {
    const { openTasksDrawer, toggleTasksDrawer } = props

  const classes = useStyles()

  return (
    <List className={classes.list}>
      <TextField
        className={openTasksDrawer ? classes.textField : classes.hideTextField}
        label='Filter tasks'
        variant='outlined'
        size='small'
      />
      {openTasksDrawer && ['All Tasks (9)', 'Filter 1', 'Filter 2'].map((text, index) => (
        <TaskListItem key={index} openTasksDrawer={openTasksDrawer} toggleTasksDrawer={toggleTasksDrawer} selected={index === 1 ? true:false} />
      ))}
    </List>
  )
}

const TaskListItem = (props) => {
  const {openTasksDrawer, toggleTasksDrawer, selected} = props
  const classes = useStyles()
  return (
    <ListItem
      button
      className={openTasksDrawer && !selected ? classes.list_item : classes.selected_list_item}
    >
      <div className={classes.list_left}>
        <ListItemText
          primary={'1st Task'}
          onClick={() => toggleTasksDrawer(!openTasksDrawer)}
          onKeyDown={() => toggleTasksDrawer(!openTasksDrawer)}
        />
        <ListItemText
          primary={'Created 3 days ago'}
          classes={{ primary: classes.time }}
          onClick={() => toggleTasksDrawer(!openTasksDrawer)}
          onKeyDown={() => toggleTasksDrawer(!openTasksDrawer)}
        />
      </div>
      <div className={classes.list_right}>
        <ListItemText
          primary={'Demo Demo'}
          onClick={() => toggleTasksDrawer(!openTasksDrawer)}
          onKeyDown={() => toggleTasksDrawer(!openTasksDrawer)}
        />
        <ListItemText
          primary={'50'}
          classes={{ primary: classes.priority }}
          onClick={() => toggleTasksDrawer(!openTasksDrawer)}
          onKeyDown={() => toggleTasksDrawer(!openTasksDrawer)}
        />
      </div>
    </ListItem>
  )
}
