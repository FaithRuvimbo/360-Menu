import React, { useContext } from 'react'
import OrderItem from '../OrderItem'
import { GlobalContext } from '../../store'
import './style.css'

const DetailsView = () => {
  const [{ activeOrders = [], newOrders = [] }, dispatch] = useContext(
    GlobalContext
  )

  return (
    <div className="details-root">
      <div className="details-title">Order Summary</div>

      <div className="scroll-container">
        <div className="details-active-orders">
          <div className="title">Active Orders</div>
          {activeOrders.map(e => (
            <OrderItem disabled item={e} />
          ))}
        </div>

        <div className="details-new-orders">
          <div className="title">New Orders</div>

          {newOrders.length ? (
            newOrders.map(e => <OrderItem item={e} />)
          ) : (
            <div className="no-orders-text">No orders added</div>
          )}
        </div>
      </div>

      <div
        className={`button${newOrders.length === 0 ? ' disabled' : ''}`}
        onClick={() => dispatch({ type: 'orderNewItems' })}
      >
        Order Items
      </div>
    </div>
  )
}
export default DetailsView
