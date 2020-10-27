import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const ProductImage = ({ image, name }) => (
  <img className="ProductImage" src={image} alt={name} />
)
ProductImage.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default ProductImage
