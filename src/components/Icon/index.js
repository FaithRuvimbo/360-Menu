import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ name, size }) => {
  let content
  switch (name) {
    case 'heart':
      content = '♥️'
      break
    case 'drinks':
      content = '🍸'
      break
    case 'copy':
      content = '🆇'
      break
    case 'plus':
      content = '➕'
      break

    case 'trash':
      content = '🗑'
      break

    default:
      break
  }

  let iconSize
  switch (size) {
    case 'small':
      iconSize = 10
      break
    case 'medium':
      iconSize = 16
      break
    case 'large':
      iconSize = 24
      break

    default:
      break
  }

  return (
    <div
      style={{
        fontSize: `${iconSize}px`,
        backgroundColor: 'salmon',
        height: `${iconSize}px`,
        width: `${iconSize}px`,
      }}
    >
      {content}
    </div>
  )
}

Icon.propTypes = {
  /**
   * name of the icon
   */
  name: PropTypes.string.isRequired,
  /**
   * size of the icon to display
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Icon.defaultProps = {
  size: 'medium',
}

export default Icon
