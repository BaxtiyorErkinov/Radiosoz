import { GET_PORTFOLIOS } from "../action-types/";
import Api from "../../api/baseApi";
import axios from "axios";

export const portfolioAction = () => {
  return async (dispatch) => {
    const res = await Api.get("/projects/");
    console.log(res);
    dispatch({ type: GET_PORTFOLIOS, payload: res.data });
  };
};
