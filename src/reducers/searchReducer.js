import { GET_GIFS, ERROR, SET_LOADING } from "../actions/types";

const initialState = {
  gifs: [],
  loading: false,
  searchKeyWord: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GIFS:
      return {
        ...state,
        gifs: action.payload.res,
        searchKeyWord: action.payload.search,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    //   case ERROR:
    //   return {
    //     ...state,
    //    error: action.payload
    //   };

    default:
      return state;
  }
}
