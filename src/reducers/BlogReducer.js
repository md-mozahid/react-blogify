import { actions } from '../actions'

const {
  DATA_FETCHING,
  DATA_FETCHED,
  DATA_FETCH_ERROR,
  BLOG_SEARCH,
  DATA_CREATED,
  DATA_CREATED_ERROR,
  BLOG_DELETED,
} = actions.blogs

const initialState = {
  blogs: [],
  loading: false,
  error: null,
  search: '',
}

const blogReducer = (state, actions) => {
  switch (actions.type) {
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
        blogs: actions.data.blogs,
      }
    }

    case DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: actions.error,
      }
    }

    case DATA_CREATED: {
      return {
        ...state,
        loading: false,
        blogs: [...state.blogs, actions.data.blogs],
      }
    }
    case DATA_CREATED_ERROR: {
      return {
        ...state,
        error: actions.error,
      }
    }

    case BLOG_SEARCH: {
      return {
        ...state,
        search: actions.data,
      }
    }

    case BLOG_DELETED: {
      return {
        ...state,
        loading: false,
        blogs: state.blogs.filter((item) => item.id !== actions.data),
      }
    }
  }
}

export { blogReducer, initialState }
