import {createStore} from "redux";
import reducer from "./reducer";
import { devToolsEnhancer  } from "redux-devtools-extension";

const store = createStore(reducer,devToolsEnhancer());

export default store