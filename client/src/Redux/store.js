import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { rootReducer as root } from "./root";
import logger from "redux-logger";

const middleware = [ThunkMiddleware, logger];
export const store = createStore(root, applyMiddleware(...middleware));
