import React from "react";
import { Switch, Route } from "react-router-dom";
import { App, Home, AboutPage, Services, Contact } from "pages";

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
