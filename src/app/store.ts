import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./app-reducer";





const rootReducer = combineReducers({
    app: appReducer,

})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export type AppRootStateType = ReturnType<typeof rootReducer>

// this so that you can access the store in the browser console at any time
// @ts-ignore
window.store = store;
