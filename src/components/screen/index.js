import React from "react";
import { Container, Unit } from "./styles/Screen";

export default function Screen(props) {
  let temp = parseInt(props.number.join(""), 10);

  return <Screen.Container>{temp}<Unit >&nbsp;Px</Unit></Screen.Container>;
}

Screen.defaultProps = { number: [0] };

Screen.Container = ({children, ...restProps}) => (<Container {...restProps}>{children}</Container>)

Screen.Secondary = ({ number }) => (<Container>{number}<Unit rem>&nbsp;Rem</Unit></Container>)
