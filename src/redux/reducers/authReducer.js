import { REHYDRATE } from 'redux-persist'
import { toast } from '../../utils'
import types from '../actions/actionTypes'
import initialState from './initialStates'

const INITIAL_STATE = initialState.authReducer

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REHYDRATE: {
            return state
        }
        case types.SIGN_UP:
            return {
                ...state,
                token: action.payload.token,
                user : action.payload.user,
            }
        case types.LOGIN:
            let data = {
                ...state,
                token: action.payload.token,
                user : action.payload.user,
            }
            if(action.payload?.user.role == 'USER'){
                data.userId = action.payload.user._id
            }
            return data
        
        case types.SAVE_USER_ID:
            return {...state, userId: action.payload}
        case types.REMOVE_USER_ID:
            return {...state, userId: null}
        case types.LOGOUT:
            console.log('LOGOUT REDUCER');
            return initialState.authReducer

        default:
            return state
    }
}