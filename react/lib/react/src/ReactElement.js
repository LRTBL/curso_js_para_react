import { render } from "../../react-dom.js";

function renderChildren(children, container) {
  if (Array.isArray(children)) {
    return children.forEach((child) => {
      render(child, container);
    });
  }
  return render(children, container);
}

function setProperties(props, value, element) {
  if (props === "children") renderChildren(value, element);
  const attribute = value;
  return element.setAttribute(props, attribute);
}

export function createElement(type, props, content) {
  const element = document.createElement(type);
  if (content) element.textContent = content;
  Object.keys(props).forEach((prop) => setProperties(prop, props[prop], element));
  return element;
}
