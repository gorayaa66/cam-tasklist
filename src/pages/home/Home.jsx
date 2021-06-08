import React from 'react'
import AppDrawer from '../../components/drawer/AppDrawer'

import AuthenticatedNavbar from '../../components/navbar/AuthenticatedNavbar'
import TasksFilter from '../../components/tasksFilters/TasksFilter'
import AddTasksFilter from '../../components/tasksFilters/AddTasksFilter'
import AddTask from '../../components/tasks/AddTask'
import Tasks from '../../components/tasks/Tasks'
import ShowTask from '../../components/tasks/ShowTask'


export default function Home() {
  const [openDrawer, setOpenDrawer] = React.useState(false)
  const [openTasksDrawer, setOpenTasksDrawer] = React.useState(false)

  const [openFilterDrawer, setOpenFilterDrawer] = React.useState(false)

  return (
    <div>
      <AuthenticatedNavbar onOpenDrawer={() => setOpenDrawer(!openDrawer)} />
      <AppDrawer
        openDrawer={openFilterDrawer}
        onToggleDrawer={(val) => setOpenFilterDrawer(val)}
        head={
          <AddTasksFilter
            openFilterDrawer={openFilterDrawer}
            toggleFilterDrawer={(val) => setOpenFilterDrawer(val)}
          />
        }
        content={
          <TasksFilter
            openFilterDrawer={openFilterDrawer}
            toggleFilterDrawer={(val) => setOpenFilterDrawer(val)}
          />
        }
      >
        <AppDrawer
          openDrawer={openTasksDrawer}
          onToggleDrawer={(val) => setOpenTasksDrawer(val)}
          head={
            <AddTask
              openTasksDrawer={openTasksDrawer}
              toggleTasksDrawer={(val) => setOpenTasksDrawer(val)}
            />
          }
          content={
            <Tasks
              openTasksDrawer={openTasksDrawer}
              toggleTasksDrawer={(val) => setOpenTasksDrawer(val)}
            />
          }
        >
          <ShowTask />
        </AppDrawer>
      </AppDrawer>
    </div>
  )
}
