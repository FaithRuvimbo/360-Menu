import PropTypes from 'prop-types'
import React from 'react'

const Heading = ({ children }) => (
  <h1 style={{ color: 'hotpink' }}>{children}</h1>
)

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Heading
