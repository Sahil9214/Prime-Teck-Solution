import {
  DATA_SUCCESS,
  DATA_ERROR,
  DATA_LOADING,
  DATA_SUCCESS_ID,
} from "./action.Type";

import axios from "axios";
// GET DATA
export const getDataAction = (page=1) => async (dispatch) => {
  dispatch({ type: DATA_LOADING });
  try {
    let res = await axios(
      `https://fair-puce-tuna-yoke.cyclic.app/prime?_page=${page}&_limit=5`
    );

    //! console.log("res", res.data);

    dispatch({ type: DATA_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: DATA_ERROR });
  }
};
//GET DATA BY ID
export const getDataByActionID = (id) => async (dispatch) => {
  try {
    let res = await axios(`https://fair-puce-tuna-yoke.cyclic.app/prime/${id}`);
    dispatch({ type: DATA_SUCCESS_ID, payload: res.data });
  } catch (err) {
    dispatch({ type: DATA_ERROR });
  }
};

