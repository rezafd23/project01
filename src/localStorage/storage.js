import { createStore } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from '../reducers'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistCombineReducers(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return {store, persistor}
}