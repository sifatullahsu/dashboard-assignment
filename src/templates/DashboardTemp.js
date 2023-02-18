import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardTemp = () => {
  return (
    <div className='flex min-h-screen'>

      <div className='basis-[300px] min-h-full' style={{ boxShadow: "0px 2px 30px rgba(0, 0, 0, 0.06)" }}>
        <Sidebar></Sidebar>
      </div>

      <div className='basis-full'>
        <div className='p-5'>
          <Outlet></Outlet>
        </div>
      </div>

    </div>
  );
};

export default DashboardTemp;