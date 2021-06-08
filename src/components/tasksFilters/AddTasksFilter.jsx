import React from 'react'
import Add from '@material-ui/icons/Add'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
  },
  list_item: {
    display: 'flex',
  },
  list_icon: {
    cursor: 'pointer',
  },
  list_text: {
    cursor: 'pointer',
  },
}))


export default function AddTasksFilter(props) {
    const { openFilterDrawer, toggleFilterDrawer } = props
    const classes = useStyles()

    return (
      <List className={openFilterDrawer ? classes.list : {}}>
        {[{ title: 'Create a filter', icon: <Add /> }].map(
          ({ title, icon }, index) => (
            <ListItem
              className={classes.list_item}
              key={index}
              onClick={() => toggleFilterDrawer(!openFilterDrawer)}
              onKeyDown={() => toggleFilterDrawer(!openFilterDrawer)}
            >
              <ListItemText className={classes.list_text} primary={title} />
              <Tooltip title='Add filter'>
                  <ListItemIcon className={classes.list_icon}>{icon}</ListItemIcon>
              </Tooltip>
            </ListItem>
          )
        )}
      </List>
    )
}
