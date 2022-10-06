import { REHYDRATE } from 'redux-persist'

import types from '../actions/actionTypes'
import initialState from './initialStates'
const INITIAL_STATE = initialState.mainReducer

const GeneralReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REHYDRATE: {
            return state
        }
        case types.loaderOn: {
            return {
                ...state,
                loading: true
            }
        }
        case types.loaderOff: {
            return {
                ...state,
                loading: false
            }
        }
        case types.GET_FOOD_LIST: {
            return {
                ...state,
                food_data: action.payload,
                loading: false
            }
        }
        case types.ADD_FOOD: {
            return {
                ...state,
                food_data: [...state.posts_data, action.payload],
                loading: false
            }
        }

        default:
            return state

    }
}

export default GeneralReducer