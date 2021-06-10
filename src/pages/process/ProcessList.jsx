import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Typography } from '@material-ui/core'
import FolderIcon from '@material-ui/icons/Folder'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import GroupWorkIcon from '@material-ui/icons/GroupWork'
import {useHistory} from 'react-router-dom'

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
    border: '1px solid red',
  },
  list_item_left: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
    cursor: 'pointer',
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
          All Processes
        </Typography>
        {/* <ProcessListHead /> */}
        
        {[0, 1, 2, 3].map((value, index) => {
          return <ProcessListItem key={index} onProcessClicked={() => history.push(`/process/start/${index}`)} />
        })}
      </List>
    </div>
  )
}

// const ProcessListHead = () => {
//   const classes = useState()
//   return (
//     <ListItem
//       dense
//       // onClick={handleToggle(value)}
//       className={classes.list_item_head}
//     >
//       {/* <ListItemIcon>
//         <FolderIcon />
//       </ListItemIcon> */}
//       <ListItemText primary={`Name`} />
//       <ListItemText primary={`Content`} />
//       <ListItemText primary={`Last Updated`} />
//       <ListItemText primary={`Collaborators`} />
//     </ListItem>
//   )
// }

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
        <div className={classes.list_item_left} onClick={() => onProcessClicked()}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary={`Line item ${1}`} />
          {/* <ListItemSecondaryAction>
          <IconButton edge='end' aria-label='comments'>
            <CommentIcon />
          </IconButton>
        </ListItemSecondaryAction> */}
          <ListItemText primary='3 diagrams' />
        </div>
        <ListItemText primary='23-12-2021' />

        <ListItemIcon>
          <GroupWorkIcon />
        </ListItemIcon>
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
