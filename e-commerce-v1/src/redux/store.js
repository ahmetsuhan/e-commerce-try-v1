import { createStore, applyMiddleware, compose } from "redux";

import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./rootSaga";

import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

const useAsyncMiddleware = "saga";
let sagaMiddleware;
if (useAsyncMiddleware === "saga") {
  sagaMiddleware = createSagaMiddleware();
}

function configureStore(preLoadedState) {
  const middlewares = [];
  if (useAsyncMiddleware === "thunk") {
    middlewares.push(thunk);
  } else if (useAsyncMiddleware === "saga") {
    middlewares.push(sagaMiddleware);
  }

  const logger = createLogger({
    collapsed: true,
  });

  if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];

  if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preLoadedState, composedEnhancers);

  return store;
}

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
