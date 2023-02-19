import React from 'react';
import CourseSlider from '../components/CourseSlider';
import PageHeading from '../components/PageHeading';
import UpdateGrid from '../components/UpdateGrid';
import upcommingCourses from '../data/upcommingCourses';
import TopicHeading from '../components/TopicHeading';
import StudentTraffic from '../components/StudentTraffic';
import Statestics from '../components/Statestics';

import lastUpdate from '../data/lastUpdate';

const Dashboard = () => {

  return (
    <div className='space-y-8'>
      <PageHeading
        heading='Welcome Back, Mr.Arpit Lad 👋'
        text='Here are some insights for your daily activty'
      ></PageHeading>


      <div>
        <TopicHeading title='Mentor Dashboard'></TopicHeading>
        <div className='flex flex-wrap justify-between'>
          <div className='basis-6/12 max-w-[50%]'>
            <Statestics></Statestics>
          </div>
          <div className='basis-6/12 max-w-[50%] pl-5'>
            <StudentTraffic></StudentTraffic>
          </div>
        </div>
      </div>


      <div className='flex flex-wrap justify-between'>
        <div className='basis-6/12 max-w-[50%]'>
          <TopicHeading title='Upcoming live Courses'></TopicHeading>
          <CourseSlider data={upcommingCourses}></CourseSlider>
        </div>
        <div className='basis-5/12 max-w-[41.66%]'>
          <TopicHeading title='Latest Updates'></TopicHeading>
          <UpdateGrid data={lastUpdate}></UpdateGrid>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;