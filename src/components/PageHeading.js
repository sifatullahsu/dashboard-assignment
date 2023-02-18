import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/search.png';

const PageHeading = ({ heading, text }) => {
  return (
    <div className='flex justify-between pt-4 pb-5 border-b border-[#C7C9D9]'>
      <div>
        <h2 className='mb-2'>{heading}</h2>
        <p className='text-xl' style={{ color: "#555770" }}>{text}</p>
      </div>
      <div className='flex space-x-2'>
        <button className='btn btn-secondary'>
          <img src={searchIcon} alt="" />
        </button>
        <Link to='/' className='btn btn-primary'>+ Invite Students</Link>
      </div>
    </div>
  );
};

export default PageHeading;