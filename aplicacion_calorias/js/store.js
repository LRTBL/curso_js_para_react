import { createStore } from "./redux/index.js";
import reducer from "./reducers/index.js";

const store = createStore(reducer, { init: 0, fault: 1360563 });

export default store;
