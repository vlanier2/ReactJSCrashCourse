import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function About(props) {
  return (
    <div>
        <h4>Version 1.0.0</h4>
        <Link to='/'>Go Back</Link>
    </div>
  )
}

About.propTypes = {}

export default About
