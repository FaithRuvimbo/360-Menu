import React, { useReducer } from 'react'

export const GlobalContext = React.createContext()

const initialState = {
  table: 'Table 19',
  currentContent: 'pizza',
  productTab: false,
  categoryId: '',
  subCategory: '',
  products: [],
  categories: [],
  newOrders: [
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
  activeOrders: [
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
      const subCategory = [
        ...new Set(
          state.products
            .filter(e => e.category[0] === action.payload)
            .map(e => e.subcategory)
        ),
      ]
      return {
        ...state,
        categoryId: action.payload,
        subCategory: subCategory.length ? subCategory[0] : '',
      }

    case 'setSubCategory':
      return {
        ...state,
        subCategory: action.payload,
      }

    case 'setProductTab':
      return {
        ...state,
        productTab: action.payload,
      }

    case 'setProductUpdate':
      return {
        ...state,
        productUpdate: action.payload,
      }

    case 'setCurrentProduct':
      return {
        ...state,
        currentProduct: action.payload,
      }

    case 'addToNewOrders':
      return {
        ...state,
        newOrders: [...state.newOrders, action.payload],
        productUpdate: false,
        productTab: false,
      }

    case 'editNewOrder':
      const itemIndex = state.newOrders.findIndex(
        e => e.id === action.payload.id
      )
      const newArray = [...state.newOrders]
      newArray.splice(itemIndex, 1, action.payload)
      return {
        ...state,
        newOrders: newArray,
        productUpdate: false,
        productTab: false,
        currentProduct: null,
      }

    case 'removeProduct':
      const itemIndex_ = state.newOrders.findIndex(
        e => e.id === action.payload.id
      )
      const newArray_ = [...state.newOrders]
      newArray_.splice(itemIndex_, 1)
      return {
        ...state,
        newOrders: newArray_,
      }

    case 'orderNewItems':
      return {
        ...state,
        activeOrders: [...state.activeOrders, ...state.newOrders],
        newOrders: [],
      }

    case 'setCurrentNotes':
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          notes: action.payload,
        },
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
