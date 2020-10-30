import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./pages/App";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact.jsx";

const Root = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Root;
