import React, {useState} from 'react'
import ExpandMore from '@material-ui/icons/ExpandMore'

import Add from '@material-ui/icons/Add'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
// import Tooltip from '@material-ui/core/Tooltip'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  list_icon: {
    cursor: 'pointer',
  },
  list_text: {
    cursor: 'pointer',
    fontSize: '15px',
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
  }
}))


export default function AddTask(props) {
    const { openTasksDrawer } = props
    const [selectedOption, setSelectedOption] = useState('Created')
    const classes = useStyles()


    return (
      <List>
        {openTasksDrawer && [{ title: 'Created', icon: <Add /> }].map(
          ({ title, icon }, index) => (
            <ListItem
              key={index}
              // onClick={() => toggleTasksDrawer(!openTasksDrawer)}
              // onKeyDown={() => toggleTasksDrawer(!openTasksDrawer)}
            >
              <CreatedMenu
                onOptionSelected={(option) => setSelectedOption(option)}
              >
                <ListItemText
                  className={classes.list_text}
                  primary={selectedOption}
                />
                <ListItemIcon>
                  <ExpandMore />
                </ListItemIcon>
              </CreatedMenu>

              {/* <Tooltip title='Add task'>
              <ListItemIcon  className={classes.list_icon}>{icon}</ListItemIcon>
            </Tooltip> */}
            </ListItem>
          )
        )}
      </List>
    )
}


const options = [
  'Priority',
  'Due date',
  'Task name',
  'Assignee',
  'Created'
];

const ITEM_HEIGHT = 48;

function CreatedMenu({ children, onOptionSelected }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const classes = useStyles()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (option) => {
    setAnchorEl(null)
    onOptionSelected(option)
  }

  return (
    <div>
      <div className={classes.menu} onClick={handleClick}>
        {children}
      </div>
      <Menu
        id='long-menu'
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === 'None'}
            onClick={() => handleClose(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
