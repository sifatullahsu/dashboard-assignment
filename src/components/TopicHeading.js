import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const TopicHeading = ({ title }) => {
  return (
    <h3 className='mb-3 font-medium'>
      {title}
      <BsThreeDotsVertical className='inline mb-1 text-[#8F90A6]'></BsThreeDotsVertical>
    </h3>
  );
};

export default TopicHeading;