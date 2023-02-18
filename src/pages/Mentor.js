import React from 'react';
import CourseGrid from '../components/CourseGrid';
import UpdateGrid from '../components/UpdateGrid';
import coursesData from '../data/courses';

import questions from '../data/questions';

const Mentor = () => {
  return (
    <div className='flex space-x-5'>
      <div className='basis-6/12'>
        <CourseGrid data={coursesData}></CourseGrid>
      </div>
      <div className='basis-6/12 px-5' style={{ background: '#fafcfe' }}>
        <UpdateGrid data={questions}></UpdateGrid>
      </div>
    </div>
  );
};

export default Mentor;