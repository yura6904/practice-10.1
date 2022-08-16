import { createContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import InputField from './components/InputField/InputField';
import List from './components/List/List';
import ListElement from './components/List/ListElement/ListElement';
import { addElement, changePrice, changeText, deleteItem, editElement, editElementClick } from './redux/generatorFunctions';
import { deleteElement } from './redux/logic';

function App() {
  const dispatch = useDispatch()
  const dataStore = useSelector((state) => state.dataElements)
  const editDataStore = useSelector((state) => state.userInput)

  const onChangeEvent = (type, input) => {
    switch (type) {
      case 'text': 
        dispatch(changeText(input))
        break
      case 'price': 
        dispatch(changePrice(input))
        break
      default:
        break
    }
  }
  const addItem = (element) => {
    dispatch(addElement(element))
  }
  const editItemClick = (element) => {
    dispatch(editElementClick(element))
  }
  const editItem = (element) => {
    dispatch(editElement(element))
  }
  const deleteItemClick = (elId) => {
    dispatch(deleteItem(elId))
  }
  const editHandler = () => {
    if (editDataStore.visible) {
      editItem({
          id: editDataStore.id,
          text: editDataStore.text,
          price: editDataStore.price,
          visible: false
      })
      editItemClick({
          id: '',
          text: '',
          price: '',
          visible: false
      })
    }
    else {
        addItem({text: editDataStore.text, price: (editDataStore.price-0)})
    }
  }
  const cancelHandler = () => {
    editItemClick({
      id: '',
      text: '',
      price: '',
      visible: false
    })
  }

  return (
    <div className="App">
      <InputField editData={editDataStore} onChangeEvent={onChangeEvent}
        addItem={addItem} editItemClick={editItemClick}
        editItem={editItem} editHandler={editHandler} cancelHandler={cancelHandler}/>
        <List elements={dataStore}>
          {elements => elements?.map((e, id) => 
        (<ListElement element={e} key={id} editData={editDataStore}
          editItemClick={editItemClick} deleteItem={deleteItemClick} />))}
      </List>
    </div>
  );
}

export default App;
