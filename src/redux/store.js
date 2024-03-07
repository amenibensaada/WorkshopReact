import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import rootReducers from "./reducer"
import persistStore from "redux-persist/es/persistStore";

const storeConfig = {
    key: "root",
    storage

}
const persistReducers= persistReducer(storeConfig,rootReducers)
export const store = configureStore({
    reducer:persistReducers,
    middleware:()=>[thunk]

})

export const persistor = persistStore(store)