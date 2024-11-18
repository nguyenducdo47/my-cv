import React from 'react';
import Sidebar from './Sidebar';
import Objective from './Objective';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import ScrollToTopButton from './ScrollToTopButton';
const Resume = () => ( 
    <div>
      <div className="row">
        <div className="col-12 col-md-3">
          <Sidebar />
        </div>
        <div className="col-12 col-md-9 resume-content" >
          <div className="p-4" style={{ textAlign: 'justify'}}>
           
            <Objective />
            <Education />
            <WorkExperience />
            <Projects />
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
  
  export default Resume;
  
