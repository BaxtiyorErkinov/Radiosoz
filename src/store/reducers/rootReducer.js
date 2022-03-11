import { combineReducers } from "redux";
import { portfolioReducer } from "./portfolioReducer";
import { loaderReducer } from "./loaderReducer";
import { clientsReducer } from "./clientsReducer";

export const rootReducer = combineReducers({
    portfolios: portfolioReducer,
    loading: loaderReducer,
    clients: clientsReducer,
});
