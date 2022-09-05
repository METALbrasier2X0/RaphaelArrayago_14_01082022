import tokenReducer from './Sessions/userSession.js'
import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from "redux";
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

/**
 * Code to handle redux reducers 
 */


const reducers = combineReducers({
  Token: tokenReducer
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store;