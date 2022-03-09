import { combineReducers } from "redux";
import { portfolioReducer } from "./portfolioReducer";
import { loaderReducer } from "./loaderReducer";

export const rootReducer = combineReducers({
    portfolios: portfolioReducer,
    loading: loaderReducer,
});
