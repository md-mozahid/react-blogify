import { BlogActions } from "./BlogActions";

const {
  DATA_FETCHING,
  DATA_FETCHED,
  DATA_FETCH_ERROR,
  // BLOG_COMMENTED,
  // BLOG_DELETED,
  // BLOG_LIKED,
} = BlogActions.blog;

const initialState = {
  blogs: [],
  loading: false,
  error: null,
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
  }
};

export { blogReducer, initialState };
