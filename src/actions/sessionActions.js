import * as types from '../constants'


export function toggleSidebar(sidebar) {
  return dispatch => {
    dispatch({
      type: types.SESSIONS_SIDEBAR_TRIGGER,
      sidebar: sidebar
    })
  }
}
