import { ADD_MONTHS } from '../actions/types'

const initialState = {
  sidebarMonth: {},
  loading: true,
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case ADD_MONTHS:
      return {
        ...state,
        months: payload.months,
        sidebarMonth: payload.sidebarMonth,
        loading: false,
      }
    default:
      return state
  }
}
