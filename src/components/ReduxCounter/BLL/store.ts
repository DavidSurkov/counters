import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";

export const rootReducer = combineReducers({
    counterReducer: counterReducer
});
export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);