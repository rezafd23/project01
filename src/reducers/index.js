import {combineReducers} from "redux"
import authReducer from "./auth"
import processReducer from "./processData";
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

//
// const rootPersistConfig = {
//     key: 'root',
//     storage: storage,
//     blacklist: ['auth']
// }
//
// const authPersistConfig = {
//     key: 'auth',
//     storage: storage,
//     blacklist: ['somethingTemporary']
// }
//
// const rootReducer = combineReducers({
//     auth: persistReducer(authPersistConfig, authReducer),
//     other: otherReducer,
// })
//
// export default persistReducer(rootPersistConfig, rootReducer)
// const rootPersistConfig = {
//     key: "root",
//     storage,
//     whitelist: ["auth"]
// }
// const authPersistConfig = {
//     key: 'auth',
//     storage: storage,
//     whitelist: ['somethingTemporary']
// }
// const allReducers = combineReducers({
//     auth:persistReducer(authPersistConfig,authReducer),
//     process:processReducer
// })
//
//
// export default persistReducer(rootPersistConfig, allReducers)

//
const allReducers = combineReducers({
    auth:authReducer,
    process:processReducer
})
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth","process"],
}
// const dataConfig = {
//     key: "root",
//     storage,
//     whitelist: ["process"],
// }
//
// const combine=combineReducers({
//     persistConfig,dataConfig
// })
export default persistReducer(persistConfig, allReducers)