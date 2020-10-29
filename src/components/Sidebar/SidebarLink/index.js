import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Sidebarlink = ({
  name,
  path,
  icon,
  isHighlighted,
  isActive,
  disabled,
  onClick,
}) => (
  <div
    role="button"
    onClick={() => {
      if (!disabled && onClick) {
        onClick()
      }
    }}
    className={`link-root${isActive ? ' active' : ''}${
      isHighlighted ? ' highlighted' : ''
    }${disabled ? ' disabled' : ''}`}
  >
    <div
      style={{ '-webkit-mask': `url(${icon}) no-repeat 50% 50%` }}
      className="link-icon"
      alt={name}
    />
    <div>{name}</div>
  </div>
)
Sidebarlink.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool,
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
}
export default Sidebarlink
