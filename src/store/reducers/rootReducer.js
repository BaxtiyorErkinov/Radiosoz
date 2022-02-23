import { combineReducers } from 'redux';
import { portfolioReducer } from './portfolioReducer';

export const rootReducer = combineReducers({
    portfolios: portfolioReducer
})