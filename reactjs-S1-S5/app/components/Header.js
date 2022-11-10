import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLoggedOut from "./HeaderLoggedOut";
import HeaderLoggedIn from "./HeaderLoggedIn";

function Header(props) {
  // useState() provided a parameter, so if it's true, if u refresh page, it will still be signed in.
  // const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexappToken")));
  // initially is was const [loggedIn, setLoggedIn] = useState();

  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            {" "}
            ComplexApp{" "}
          </Link>
        </h4>
        {props.loggedIn ? <HeaderLoggedIn setLoggedIn={props.setLoggedIn} /> : <HeaderLoggedOut setLoggedIn={props.setLoggedIn} />}
      </div>
    </header>
    // In the HeaderLoggedOut file, it has no access to setLoggedIn state,
    // so need that curly braces to pass as a prop.
  );
}

export default Header;
