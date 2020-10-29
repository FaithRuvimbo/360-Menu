import React, { useContext, useState } from 'react'
import ProductCard from '../ProductCard'
import { GlobalContext } from '../../store'
import './style.css'

const MainContent = () => {
  const [
    { table, categories = [], categoryId, products: prods = [] },
  ] = useContext(GlobalContext)

  const category = categories.find(e => e.id === categoryId)
  const products = prods.filter(e => e.category[0] === categoryId)
  const subCategories = [...new Set(products.map(e => e.subcategory))]
  const [subCategory, setSubCategory] = useState(subCategories[0])

  return (
    <div className="container">
      <div className="content-table">{table}</div>
      <div className="content-title">
        {category ? `${category.name} Menu` : ''}
      </div>
      <div className="content-categories">
        {subCategories.map(elm => (
          <span
            className={`content-category${
              elm === subCategory ? ' active' : ''
            }`}
          >
            {elm}
          </span>
        ))}
      </div>
      <div className="content-items">
        {products.map((e, index) => (
          <ProductCard key={index} item={e} isExpanded={e.isExpanded} />
        ))}
      </div>
    </div>
  )
}

export default MainContent