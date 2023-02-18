import React from 'react';
import rectangleImage from '../assets/rectangle.png';
import { Link } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';

const CourseGrid = ({ data }) => {

  return (
    <div className='space-y-5'>
      {
        data?.map((item, i) => {
          return (
            <div key={i} className='p-6 border rounded-md'>
              <div className='flex'>
                <div className='basis-5/12 border-r'>

                  <img src={rectangleImage} className='mb-3' alt="" />
                  <h2>{item?.name}</h2>

                  <div className='flex mt-6'>
                    <div className='basis-7/12'>
                      <p>Students</p>
                      <div className="avatar-group -space-x-6">
                        {
                          item?.students?.map((student, i) =>
                            <div key={i} className="avatar">
                              <div className="w-10"><img src={student} alt="" /></div>
                            </div>
                          )
                        }
                      </div>
                    </div>
                    <div className='basis-5/12'>
                      <p>Batches</p>
                      <h3 className='text-2xl'>{item?.batches?.length}</h3>
                    </div>
                  </div>
                </div>
                <div className='basis-7/12 flex items-center'>
                  <div className='pl-6 space-y-3 basis-full' >
                    {
                      item?.batches?.map((batche, i) =>
                        <Link to={batche?.link} className='btn-batch'>{batche?.text} <BsChevronRight></BsChevronRight></Link>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default CourseGrid;