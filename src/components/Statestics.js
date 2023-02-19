import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import increaseIcon from '../assets/increase.png';
import linearIcon from '../assets/linear.png';

const Statestics = () => {
  return (
    <div className='grid grid-cols-2 gap-5'>

      <div className='p-5 rounded-lg relative space-y-3 min-h-[135.5px]' style={{ boxShadow: "0px 3.20559px 32.0559px rgba(0, 0, 0, 0.08)" }}>
        <p className='text-[13px] font-semibold'>students</p>
        <BsThreeDotsVertical className='absolute top-5 right-5'></BsThreeDotsVertical>
        <h2 className='text-3xl'>10</h2>
        <div className='text-xs'>
          <img src={increaseIcon} className='inline' alt="" />
          <span className='text-[#4EAF51]'>13.02%</span>
          <span>From May</span>
        </div>
      </div>

      <div className='p-5 rounded-lg relative space-y-3 min-h-[135.5px]' style={{ boxShadow: "0px 3.20559px 32.0559px rgba(0, 0, 0, 0.08)" }}>
        <p className='text-[13px] font-semibold'>Income</p>
        <BsThreeDotsVertical className='absolute top-5 right-5'></BsThreeDotsVertical>
        <h2 className='text-3xl'>12</h2>
        <div className='text-xs'>
          <img src={linearIcon} className='inline' alt="" />
          <span>0.0%</span>
          <span>From May</span>
        </div>
      </div>

      <div className='p-5 rounded-lg relative space-y-3 min-h-[135.5px]' style={{ boxShadow: "0px 3.20559px 32.0559px rgba(0, 0, 0, 0.08)" }}>
        <p className='text-[13px] font-semibold'>questions</p>
        <BsThreeDotsVertical className='absolute top-5 right-5'></BsThreeDotsVertical>
        <h2 className='text-3xl'>23</h2>
      </div>

      <div className='p-5 rounded-lg relative space-y-3 min-h-[135.5px]' style={{ boxShadow: "0px 3.20559px 32.0559px rgba(0, 0, 0, 0.08)" }}>
        <p className='text-[13px] font-semibold'>Overdue questions</p>
        <BsThreeDotsVertical className='absolute top-5 right-5'></BsThreeDotsVertical>
        <h2 className='text-3xl'>11</h2>
      </div>

    </div>
  );
};

export default Statestics;