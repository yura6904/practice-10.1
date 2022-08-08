import { EDIT_ELEMENT, ADD_ELEMENT, DELETE_ITEM } from './actions'
import { addNewElement, deleteElement, editElement } from './logic'

const initiaState = [
    {
      id: 0,
      text: 'Замена стекла',
      price: 2100,
    },
    {
      id: 1,
      text: 'Замена дисплея',
      price: 2500,
    },
    {
      id: 2,
      text: 'Замена микрофона',
      price: 2500,
    },
    {
      id: 3,
      text: 'Замена аккумулятора',
      price: 4000,
    }
  ]

const dataEditoringReducer = (state = initiaState, action) => {
  switch (action.type) {
    case EDIT_ELEMENT: 
      state = editElement(action.el, state)
      return [...state]

    case ADD_ELEMENT:
      state = addNewElement(action.el, state)
      return [...state]

    case DELETE_ITEM: 
      state = deleteElement(action.elId, state)
      return [...state]
    
    default:
      return [...state]
  }
}

export default dataEditoringReducer