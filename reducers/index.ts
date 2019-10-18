import {initialState, State, actionTypes } from '../store'

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
      case actionTypes.DEFAULT:
          return Object.assign({}, state, { 
          });
      default: return state
    }
  }