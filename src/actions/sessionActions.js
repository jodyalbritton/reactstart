import * as types from '../constants'

// Action for toggling the sidebar component
// Takes a sidebar(boolean) value
export function toggleSidebar(sidebar) {
  return dispatch => {
    dispatch({
      type: types.SESSIONS_SIDEBAR_TRIGGER,
      sidebar: sidebar
    })
  }
}
