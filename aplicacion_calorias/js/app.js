import store from "./store.js";
import { BURN } from "./actions/index.js";
// store.dispatch()
// store.getState()
// store.subscribe()

store.subscribe(() => {
  window.result.textContent = `Haz quedamdo ${store.getState().init} calorias`;
  window.fault.textContent = `Te quedan ${store.getState().fault} calorias`;
});

const burn = () => {
  store.dispatch({
    type: BURN,
    payload: 1.42,
  });
};
window.burn.addEventListener("click", burn);
