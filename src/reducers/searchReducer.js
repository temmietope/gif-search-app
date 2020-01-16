import { GET_GIFS, LOAD_MORE, SET_LOADING } from "../actions/types";

const initialState = {
  gifs: [],
  loading: false,
  searchKeyWord: "",
  offSet: 0
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
    case LOAD_MORE:
      return {
        ...state,
        offSet: (state.offSet += state.gifs.length)
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
