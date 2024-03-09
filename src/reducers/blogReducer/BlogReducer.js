import { BlogActions } from "./BlogActions";

const {
  DATA_FETCHING,
  DATA_FETCHED,
  DATA_FETCH_ERROR,
  BLOG_SEARCH,
  // BLOG_COMMENTED,
  // BLOG_DELETED,
  // BLOG_LIKED,
} = BlogActions.blogs;

const initialState = {
  blogs: [],
  loading: false,
  error: null,
  search: "",
};

const blogReducer = (state, actions) => {
  switch (actions.type) {
    case DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }

    case DATA_FETCHED: {
      return {
        ...state,
        loading: false,
        blogs: actions.data.blogs,
      };
    }

    case DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: actions.error,
      };
    }

    case BLOG_SEARCH: {
      return {
        ...state,
        search: actions.data,
      };
    }
  }
};

export { blogReducer, initialState };
