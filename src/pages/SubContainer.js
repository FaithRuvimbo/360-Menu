import React, { useEffect, useContext } from 'react'

import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import DetailsView from '../components/DetailsView'
import ProductView from '../components/ProductView'

import { GlobalContext } from '../store'

export default function SubContainer() {
  const [{ productTab }, dispatch] = useContext(GlobalContext)

  useEffect(() => {
    function fetchCategories() {
      fetch(
        'https://project-indie-api.netlify.app/.netlify/functions/categories'
      )
        .then(a => a.json())
        .then(({ categories }) => {
          dispatch({ type: 'setCategories', payload: categories })
          dispatch({ type: 'setCategoryId', payload: categories[0].id })
        })
        .catch(console.log)
    }
    function fetchProducts() {
      fetch('https://project-indie-api.netlify.app/.netlify/functions/products')
        .then(a => a.json())
        .then(({ products }) => {
          dispatch({ type: 'setProducts', payload: products })
        })
        .catch(console.log)
    }
    fetchCategories()
    fetchProducts()
  }, [0])

  return (
    <div className="page-root">
      <Sidebar />
      <MainContent />
      <DetailsView />
      {productTab && <ProductView isOpen={productTab} />}
    </div>
  )
}
