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
    let index = findItemIndex(el, state)
    temp[index] = {
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
    let index = 0
    for (let i = 0; i < state.length; i++) {
        if (state[i].id === elId) {
            index = i
            break
        }
    }
    temp.splice(index, 1)
    return temp
}

const findItemIndex = (el, state) => {
    for (let i = 0; i < state.length; i++) {
        if (state[i].id === el.id)
        return i
    }
}
