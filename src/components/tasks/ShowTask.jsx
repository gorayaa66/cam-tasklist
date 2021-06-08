import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import TodayIcon from '@material-ui/icons/Today'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AppsIcon from '@material-ui/icons/Apps'
import PersonIcon from '@material-ui/icons/Person'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles((theme) => ({
  task_container: {
    padding: '0px 20px',
  },
  task_header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  list_item: {
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
      borderLeft: '2px solid blue',
    },
  },
  btn_link_cont: {
    display: 'flex',
    alignItems: 'center',
  },
  btn_link: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      color: 'blue',
    },
  },
  close: {
    fonrSize: '12px',
    cursor: 'pointer',
  },
  btn_row: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0px'
  },
}))

export default function ShowTask() {
  const classes = useStyles()
  return (
    <div className={classes.task_container}>
      <TaskHeader />
      <div className={classes.btn_row}>
        <LinkButton text={'Set follow-up date'} icon={<TodayIcon />} />
        <LinkButton text={'Set due date'} icon={<NotificationsIcon />} />
        <LinkButton text={'Set follow-up date'} icon={<AppsIcon />} />
        <LinkButton text={'Set follow-up date'} icon={<PersonIcon />} close />
      </div>
    </div>
  )
}

const LinkButton = (props) => {
  const { text, icon, close } = props
  const classes = useStyles()
  return (
    <div className={classes.btn_link_cont}>
      <div className={classes.btn_link}>
        {icon}
        {text}
      </div>
      {close && (
        <Tooltip title='Unclaim' aria-label='Unclaim'>
          <CloseIcon className={classes.close} />
        </Tooltip>
      )}
    </div>
  )
}

const TaskHeader = () => {
  const classes = useStyles()
  return (
    <div className={classes.task_header}>
      <Typography variant='h4' component='h2'>
        1st Task
      </Typography>
      <Typography variant='h6'>1234rfd</Typography>
    </div>
  )
}
