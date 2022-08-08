export const addNewElement = (el, state) => {
    let temp = state
    temp.push({
        id: state.length,
        text: el.text,
        price: el.price
    })
    return temp
}

export const editElement = (el, state) => {
    let temp = state
    temp[el.id] = {
        id: el.id,
        text: el.text,
        price: el.price,
    }
    return temp
}

export const editElementClick = (el, state) => {
    let temp = state
    temp = {
        id: el.id,
        text: el.text,
        price: el.price,
        visible: el.visible
    }
    return temp
}

export const deleteElement = (elId, state) => {
    let temp = state
    temp.splice(elId, 1)
    return temp
}