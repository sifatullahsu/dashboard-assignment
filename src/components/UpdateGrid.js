import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';



const UpdateGrid = ({ data }) => {

  if (!data) return <></>

  return (
    <div className='bg-white rounded-lg shadow-md p-5 space-y-3'>
      {
        data?.map((item, i) => {
          return (
            <div key={i} className='flex'>
              <div className='basis-full'>
                <div className='flex space-x-3 max-w-[280px]'>
                  <div className='basis-10'>
                    <img src={item.image} alt="" />
                  </div>
                  <div className='basis-full'>
                    <p className='text-xs text-neutral'>{item.text}</p>
                    <span className='text-xs font-normal' style={{ color: '#a0a3af' }}>{item.time}</span>
                  </div>
                </div>
              </div>
              <div className='basis-10'>
                {
                  item?.link &&
                  <Link to={item?.link} className='btn btn-sm btn-ghost'><BsChevronRight></BsChevronRight></Link>
                }
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default UpdateGrid;