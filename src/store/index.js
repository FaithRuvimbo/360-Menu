import React, { useReducer } from 'react'

export const GlobalContext = React.createContext()

const initialState = {
  table: 'Table 19',
  currentContent: 'pizza',
  data: {
    pizza: {
      title: 'Pizza Menu',
      selectedCategory: 'White Pizza',
      categories: ['White Pizza', 'Red Pizza'],
      items: [
        {
          name: 'Gyros',
          likes: 46,
          category: 'White Pizza',
          description:
            'Tomaten,	Fior	di	Latte Mozzarella, Gyros Fleisch, Zwiebeln, Fetakäse, Joghurtsoße',
          price: 10.5,
        },
        {
          name: 'Gyros',
          likes: 46,
          category: 'White Pizza',
          description:
            'Tomaten,	Fior	di	Latte Mozzarella, Gyros Fleisch, Zwiebeln, Fetakäse, Joghurtsoße',
          price: 10.5,
        },
        {
          name: 'Gyros',
          likes: 46,
          category: 'White Pizza',
          description:
            'Tomaten,	Fior	di	Latte Mozzarella, Gyros Fleisch, Zwiebeln, Fetakäse, Joghurtsoße',
          price: 10.5,
        },
        {
          name: 'Gyros',
          likes: 46,
          category: 'White Pizza',
          description:
            'Tomaten,	Fior	di	Latte Mozzarella, Gyros Fleisch, Zwiebeln, Fetakäse, Joghurtsoße',
          price: 10.5,
        },
      ],
    },
  },
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setCurrentContent':
      return {
        ...state,
        currentContent: action.payload,
      }

    case 'setCategories':
      return {
        ...state,
        categories: action.payload,
      }

    case 'setProducts':
      return {
        ...state,
        products: action.payload,
      }

    case 'setCategoryId':
      return {
        ...state,
        categoryId: action.payload,
      }
    default:
      return state
  }
}

export const GlobalState = props => {
  const globalState = useReducer(reducer, initialState)
  return (
    <GlobalContext.Provider value={globalState}>
      {props.children}
    </GlobalContext.Provider>
  )
}
