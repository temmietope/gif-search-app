import { GET_GIFS, SET_LOADING } from '../actions/types'

const initialState = {
  gifs: [],
  loading: false,
  search: '',
  offset: 0,
  reset: false,
  hasMore: true,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_GIFS:
      // if it is a new search term clear the prev gifs state
      const gifs = action.payload.reset ? [] : state.gifs
      return {
        ...state,
        gifs: [...gifs, ...action.payload.res],
        search: action.payload.search,
        loading: false,
        offset: action.payload.offset,
        hasMore: action.payload.res.length !== 0,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    //   case ERROR:
    //   return {
    //     ...state,
    //    error: action.payload
    //   };

    default:
      return state
  }
}
