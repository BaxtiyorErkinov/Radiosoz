import { START_LOADING, FINISH_LOADING } from "../action-types/";

export const loadingAction = () => {
	return (dispatch) => {
		dispatch({ type: START_LOADING });
		setTimeout(() => {
			dispatch({ type: FINISH_LOADING });
		}, 2000);
	};
};
