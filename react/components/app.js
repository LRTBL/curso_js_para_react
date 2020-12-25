import { Component } from "../lib/react.js";
import User from "./user.js";
import UserStyled from "./user-styled.js";
import Wrapper from "./wrapper.js";

class App extends Component {
  render() {
    return `
        <div class="app">
        ${new Wrapper({
          children: `
            ${new User({
              name: "Ash",
              avatar: "./images/ash.jpg",
            }).render()}
            `,
        }).render()}
        ${new UserStyled({ name: "Ash styled", avatar: "./images/ash.jpg" }).render()}
        </div>
        `;
  }
}

export default App;
