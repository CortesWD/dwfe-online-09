/**
 * Dependencies
 */
import React from "react";
import { Route } from 'react-router-dom';

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

const { courses } = URLS;

function Courses() {
  return (
    <div>
      <Route exact path={courses} component={CourseList} />
      {CURSOS.map(curso => {
        const { pathName, name, image } = curso;
        return (
          <Route
            exact
            path={`${courses}${pathName}`}
            render={() => {
              return <Course name={name} image={image} />
            }}
          />
        );
      })}
    </div>
  )
}

export default Courses;