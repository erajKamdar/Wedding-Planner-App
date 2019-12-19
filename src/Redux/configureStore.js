import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { verifyAuth } from "../Firebase/actions";
// import rootReducer from "../Firebase/reducers";
import rootReducer from "../Firebase/reducers";

export default function configureStore(persistedState) {
    const store = createStore(
      rootReducer,
      persistedState,
      applyMiddleware(thunkMiddleware)
    );
    store.dispatch(verifyAuth());
    return store;
}
