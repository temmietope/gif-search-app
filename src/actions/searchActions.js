import { GET_GIFS, ERROR, SET_LOADING } from "./types";
import axios from "axios";

export const getGifs = search => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING
    });
    let res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=vJfBj0V2pcyloRa4iDeMwiF7WYCjK57X&q=${search}`
    );
    res = res.data.data;

    console.log(res);
    dispatch({
      type: GET_GIFS,
      payload: { res, search }
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: ERROR,
    //   payload: err.response.msg
    // });
  }
};
