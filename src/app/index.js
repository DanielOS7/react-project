import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";


import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                    <Route path={"/"} component={Root} />
                    <Route exact path={"/"} component={Home} />
                    <Route path={"/home"} component={Home} />
                    <Route path={"/user"} component={User} />
            </BrowserRouter>
        );
    }
}

// ===============================

render(<App />, window.document.getElementById("app"));
