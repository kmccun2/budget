import { SET_LOADING, ADD_MONTHS, SET_SIDEBAR_MONTH } from '../actions/types'

const initialState = {
  sidebarMonth: {},
  loading: true,
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      }
    case ADD_MONTHS:
      return {
        ...state,
        months: payload.months,
        sidebarMonth: payload.sidebarMonth,
        loading: false,
      }
    case SET_SIDEBAR_MONTH:
      return {
        ...state,
        sidebarMonth: payload,
        loading: false,
      }
    default:
      return state
  }
}
