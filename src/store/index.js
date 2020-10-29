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
      id: 'recgZWzz4H3KEdokK',
      subcategory: 'SALAD GREENS',
      inStock: true,
      canBeLiked: true,
      unitCost: 89,
      options: [
        { option: 'no extras', price: 0 },
        { option: 'Add Chicken/ Bacon', price: 25 },
        { option: 'Add Anchovies/ avocado/ grilled halloumi', price: 30 },
        { option: 'Add Chargrilled artichokes', price: 45 },
      ],
      category: ['recVQOXzQZYc3pmlm'],
      likes: 1,
      name: 'Cobb salad',
      images: [
        {
          id: 'attmPaw6rPpQeVss5',
          url:
            'https://dl.airtable.com/.attachments/59075957c80bf7d4c21d4cee47daf66c/d7eb0f6c/Cobb_Salad_Recipe__Culinary_Hill',
          filename: 'Cobb_Salad_Recipe__Culinary_Hill',
          size: 165628,
          type: 'image/jpeg',
          thumbnails: {
            small: {
              url:
                'https://dl.airtable.com/.attachmentThumbnails/3f13b5f91683550ed5f68636d8efbe3e/fb251176',
              width: 36,
              height: 36,
            },
            large: {
              url:
                'https://dl.airtable.com/.attachmentThumbnails/ae6a9625461acc4d5180689a0eeb5b34/6189b2db',
              width: 512,
              height: 512,
            },
            full: {
              url:
                'https://dl.airtable.com/.attachmentThumbnails/718096444d95ee3e2d79bdc42f1c383a/2a705f01',
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
      description:
        'Mixed greens with cherry tomatoes, red onion, topped with avocado, boiled egg and blue cheese.',
      totalUnitsSold: 0,
      grossSales: 0,
      'name (from Categories)': ['Salad'],
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
      id: 'recgZWzz4H3KEdokK',
      subcategory: 'SALAD GREENS',
      inStock: true,
      canBeLiked: true,
      unitCost: 89,
      options: [
        { option: 'no extras', price: 0 },
        { option: 'Add Chicken/ Bacon', price: 25 },
        { option: 'Add Anchovies/ avocado/ grilled halloumi', price: 30 },
        { option: 'Add Chargrilled artichokes', price: 45 },
      ],
      category: ['recVQOXzQZYc3pmlm'],
      likes: 1,
      name: 'Cobb salad',
      images: [
        {
          id: 'attmPaw6rPpQeVss5',
          url:
            'https://dl.airtable.com/.attachments/59075957c80bf7d4c21d4cee47daf66c/d7eb0f6c/Cobb_Salad_Recipe__Culinary_Hill',
          filename: 'Cobb_Salad_Recipe__Culinary_Hill',
          size: 165628,
          type: 'image/jpeg',
          thumbnails: {
            small: {
              url:
                'https://dl.airtable.com/.attachmentThumbnails/3f13b5f91683550ed5f68636d8efbe3e/fb251176',
              width: 36,
              height: 36,
            },
            large: {
              url:
                'https://dl.airtable.com/.attachmentThumbnails/ae6a9625461acc4d5180689a0eeb5b34/6189b2db',
              width: 512,
              height: 512,
            },
            full: {
              url:
                'https://dl.airtable.com/.attachmentThumbnails/718096444d95ee3e2d79bdc42f1c383a/2a705f01',
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
      description:
        'Mixed greens with cherry tomatoes, red onion, topped with avocado, boiled egg and blue cheese.',
      totalUnitsSold: 0,
      grossSales: 0,
      'name (from Categories)': ['Salad'],
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
    case 'setCurrentProductOption':
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          option: action.payload,
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
