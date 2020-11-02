import { v1 as uuid} from 'uuid'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

const initialState = {
    items: [
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Egg' },
        { id: uuid(), name: 'Bread' },
        { id: uuid(), name: 'water' },
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state
    }
}

export default reducer