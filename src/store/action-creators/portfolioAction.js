import { GET_PORTFOLIOS } from "../action-types/portfolioActionTypes";
import Api from "../../api/baseApi";

export const portfolioAction = () => {
  return async (dispatch) => {
    const res = await Api.get("home/projects");
    dispatch({ type: GET_PORTFOLIOS, payload: response.data });
  };
};
