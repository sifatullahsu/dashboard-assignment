import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import calendar from '../assets/calendar.png';
import clock from '../assets/clock.png';
import user from '../assets/user.png';
import zoom from '../assets/zoom.png';

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';


const CourseSlider = ({ data }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {
        data?.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div className='bg-white rounded-lg shadow-md p-5 space-y-5'>
                <h4>{item?.name}</h4>
                <div className='grid grid-cols-2 gap-1 text-[#828282] text-xs'>
                  <div>
                    <img src={calendar} alt="" className='inline pr-1' />
                    <span>{item?.date}</span>
                  </div>
                  <div>
                    <img src={user} alt="" className='inline pr-1' />
                    <span>{item?.user}</span>
                  </div>
                  <div>
                    <img src={clock} alt="" className='inline pr-1' />
                    <span>{item?.time}</span>
                  </div>
                  <div>
                    <img src={zoom} alt="" className='inline pr-1' />
                    <span>{item?.platform}</span>
                  </div>
                </div>
                <div className='space-y-3'>
                  <p className='text-[13px] font-semibold'>Students</p>
                  <div className='flex items-center space-x-3'>
                    <div className="avatar-group -space-x-6">
                      {
                        item?.students?.map((student, i) =>
                          <div key={i} className="avatar">
                            <div className="w-10"><img src={student} alt="" /></div>
                          </div>
                        )
                      }
                    </div>
                    <div className='text-[#828282] text-xs'>+ 25 people joined the class</div>
                  </div>
                </div>
                <Link className='btn btn-primary w-full rounded-[10px] h-[37px] min-h-[37px]'>Start the class</Link>
              </div>
            </SwiperSlide>

          );
        })
      }
    </Swiper>
  );
};

export default CourseSlider;