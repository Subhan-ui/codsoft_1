import React, { Fragment, useEffect, useState } from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import Navbar from "./component/header/Navbar";
import About from "./component/About/About";
import Footer from "./component/header/Footer";
import Home from "./component/Home/Home";
import ProjectMain from "./component/Projects/ProjectMain";
import Welcome from "./component/Welcome/Welcome";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false);
    }, 1500);
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="wholeComponent">
        {showWelcome && <Welcome />}
        <Switch>
          {!showWelcome && (
            <Route path="/" exact>
              <Home />
            </Route>
          )}
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/projects" exact>
            <ProjectMain />
          </Route>
          <Route path="*" exact>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
