import React from 'react';

const CourseProgress = () => {

  const data = [
    {
      name: 'Module 1 : Introduction',
      classes: '2/2 classes',
      lectures: [
        {
          name: 'Lecture -7 The chords',
          time: "Today's class"
        },
        {
          name: 'Lecture -7 The chords',
          time: "Today's class"
        }
      ]
    },
    {
      name: 'Module 2 : Basics',
      classes: '4/4 classes',
      lectures: [
        {
          name: 'Lecture -7 The chords',
          time: "Today's class"
        },
        {
          name: 'Lecture -7 The chords',
          time: "Today's class"
        },
        {
          name: 'Lecture -7 The chords',
          time: "Today's class"
        },
        {
          name: 'Lecture -7 The chords',
          time: "Today's class"
        },
      ]
    },
    {
      name: 'Module 3 : Advanced',
      classes: '0/3 classes',
      lectures: [
        {
          name: 'Lecture -7 The chords',
          time: "Today's class"
        },
        {
          name: 'Lecture -7 The chords',
          time: "Today's class"
        },
        {
          name: 'Lecture -7 The chords',
          time: "Today's class"
        },
      ]
    },
  ]


  return (
    <div className='rounded-lg' style={{ boxShadow: '0px 3.21px 32.06px rgba(0, 0, 0, 0.08)' }}>
      <div className='p-3 pb-0'>
        <h4>Course Progress</h4>
      </div>

      <div className='flex justify-between p-5 pb-0'>
        <p className='font-semibold'><span className='text-[#3949AB] font-bold pr-5'>30%</span> Completed</p>
        <span className='text-[#8FA7B8]'>3 classes left</span>
      </div>
      <progress className="progress progress-primary w-full -mb-[7px]" value="30" max="100"></progress>

      <div className='modules'>
        {
          data?.map((item, i) => {
            return (
              <div key={i} className="collapse collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-[#E6F3E5] text-[#E6F3E5]-content peer-checked:bg-secondary py-2">
                  <p className='font-semibold'>{item?.name}</p>
                  <span className='text-xs'>{item?.classes}</span>
                </div>
                <div className="collapse-content">
                  <div className='pt-4 space-y-2'>
                    {
                      item?.lectures?.map((lecture, i) => {
                        return (
                          <div key={i} className='flex space-x-5'>
                            <label className='pt-1'><input type="checkbox" className="checkbox" /></label>
                            <div>
                              <p className='font-medium'>{lecture?.name}</p>
                              <span className='text-xs text-[#626161]'>{lecture?.time}</span>
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>

    </div>
  );
};

export default CourseProgress;