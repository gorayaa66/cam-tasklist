import React, {useState} from 'react'
import AppDrawer from '../../components/drawer/AppDrawer'
import TasksFilter from '../../components/tasksFilters/TasksFilter'
import AddTasksFilter from '../../components/tasksFilters/AddTasksFilter'
import AddTask from '../../components/tasks/AddTask'
import Tasks from '../../components/tasks/Tasks'
import ShowTask from '../../components/tasks/ShowTask'


export default function Home() {
  const [openTasksDrawer, setOpenTasksDrawer] = useState(true)
  const [openFilterDrawer, setOpenFilterDrawer] = useState(true)

  const toggleDrawers = (val) => {
    setOpenFilterDrawer(val)
    setOpenTasksDrawer(val)
  }

  return (
    <div>
      <AppDrawer
        small
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
          <ShowTask
            openTasksDrawer={openTasksDrawer}
            openFilterDrawer={openFilterDrawer}
            onToggleDrawers={toggleDrawers}
          />
        </AppDrawer>
      </AppDrawer>
    </div>
  )
}
