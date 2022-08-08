import { ADD_ELEMENT, DELETE_ITEM, EDIT_ELEMENT, EDIT_ELEMENT_CLICK, SET_USER_PRICE, SET_USER_TEXT } from "./actions"

export const editElement = (el, state) => {
  return {
    type: EDIT_ELEMENT,
    el
  }
}

export const editElementClick = (el, state) => {
  return {
      type: EDIT_ELEMENT_CLICK,
      el
    }
  }

export const addElement = (elId) => {
  return {
    type: ADD_ELEMENT,
    elId
  }
}

export const changeText = (text) => {
  return {
    type: SET_USER_TEXT,
    text: text
  }
}
export const changePrice = (price) => {
  return {
    type: SET_USER_PRICE,
    price: price
  }
}
export const deleteItem = (elId) => {
  return {
    type: DELETE_ITEM,
    elId: elId
  }
}
