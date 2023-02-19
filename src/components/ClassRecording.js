import React from 'react';

const ClassRecording = ({ data }) => {

  return (
    <div>
      <h4>Class Recordings</h4>
      <div className='grid grid-cols-2 gap-5 mb-5 mt-2'>
        {
          data?.map((item, i) => {
            return (
              <div className='bg-white rounded-lg' style={{ boxShadow: '0px 3.21px 32.06px rgba(0, 0, 0, 0.08)' }}>
                <img src={item?.img} className='w-full' alt="" />
                <div className='px-2 py-1'>
                  <p className='font-medium'>{item?.heading}</p>
                  <span className='text-[#626161] text-xs'>{item?.text}</span>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default ClassRecording;