import { START_LOADING, FINISH_LOADING } from "../action-types/";

const defaultState = {
	loading: false,
};

export const loaderReducer = (state = defaultState, action) => {
	switch (action.type) {
		case START_LOADING:
			return { ...state, loading: true };
		case FINISH_LOADING:
			return { ...state, loading: false };
		default:
			return state;
	}
};
