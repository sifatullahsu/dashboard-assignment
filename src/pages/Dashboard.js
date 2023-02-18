import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import CourseSlider from '../components/CourseSlider';
import PageHeading from '../components/PageHeading';
import UpdateGrid from '../components/UpdateGrid';

import lastUpdate from '../data/lastUpdate';
import upcommingCourses from '../data/upcommingCourses';

import increaseIcon from '../assets/increase.png';
import linearIcon from '../assets/linear.png';
import TopicHeading from '../components/TopicHeading';

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
            <div className='grid grid-cols-2 gap-5'>

              <div className='p-5 rounded-lg relative space-y-3 min-h-[147.5px]' style={{ boxShadow: "0px 3.20559px 32.0559px rgba(0, 0, 0, 0.08)" }}>
                <BsThreeDotsVertical className='absolute top-5 right-5'></BsThreeDotsVertical>
                <p className='text-[13px] font-semibold'>students</p>
                <h2 className='text-3xl'>10</h2>
                <div className='text-xs'>
                  <img src={increaseIcon} className='inline' alt="" />
                  <span className='text-[#4EAF51]'>13.02%</span>
                  <span>From May</span>
                </div>
              </div>
              <div className='p-5 rounded-lg relative space-y-3 min-h-[147.5px]' style={{ boxShadow: "0px 3.20559px 32.0559px rgba(0, 0, 0, 0.08)" }}>
                <BsThreeDotsVertical className='absolute top-5 right-5'></BsThreeDotsVertical>
                <p className='text-[13px] font-semibold'>Income</p>
                <h2 className='text-3xl'>12</h2>
                <div className='text-xs'>
                  <img src={linearIcon} className='inline' alt="" />
                  <span>0.0%</span>
                  <span>From May</span>
                </div>
              </div>
              <div className='p-5 rounded-lg relative space-y-3 min-h-[147.5px]' style={{ boxShadow: "0px 3.20559px 32.0559px rgba(0, 0, 0, 0.08)" }}>
                <BsThreeDotsVertical className='absolute top-5 right-5'></BsThreeDotsVertical>
                <p className='text-[13px] font-semibold'>questions</p>
                <h2 className='text-3xl'>23</h2>
              </div>
              <div className='p-5 rounded-lg relative space-y-3 min-h-[147.5px]' style={{ boxShadow: "0px 3.20559px 32.0559px rgba(0, 0, 0, 0.08)" }}>
                <BsThreeDotsVertical className='absolute top-5 right-5'></BsThreeDotsVertical>
                <p className='text-[13px] font-semibold'>Overdue questions</p>
                <h2 className='text-3xl'>11</h2>
              </div>

            </div>
          </div>
          <div className='basis-6/12 max-w-[50%]'>

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