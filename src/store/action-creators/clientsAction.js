import { GET_CLIENTS } from "../action-types/";
import Api from "../../api/baseApi";

export const clientsAction = () => {
	return async (dispatch) => {
		const res = await Api.get("/clients/");
		dispatch({ type: GET_CLIENTS, payload: res.data });
	};
};
