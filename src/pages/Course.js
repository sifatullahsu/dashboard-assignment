import React from 'react';
import ClassRecording from '../components/ClassRecording';
import PageHeading from '../components/PageHeading';
import StudentTable from '../components/StudentTable';

import students from '../data/students';
import classRecordings from '../data/classRecordings';
import CourseProgress from '../components/CourseProgress';


const Course = () => {

  return (
    <div>
      <PageHeading
        heading='Course Page'
        text='Batch 1 Acoustic guitar'
      ></PageHeading>

      <div className='flex space-x-5 mt-3'>
        <div className='basis-7/12'>
          <ClassRecording data={classRecordings}></ClassRecording>
        </div>
        <div className='basis-5/12'>
          <CourseProgress></CourseProgress>
        </div>
      </div>

      <StudentTable data={students}></StudentTable>

    </div>
  );
};

export default Course;