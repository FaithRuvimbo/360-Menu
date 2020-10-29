import React, { useContext } from 'react'
import OrderItem from '../OrderItem'
import { GlobalContext } from '../../store'
import './style.css'

const DetailsView = () => {
  const [
    {
      activeOrders = [
        {
          id: 'recVczFghT4sY3SUk',
          inStock: true,
          size: '32cm',
          canBeLiked: true,
          unitCost: 225,
          category: ['recaNPedbdvaT5058'],
          likes: 1,
          name: 'Seafood',
          description:
            'Mozzarella cheese and tomato, topped with de-shelled prawns, mussels and calamari that have been pan-fried with olive oil, garlic, lemon and tomato, with a hint of chilli.',
          totalUnitsSold: 0,
          grossSales: 0,
          'name (from Categories)': ['Pizza'],
          options: null,
          notes: 'No ice please',
        },
        {
          id: 'recVczFghT4sY3SUk',
          inStock: true,
          size: '32cm',
          canBeLiked: true,
          unitCost: 225,
          category: ['recaNPedbdvaT5058'],
          likes: 1,
          name: 'Seafood',
          description:
            'Mozzarella cheese and tomato, topped with de-shelled prawns, mussels and calamari that have been pan-fried with olive oil, garlic, lemon and tomato, with a hint of chilli.',
          totalUnitsSold: 0,
          grossSales: 0,
          'name (from Categories)': ['Pizza'],
          options: null,
          notes: 'no ice please',
        },
      ],
      newOrders = [
        {
          id: 'recVczFghT4sY3SUk',
          inStock: true,
          size: '32cm',
          canBeLiked: true,
          unitCost: 225,
          category: ['recaNPedbdvaT5058'],
          likes: 1,
          name: 'Seafood',
          description:
            'Mozzarella cheese and tomato, topped with de-shelled prawns, mussels and calamari that have been pan-fried with olive oil, garlic, lemon and tomato, with a hint of chilli.',
          totalUnitsSold: 0,
          grossSales: 0,
          'name (from Categories)': ['Pizza'],
          options: null,
          notes: 'No ice please',
        },
        {
          id: 'recVczFghT4sY3SUk',
          inStock: true,
          size: '32cm',
          canBeLiked: true,
          unitCost: 225,
          category: ['recaNPedbdvaT5058'],
          likes: 1,
          name: 'Seafood',
          description:
            'Mozzarella cheese and tomato, topped with de-shelled prawns, mussels and calamari that have been pan-fried with olive oil, garlic, lemon and tomato, with a hint of chilli.',
          totalUnitsSold: 0,
          grossSales: 0,
          'name (from Categories)': ['Pizza'],
          options: null,
          notes: 'no ice please',
        },
      ],
    },
    dispatch,
  ] = useContext(GlobalContext)

  return (
    <div className="details-root">
      <div className="details-title">Order Summary</div>

      <div className="details-active-orders">
        <div className="title">Active Orders</div>
        {activeOrders.map(e => (
          <OrderItem disabled item={e} />
        ))}
      </div>

      <div className="details-new-orders">
        <div className="title">New Orders</div>

        {newOrders.map(e => (
          <OrderItem item={e} />
        ))}
      </div>

      <div className="button">Order Items</div>
    </div>
  )
}
export default DetailsView
