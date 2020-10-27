import {combineReducers} from "redux"
import AuthReducer from "./auth"
import processReducer from "./processData";

const allReducers = combineReducers({
    auth:AuthReducer,
    process:processReducer
})


export default allReducers