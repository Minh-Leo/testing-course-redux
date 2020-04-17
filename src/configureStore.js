import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export const middleWares = [ReduxThunk];

const initialState = {};

const store = createStore(rootReducer, initialState);
export default store;
