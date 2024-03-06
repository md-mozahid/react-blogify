import { actions } from './Actions'

const { DATA_FETCHING, DATA_FETCHED, DATA_FETCH_ERROR, IMAGE_UPDATED } =
  actions.profile

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
        user: action.data.user,
        blogs: action.data.blogs,
      }
    }

    case DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }

    case IMAGE_UPDATED: {
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          avatar: action.data?.avatar,
        },
      }
    }

    default:
      return state
  }
}
