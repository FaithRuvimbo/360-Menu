import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../store'
import './style.css'

const ProductView = () => {
  const [
    {
      productUpdate = true,
      currentProduct = {
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
    },
    dispatch,
  ] = useContext(GlobalContext)

  const [noteEditor, setNoteEditor] = useState(false)

  const image =
    (currentProduct.images &&
      currentProduct.images[0] &&
      (currentProduct.images[0].thumbnails.large.url ||
        currentProduct.images[0].url)) ||
    '/images/food-default.jpg'

  return (
    <div className="product-view-root">
      <div className="header">
        <div
          className="product-view-close"
          onClick={() => dispatch({ type: 'setProductTab', payload: false })}
        ></div>
        <div className="product-view-image">
          <img src={image} />
        </div>
      </div>

      <div className="product-view-details">
        <div className="title">{currentProduct.name}</div>
        <div className="description">{currentProduct.description}</div>
        <div className="allergents"> {currentProduct.allergents}</div>
      </div>

      {currentProduct.options ? (
        <div className="product-view-options">
          <div className="title">Options</div>
          {currentProduct.options.map((e, i) => (
            <div className="options">
              <input
                type="radio"
                id="options"
                name={e.option}
                value={i}
                onChange={() =>
                  dispatch({
                    type: 'setCurrentProductOption',
                    payload: i,
                  })
                }
                checked={i === currentProduct.option}
              />
              <span className="name">{e.option}</span>
              {e.price ? <span className="price"> +$ {e.price}</span> : ''}
            </div>
          ))}
        </div>
      ) : (
        ''
      )}

      <div className="product-view-instructions">
        <div className="title">SPECIAL INSTRUCTIONS</div>
        <div className="notes" onClick={() => setNoteEditor(true)}>
          <span>
            {currentProduct.notes || 'Add a note (e.g. no onions, extra sauce)'}
          </span>
        </div>

        {noteEditor ? (
          <div className="editor-notes-container">
            <div className="editor-notes-input">
              <input
                value={currentProduct.notes}
                placeholder="Enter your note"
                onChange={$event =>
                  dispatch({
                    type: 'setCurrentNotes',
                    payload: $event.target.value,
                  })
                }
              />
            </div>
            <div
              className="editor-notes-done-btn"
              onClick={() => setNoteEditor(false)}
            >
              DONE
            </div>
          </div>
        ) : (
          ''
        )}
      </div>

      <div
        className="button"
        onClick={() =>
          dispatch({
            type: productUpdate ? 'editNewOrder' : 'addToNewOrders',
            payload: currentProduct,
          })
        }
      >
        {productUpdate ? 'SAVE ORDER' : 'ADD TO ORDER'}
      </div>
    </div>
  )
}
export default ProductView
