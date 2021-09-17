/**
 * Dependencies
 */
import React from "react";
import { Route, Switch } from 'react-router-dom';

/**
 * Components
 */
import CourseList from './components/courseList/CourseList';

/**
 * Styles
 */
import './Courses.css';

/**
 * Cursos
 */
import { CURSOS, URLS } from '../../utils/constants';
import Course from './components/course/Course';
import NotFound from '../notFound/NotFound';

const { courses } = URLS;

function Courses() {
  return (
    <div>
      <Switch>
        <Route exact path={courses} component={CourseList} />
        {CURSOS.map(curso => {
          const { pathName, name, image, id } = curso;
          return (
            <Route
              key={id}
              exact
              path={`${courses}${pathName}`}
              render={() => {
                return <Course name={name} image={image} />
              }}
            />
          );
        })}
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default Courses;