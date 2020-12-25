import { Component, createElement } from "../lib/react/index.js";
// import User from "./user.js";
// import UserStyled from "./user-styled.js";
// import Wrapper from "./wrapper.js";

const element = createElement(
  "h1",
  {
    class: "hola mundo",
  },
  "hola mundo desde create element",
);
class App extends Component {
  render() {
    return createElement(
      "div",
      { class: "app", children: [createElement("h1", {}, "hola"), createElement("h1", {}, "hola"), createElement("h1", {}, "hola"), createElement("h1", {}, "hola"), createElement("h1", {}, "hola")] },
      "esta es la app",
    );
  }
}

// ${new Wrapper({
//   children: `
//     ${new User({
//       name: "Ash",
//       avatar: "./images/ash.jpg",
//     }).render()}
//     `,
// }).render()}
// ${new UserStyled({ name: "Ash styled", avatar: "./images/ash.jpg" }).render()}
export default App;
