import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'

export const initialState = {

}

export type State = {

}

export const actionTypes = {
    DEFAULT: 'default'
}

