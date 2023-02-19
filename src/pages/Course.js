import React from 'react';
import PageHeading from '../components/PageHeading';
import StudentTable from '../components/StudentTable';

import students from '../data/students';


const Course = () => {

  return (
    <div>
      <PageHeading
        heading='Course Page'
        text='Batch 1 Acoustic guitar'
      ></PageHeading>

      <StudentTable data={students}></StudentTable>

    </div>
  );
};

export default Course;