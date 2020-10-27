import PropTypes from 'prop-types'
import React from 'react'
import './styles.css'

const ProductName = ({ children, size }) => (
  <div className={`ProductName-${size}`}>{children}</div>
)

ProductName.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  size: PropTypes.oneOf(['small', 'large']),
}

export default ProductName
