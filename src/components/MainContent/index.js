import React, { useContext, useState } from 'react'
import { Animated } from 'react-animated-css'
import ProductCard from '../ProductCard'
import { GlobalContext } from '../../store'
import './style.css'

const MainContent = () => {
  const [
    { table, categories = [], categoryId, products: prods = [], subCategory },
    dispatch,
  ] = useContext(GlobalContext)

  const category = categories.find(e => e.id === categoryId)
  const products = prods.filter(e => e.category[0] === categoryId)
  const subCategories = [...new Set(products.map(e => e.subcategory))]

  return (
    <div className="container">
      <div className="content-table">{table}</div>
      <div className="content-title">
        {category ? `${category.name} Menu` : ''}
      </div>
      <div className="content-categories">
        {subCategories.map(elm => (
          <span
            onClick={() => dispatch({ type: 'setSubCategory', payload: elm })}
            className={`content-category${
              elm === subCategory ? ' active' : ''
            }`}
          >
            {elm}
          </span>
        ))}
      </div>
      <div className="content-items">
        {products
          .filter(e => (e.subcategory ? e.subcategory === subCategory : true))
          .map((e, index) => (
            <Animated
              key={e.id}
              animationInDelay={index * 30}
              animationIn="bounceInUp"
              animationOut="fadeOut"
              isVisible
            >
              <ProductCard key={index} item={e} isExpanded={e.isExpanded} />
            </Animated>
          ))}
      </div>
    </div>
  )
}

export default MainContent
