import React from 'react'
import Project from './Project'

// import PROJECTS array from data.js
import PROJECTS from '../data/data'

const Projects = () => (
  //
  <div>
    <h2>Highlighted Projects</h2>
    <div className='ui grid'>
      {PROJECTS.map((PROJECT) => (
        <div>
          <div className='three wide column'>
            <div class='ui segment'>
              <Project key={PROJECT.id} project={PROJECT} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Projects

// We use the map fn to transform the project data items to individual pieces of jsx to render. So with that we have a callback fn to pass into the map ands the actual parameter to the callback is each PROJECT, one at a time.
