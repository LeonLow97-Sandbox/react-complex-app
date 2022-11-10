import React, { useEffect } from "react";
import Container from "./Container";

function Page(props) {
  useEffect(() => {
    // use backticks ``
    document.title = `${props.title} | ComplexApp`;
    // scroll up to top of page (web browser or DOM based code)
    window.scrollTo(0, 0);
  }, [props.title]);

  return <Container wide={props.wide}>{props.children}</Container>;
}

export default Page;
