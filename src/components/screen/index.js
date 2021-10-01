import React from "react";
import { Container } from "./styles/Screen";

export default function Screen(props) {
  let temp = parseInt(props.number.join(""), 10);

  return <Screen.Container>{temp}</Screen.Container>;
}

Screen.defaultProps = { number: [0] };

Screen.Container = ({children, ...restProps}) => (<Container {...restProps}>{children}</Container>)
