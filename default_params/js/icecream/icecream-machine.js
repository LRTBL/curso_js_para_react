import { isRequired } from "./validations.js";
function makeIcecream([flavor1 = isRequired("flavor1"), flavor2 = isRequired("flavor2"), ...otherFlavors]) {
  // console.log(flavor1)
  const toppings = otherFlavors.map((f) => f.dataset.flavor);
  alert(`tienes un rico helado de ${flavor1.dataset.flavor} y ${flavor2.dataset.flavor} ${toppings.length !== 0 ? `con toppings ${toppings}` : ""}`);
}

export { makeIcecream };
