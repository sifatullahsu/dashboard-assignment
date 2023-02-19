import React from 'react';
import CourseGrid from '../components/CourseGrid';
import CourseSlider from '../components/CourseSlider';
import TopicHeading from '../components/TopicHeading';
import UpdateGrid from '../components/UpdateGrid';
import coursesData from '../data/courses';

import questions from '../data/questions';
import upcommingCourses from '../data/upcommingCourses';

const Mentor = () => {
  return (
    <div className='flex flex-wrap'>
      <div className='basis-6/12 max-w-[50%]'>
        <TopicHeading title='Your courses'></TopicHeading>
        <CourseGrid data={coursesData}></CourseGrid>
      </div>
      <div className='basis-6/12 max-w-[50%] px-5' style={{ background: '#fafcfe' }}>
        <div className='py-5'>
          <TopicHeading title='Upcoming live Courses'></TopicHeading>
          <CourseSlider data={upcommingCourses}></CourseSlider>
        </div>

        <div className='mt-4'>
          <TopicHeading title='Questions'></TopicHeading>
          <UpdateGrid data={questions}></UpdateGrid>
        </div>
      </div>
    </div>
  );
};

export default Mentor;