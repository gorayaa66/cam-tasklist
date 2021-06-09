import React, {useState} from 'react'
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
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
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
    [theme.breakpoints.down('md')]: {
      fontSize: '12px'
    },
  },
  icon: {
    fontSize: '5px',
  },
  close: {
    fontSize: '12px',
    cursor: 'pointer',
    '&:hover': {
      color: 'blue',
    },
    margin: '0px 5px',
  },
  btn_row: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0px',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      maxWidth: '200px',
    },
  },
  tabs_cont: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0px',
  },
  tab: {
    cursor: 'pointer',
    fontSize: '16px',
    margin: '0px 10px',
    padding: '0px 10px',
    minWidth: '60px',
    height: '28px',
    display: 'flex',
    justifyContent: 'center',
    '&:hover': {
      borderBottom: '2px solid blue',
    },
  },
  selected_tab: {
    cursor: 'pointer',
    fontSize: '16px',
    margin: '0px 10px',
    padding: '0px 10px',
    minWidth: '60px',
    display: 'flex',
    height: '28px',
    justifyContent: 'center',
    borderBottom: '2px solid red',
  },
}))

export default function ShowTask() {
  const classes = useStyles()
  const [selectedTab, setSelectedTab] = useState('Form')
  return (
    <div className={classes.task_container}>
      <TaskHeader />
      <div className={classes.btn_row}>
        <LinkButton  text={'Set follow-up date'} icon={<TodayIcon/>} />
        <LinkButton text={'Set due date'} icon={<NotificationsIcon />} />
        <LinkButton text={'Set follow-up date'} icon={<AppsIcon />} />
        <LinkButton text={'username'} icon={<PersonIcon />} close />
      </div>
      <TaskTabs selectedTab={selectedTab} onSelectTab={tab => setSelectedTab(tab)} />
    </div>
  )
}

const TaskTabs = (props) => {
    const classes = useStyles()
    const { selectedTab, onSelectTab } = props
    return (
        <div className={classes.tabs_cont}>
            {['Form', 'History', 'Diagram', 'Description'].map((tab) => <div className={selectedTab === tab? classes.selected_tab :classes.tab} onClick={() => onSelectTab(tab)}>{tab}</div>)}
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
