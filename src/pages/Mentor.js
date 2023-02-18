import React from 'react';
import CourseGrid from '../components/CourseGrid';
import coursesData from '../data/courses';

const Mentor = () => {
  return (
    <div className='flex'>
      <div className='basis-6/12'>
        <CourseGrid data={coursesData}></CourseGrid>
      </div>
      <div className='basis-6/12'>
      </div>
    </div>
  );
};

export default Mentor;