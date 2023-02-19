import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import dashboardIcon from '../assets/dash.png';
import messangerIcon from '../assets/messenger.png';

const Sidebar = () => {
  return (
    <div className='flex min-h-full'>

      <div className='basis-20' style={{ boxShadow: "0px 2px 30px rgba(0, 0, 0, 0.06)" }}>
        <div className='p-1 mt-24'>

          <ul className="menu">
            <li><Link to='' className='mx-auto'><img src={messangerIcon} alt="" /></Link></li>
            <li><Link to='' className='mx-auto'><img src={messangerIcon} alt="" /></Link></li>
          </ul>

        </div>
      </div>

      <div className='basis-full'>
        <div className='pl-5 pt-8 pr-8 pb-5'>

          <span className='text-xs mb-2 inline-block text-base-100'>Dashboard</span>
          <ul className="menu">
            <li><NavLink to='/'><img src={dashboardIcon} alt="" />Home</NavLink></li>
            <li><NavLink to='/course'><img src={dashboardIcon} alt="" />Course</NavLink></li>
            <li><NavLink to='/mentor'><img src={dashboardIcon} alt="" />Mentor</NavLink></li>
          </ul>

        </div>
      </div>

    </div >
  );
};

export default Sidebar;