import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

function Tasks({ tasks, onDelete, onToggle }) {

  return (
    <>
        {tasks.map((task, index) => (<Task key={index} task={task} onDelete={onDelete}
        onToggle={onToggle}/>))}
    </>
  )
}

Tasks.propTypes = {}

export default Tasks
