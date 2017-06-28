import initialState from './initialState'
import * as types from '../constants'


export default function reducer(state = initialState.session, action = {}) {
   switch (action.type) {
     case types.SESSIONS_SIDEBAR_TRIGGER:
         return { ...state, sidebar: action.sidebar }
     default:
      return state
   }
}
