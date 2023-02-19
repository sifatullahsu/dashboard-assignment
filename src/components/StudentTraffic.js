import React from 'react';
import { BsRecordCircleFill, BsThreeDotsVertical } from 'react-icons/bs';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';


const StudentTraffic = () => {

  const data = [
    { name: "Group B", value: 30 },
    { name: "Group A", value: 48 },
    { name: "Group C", value: 13 },
    { name: "Group D", value: 9 }
  ];
  const COLORS = ["#6E7BCF", "#3949AB", "#DCF2FE", "#5e72ba"];

  return (
    <div className='rounded-lg p-5 relative' style={{ boxShadow: '0px 3.20559px 32.0559px rgba(0, 0, 0, 0.08)' }}>
      <h4>Student Traffic</h4>
      <BsThreeDotsVertical className='absolute top-5 right-5'></BsThreeDotsVertical>

      <div className='grid grid-cols-2 gap-5 mt-10'>
        <div className='relative'>
          <ResponsiveContainer aspect={1.2}>
            <PieChart>
              <Pie
                data={data}
                cx={90}
                cy={90}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className='absolute rounded-full w-24 h-24 top-12 left-12 flex justify-center items-center flex-col' style={{ boxShadow: '0px 3.20559px 32.0559px rgba(0, 0, 0, 0.08)' }}>
            <p className='text-xs'>Students</p>
            <h3>56</h3>
          </div>
        </div>

        <div className='flex items-center'>
          <div className='grid grid-cols-2 gap-5'>
            <div>
              <h3 className='text-2xl font-medium'>15<span className='text-[#8F90A6] text-base'>(48%)</span></h3>
              <p className='text-[#555770]'>
                <BsRecordCircleFill className='inline mb-1 text-lg text-[#3949AB]'></BsRecordCircleFill> From you
              </p>
            </div>
            <div>
              <h3 className='text-2xl font-medium'>15<span className='text-[#8F90A6] text-base'>(30%)</span></h3>
              <p className='text-[#555770]'>
                <BsRecordCircleFill className='inline mb-1 text-lg text-[#6E7BCF]'></BsRecordCircleFill> Affilite
              </p>
            </div>
            <div>
              <h3 className='text-2xl font-medium'>15<span className='text-[#8F90A6] text-base'>(13%)</span></h3>
              <p className='text-[#555770]'>
                <BsRecordCircleFill className='inline mb-1 text-lg text-[#0A1C8D]'></BsRecordCircleFill> From us
              </p>
            </div>
            <div>
              <h3 className='text-2xl font-medium'>15<span className='text-[#8F90A6] text-base'>(9%)</span></h3>
              <p className='text-[#555770]'>
                <BsRecordCircleFill className='inline mb-1 text-lg text-[#DCF2FE]'></BsRecordCircleFill> Others
              </p>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
};

export default StudentTraffic;