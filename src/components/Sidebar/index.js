import React, { useContext } from 'react'

import PropTypes, { element } from 'prop-types'
import SidebarLink from './SidebarLink'
import logo from '../../../static/logo/main-logo.svg'

import { GlobalContext } from '../../store'

import drinkIcon from '../../../static/icons/food/drink.svg'
import starterIcon from '../../../static/icons/food/starter.svg'
import paniniIcon from '../../../static/icons/food/panini.svg'
import saladIcon from '../../../static/icons/food/salad.svg'
import pizzaIcon from '../../../static/icons/food/pizza.svg'
import pastaIcon from '../../../static/icons/food/pasta.svg'
import dessertIcon from '../../../static/icons/food/dessert.svg'
import waiterIcon from '../../../static/icons/food/waiter.svg'

import './style.css'

const icons = {
  DRINK: drinkIcon,
  STARTER: starterIcon,
  PANINI: paniniIcon,
  SALAD: saladIcon,
  PIZZA: pizzaIcon,
  PASTA: pastaIcon,
  DESSERT: dessertIcon,
}

const Sidebar = () => {
  const [{ categories = [], categoryId }, dispatch] = useContext(GlobalContext)

  return (
    <div className="sidebar-root">
      <div className="sidebar-logo-container">
        <img className="sidebar-logo" src={logo} alt="logo" />
      </div>
      {categories.map(category => (
        <SidebarLink
          onClick={() =>
            dispatch({ type: 'setCategoryId', payload: category.id })
          }
          name={category.name}
          icon={icons[category.icon]}
          disabled={!category.Products}
          isActive={category.id === categoryId}
        />
      ))}
      <SidebarLink
        key={categories.length}
        style
        name="Waiter"
        icon={waiterIcon}
        path="/waiter"
        isHighlighted
      />
    </div>
  )
}
export default Sidebar
