/**
 * Dependencies
 */
import React from "react";
import { Route, Switch } from "react-router-dom";

/**
 * Views/pages components
 */
import Home from './home/Home';
import Courses from './courses/Courses';
import Events from './events/Events';
import NotFound from './notFound/NotFound';

/**
 * Others
 */
import { URLS } from '../utils/constants';

/**
 * punto de entrada (entry point)
 * declaramos las rutas de nuestra app
 */
function Pages() {
  return (
    <main className="main">
      <Switch>
        <Route path={URLS.base} exact component={Home} />
        <Route path={URLS.courses} component={Courses} />
        <Route path={URLS.events} component={Events} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default Pages;