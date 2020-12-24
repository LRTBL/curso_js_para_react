import styled from "../styled-components/index.js";
import React, { component as Component } from "../react/index.js";

const TitleStyled = styled.h1`
  color: orange;
  font-family: system-ui;
  font-size: 50px;
  text-shadow: 2px 2px 0 black;
`;

const props = {
  message: "no te rindas",
  number: "1",
};

const Title = Component`<marquee> ${"message"} </marquee>`(props);

React();

export default TitleStyled(Title);
