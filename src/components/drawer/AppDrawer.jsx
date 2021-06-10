import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'


const drawerWidth = 270

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    marginRight: '3px',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.enteringScreen,
    }),
    left: 'auto',
    boxShadow: '5px 0 5px -2px #eee',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    left: 'auto',
    // width: theme.spacing(7) + 1,
    maxWidth: '40px',
    boxShadow: '5px 0 5px -2px #eee',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    marginTop: '64px',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    marginTop: '4px',
  },
  list_item: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  icon: {
    height: '10px',
    width: '10px',
  },
}))

export default function AppDrawer(props) {
  const { openDrawer, onToggleDrawer,head, content, children } = props

  const classes = useStyles()


  const handleDrawerToggle = () => {
    onToggleDrawer(!openDrawer)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: openDrawer,
          [classes.drawerClose]: !openDrawer,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          }),
        }}
      >
        <div className={classes.toolbar}>
          {head}
          <IconButton
            onClick={handleDrawerToggle}
            className={!openDrawer ? classes.icon : {}}
          >
            {!openDrawer ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        {content}

        {openDrawer && <Divider />}
      </Drawer>
      <main className={classes.content}>{children}</main>
    </div>
  )
}
