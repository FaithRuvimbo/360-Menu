import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Price = ({ amount, size, add, currency }) => {
  // TODO: make signDisplay work
  const formattedAmount = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency,
    signDisplay: add ? 'always' : 'never',
  }).format(amount)

  return (
    <div className={`Price-${size}`}>
      {formattedAmount}
      {/* {currency}{add ? "+" : null}{amount}  */}
    </div>
  )
}

Price.propTypes = {
  amount: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
  add: PropTypes.bool,
  currency: PropTypes.string,
}

Price.defaultProps = {
  size: 'large',
  add: false,
  currency: 'ZAR',
}

export default Price
