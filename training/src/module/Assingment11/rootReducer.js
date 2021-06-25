import { combineReducers } from "redux";
import dataReducer from "./screens/reducer";

const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer;