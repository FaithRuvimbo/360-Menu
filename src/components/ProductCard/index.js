import React from 'react'
import PropTypes from 'prop-types'
import heartIcon from '../../../static/icons/basic/heart.svg'
import './style.css'

const ProductCard = ({ isExpanded, item }) => (
  <div className={`card-root${isExpanded ? ' expanded' : ''}`}>
    <div className="card-image">
      <img
        src="/images/Image.jpg"
        alt={item.name}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
    </div>
    <div className="card-content">
      <div className="card-title">{item.name}</div>
      <div className="card-likes">
        <img src={heartIcon} className="card-likes-icon" alt={item.name} />{' '}
        {item.likes}
      </div>
      <div className="card-description">{item.description}</div>
      <div className="card-price">${item.unitCost}</div>
      <div className="card-button-container">
        <div className="card-button">+</div>
      </div>
    </div>
  </div>
)
ProductCard.propTypes = {
  isExpanded: PropTypes.bool,
  item: PropTypes.object,
}
export default ProductCard
