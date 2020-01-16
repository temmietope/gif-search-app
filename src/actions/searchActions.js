import { GET_GIFS, LOAD_MORE, SET_LOADING } from "./types";
import axios from "axios";
import sweetalert from "sweetalert";

export const getGifs = (search, offSet) => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING
    });
    let res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=vJfBj0V2pcyloRa4iDeMwiF7WYCjK57X&q=${search}&limit=25&offset=${offSet}`
    );
    res = res.data.data;

    console.log(res);
    dispatch({
      type: GET_GIFS,
      payload: { res, search }
    });
  } catch (error) {
    // sweetalert("Error", `${error.response.data.message}`, "error");
  }
};

export const loadMore = () => dispatch => {
  dispatch({
    type: LOAD_MORE
  });
};
