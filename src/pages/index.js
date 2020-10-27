import React from 'react'
import Heading from '../components/Heading'
import Icon from '../components/Icon'
import ProductName from '../components/ProductName'

export default function Home() {
  return (
    <>
      <Heading>Hello world</Heading>
      <Icon name="trash" size="medium" />
      <ProductName>Gyros</ProductName>
    </>
  )
}
