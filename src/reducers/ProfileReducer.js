import { actions } from './Actions'

const { DATA_FETCHING, DATA_FETCHED, DATA_FETCH_ERROR } = actions.profile

export const ProfileReducer = (state, action) => {
  switch (action.type) {
    case DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      }
    }

    case DATA_FETCHED: {
      return {
        ...state,
        loading: false,
        blogs: action.data,
      }
    }

    case DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }

    default:
      return state
  }
}
