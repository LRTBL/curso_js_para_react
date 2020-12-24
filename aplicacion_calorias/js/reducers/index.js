import { BURN } from "../actions/index.js";
const reducer = (state, { type, payload }) => {
  switch (type) {
    case BURN:
      return {
        ...state,
        init: state.init + payload,
        fault: state.fault - payload,
      };
    default:
      return state;
  }
};

export default reducer;
