import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Edit from '@material-ui/icons/Edit'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
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
    flexDirection: 'row-reverse',
  },
}))

export default function TasksFilter(props) {
    const { openFilterDrawer, toggleFilterDrawer } = props
    const classes = useStyles()

    return (
      <List>
        {['All Tasks (9)', 'Filter 1', 'Filter 2'].map((text, index) => (
          <ListItem
            button
            key={index}
            className={openFilterDrawer ? classes.list_item : {}}
          >
            <ListItemIcon
              className={classes.edit}
              onClick={() => alert('yes')}
              onKeyDown={() => alert('yes')}
            >
              <Edit />
            </ListItemIcon>
            <ListItemText
              primary={text}
              onClick={() => toggleFilterDrawer(!openFilterDrawer)}
              onKeyDown={() => toggleFilterDrawer(!openFilterDrawer)}
            />
          </ListItem>
        ))}
      </List>
    )
}
