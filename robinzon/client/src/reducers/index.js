import { combineReducers } from "redux"
import { moduleReducer, SingleModuleReducer, moduleUpdateReducer, deleteModuleReducer, moduleCreateReducer} from "./ModuleReducers"
import users from "./UserReducers"
import {getPopUpReducer, updatePopUpReducer} from "./PopUpReducers"
import { moduleUpReducer, moduleDownReducer } from "./ModuleListReducers"

export default combineReducers({
    moduleReducer,
    deleteModuleReducer,
    SingleModuleReducer,
    moduleUpdateReducer,
    moduleCreateReducer,
    users,
    getPopUpReducer,
    updatePopUpReducer,
    moduleUpReducer,
    moduleDownReducer,
})