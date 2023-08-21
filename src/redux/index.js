import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist"; // Import persistReducer and persistStore
import storage from "redux-persist/lib/storage"; // Import storage (local storage in this case)

import employeesReducer from "./employees";
import globalReducer from "./global";

const rootReducer = combineReducers({
  global: globalReducer,
  employees: employeesReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
