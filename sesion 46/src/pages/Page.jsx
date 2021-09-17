/**
 * Dependencies
 */
import React, { Suspense } from "react";
import { Route } from "react-router-dom";

/**
 * Views/pages components
 */
import Home from './home/Home';
import Courses from './courses/Courses';
import Events from './events/Events';

/**
 * Others
 */
import { URLS } from '../utils/constants';

/**
 * punto de entrada (entry point)
 * declaramos las rutas de nuestra app
 */

const Loading = () => <p>Cargando...</p>;

function Pages() {
  return (
    <main className="main">
      <Suspense fallback={<Loading />}>
        <Route path={URLS.base} exact component={Home} />
        <Route path={URLS.courses} component={Courses} />
        <Route path={URLS.events} component={Events} />
      </Suspense>
    </main>
  );
}

export default Pages;