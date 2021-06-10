import React, { useState } from 'react'
import Add from '@material-ui/icons/Add'
import AppModal from '../../components/modal/AppModal'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import InfoIcon from '@material-ui/icons/Info'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField } from '@material-ui/core'
import Link from '@material-ui/core/Link'


const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    margin: '5px 0px',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails)

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
  form_cont: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    minHeight: '20%',
    width: '70%',
  },
  form_head: {
    borderBottom: '1px solid black',
    padding: '15px 20px',
  },
  form_content: {
    padding: '15px 20px',
  },
  form_footer: {
    borderTop: '1px solid black',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  link: {
    margin: '0px 20px',
  },
  info: {
    display: 'flex',
    alignItems: 'flex_end',
    fontSize: '12px',
    margin: '10px 0px'
  },
  info_icon: {
    fontSize: '14px',
    margin: '0px 5px',
  },
  textField: {
    width: '100%',
    margin: '10px 0px',
  },
  general: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  general_form_cont: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  },
  general_left: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '40%'
  },
}))

export default function AddTasksFilter(props) {
  const { openFilterDrawer } = props
  const [openAddFilterModal, setOpenAddFilterModal] = useState(false)

  const classes = useStyles()

  return (
    <>
      <List className={openFilterDrawer ? classes.list : {}}>
        {openFilterDrawer && [{ title: 'Create a filter', icon: <Add /> }].map(
          ({ title, icon }, index) => (
            <ListItem
              className={classes.list_item}
              key={index}
              onClick={() => setOpenAddFilterModal(true)}
              // onClick={() => toggleFilterDrawer(!openFilterDrawer)}
              // onKeyDown={() => toggleFilterDrawer(!openFilterDrawer)}
            >
              <ListItemText className={classes.list_text} primary={title} />
              <Tooltip title='Add filter'>
                <ListItemIcon className={classes.list_icon}>
                  {icon}
                </ListItemIcon>
              </Tooltip>
            </ListItem>
          )
        )}
      </List>
      <AppModal
        openModal={openAddFilterModal}
        toggleModal={(val) => setOpenAddFilterModal(val)}
      >
        <AddFilterForm onClose={() => setOpenAddFilterModal(false)} />
      </AppModal>
    </>
  )
}

const AddFilterForm = (props) => {
  const classes = useStyles()
  const {onClose} = props
  return (
    <div className={classes.form_cont}>
      <FormHeader />
      <div className={classes.form_content}>
        <AddFilterAccordion />
      </div>
      <FormFooter onClose={onClose}/>
    </div>
  )
}

const FormFooter = (props) => {
  const classes = useStyles()
  const {onClose} = props
  return (
    <div className={classes.form_footer}>
      <Link
        className={classes.link}
        component='button'
        variant='body2'
        onClick={() => onClose()}
      >
        Close
      </Link>
      <Button variant='contained' color='primary'>
        Save
      </Button>
    </div>
  )
}

const FormHeader = () => {
  const classes = useStyles()
  return (
    <div className={classes.form_head}>
      <Typography variant='h5' noWrap>
        Create a filter
      </Typography>
    </div>
  )
}

const AddFilterAccordion = () => {
  const classes = useStyles()

  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion
        square
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <Typography>General</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.general_form_cont}>
            <div className={classes.info}>
              <InfoIcon className={classes.info_icon} />
              Customize the apperance of filter.
            </div>
            <GeneralForm />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
          <Typography>Criteria</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
          <Typography>Permissions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
          <Typography>Variables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

const GeneralForm = () => {
  const classes = useStyles()
  return (
    <div className={classes.general}>
      <div className={classes.general_left}>
        <TextField
          className={classes.textField}
          label='Name'
          variant='outlined'
          size='small'
        />
        <TextField
          className={classes.textField}
          label='Description'
          variant='outlined'
          size='small'
        />
      </div>
      <div className={classes.general_left}>
        <TextField
          className={classes.textField}
          label='Color'
          variant='outlined'
          size='small'
        />
        <TextField
          className={classes.textField}
          label='Priority'
          variant='outlined'
          size='small'
        />
        <FormControlLabel
          control={
            <Checkbox
              // checked={state.checkedB}
              // onChange={handleChange}
              name='Auto-refresh'
              color='primary'
            />
          }
          label='Auto-Refresh'
        />
      </div>
    </div>
  )
}
