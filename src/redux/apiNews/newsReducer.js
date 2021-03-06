import { FETCH_NEWS_FAILED, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS } from "./newsTypes"

const initialState = {
  loading:false,
  news: [],
  error:''
}

export const fetchReducer = (state = initialState, { type, news, error }) => {
  switch (type) {

    case FETCH_NEWS_REQUEST:
      return { ...state, loading: true }
    case FETCH_NEWS_SUCCESS:
      return { ...state, loading: false, news }
    case FETCH_NEWS_FAILED:
      return { ...state, loading: false, error }

    default:
      return state
  }
};
