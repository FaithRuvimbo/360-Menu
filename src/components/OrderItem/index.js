import React, { useContext } from 'react'
import { GlobalContext } from '../../store'
import PropTypes from 'prop-types'
import './style.css'

const OrderItem = ({ disabled, item }) => {
  const [, dispatch] = useContext(GlobalContext)
  return (
    <div className={`order-item-root${disabled ? ' order-disabled' : ''}`}>
      <div className="order-item-1">
        <div className="order-item-title">{item.name}</div>
        <div className="order-item-description">{item.description}</div>
        <div className="order-item-notes">{item.notes}</div>
      </div>
      <div className="order-item-2">
        {disabled ? (
          <div className="order-item-time">
            <div className="time-button">
              <div className="time-icon" />
            </div>
            <div className="actual-time">5 mins</div>
          </div>
        ) : (
            <div className="order-actions">
              <div className="edit-button"
                onClick={() => {
                  dispatch({ type: 'setProductTab', payload: true })
                  dispatch({ type: 'setProductUpdate', payload: true })
                  dispatch({ type: 'setCurrentProduct', payload: item })
                }}
              >
                <div className="edit-icon" />
              </div>
              <div className="delete-button"
                onClick={() => {
                  dispatch({ type: 'removeProduct', payload: item.id })
                }}
              >
                <div className="delete-icon" />
              </div>
            </div>
          )}
        <div className="order-item-4">
          <div className="order-item-size">{item.size}</div>
          <div className="order-item-price">${item.unitCost}</div>
        </div>
      </div>
    </div >
  )
}
OrderItem.propTypes = {
  disabled: PropTypes.bool,
  item: PropTypes.object,
}
export default OrderItem
