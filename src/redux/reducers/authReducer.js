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
            console.log('action.payload: ', action.payload);
            let newUser = true
            state.users.map((val) => {
                if (action.payload.email == val.email) {
                    newUser = false
                }
                else {
                    newUser = true
                }
            })
            if (newUser) {
                toast('new user created!')
                return { ...state, users: [...state.users, { ...action.payload }], image: {} }
            }
            else {
                return { ...state }
            }

        case types.LOGIN:
            let userExist = false
            let userIndex = 0
            if (action.payload.email != '') {
                state.users.map((val, index) => {
                    if (action.payload.email == val.email && action.payload.password == val.password) {
                        userExist = true
                        userIndex = index
                    }
                })
            }
            if (userExist) {
                toast('successfully logged In');
                return { ...state, user: { ...state.users[userIndex] }, loggedIn: true }
            }
            else {
                toast('login unsuccessful');
                return { ...state }
            }

        case types.LOGOUT:
            return state

        default:
            return state
    }
}