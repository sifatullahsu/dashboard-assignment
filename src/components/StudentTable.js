import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const StudentTable = ({ data }) => {

  const getStatusClass = (status) => {
    return status === 'Submitted' ? 'bg-[#E6F3E5] text-[#4EAF51]' : status === 'Pending' ? 'bg-[#C0DEFF] text-[#3949AB]' : 'bg-[#FDE4E1] text-[#F54336]';
  }

  return (
    <div className='px-5 pt-6 rounded-xl' style={{ boxShadow: '0px 3.20559px 32.0559px rgba(0, 0, 0, 0.08)' }}>
      <h4>Students of batch 1</h4>
      <div className="overflow-x-auto w-full mt-3">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th><label><input type="checkbox" className="checkbox" /></label></th>
              <th>Name</th>
              <th>Email</th>
              <th>Assignment</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((item, i) => {
                return (
                  <tr>
                    <th><label><input type="checkbox" className="checkbox" /></label></th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-circle w-9 h-9">
                            <img src={item?.img} alt="" />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-[#3949AB]">{item?.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{item?.email}</td>
                    <td><span className={`badge badge-ghost badge-sm ${getStatusClass(item?.status)}`}>{item?.status}</span></td>
                    <th>
                      <button className="btn btn-ghost">
                        <BsThreeDotsVertical></BsThreeDotsVertical>
                      </button>
                    </th>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;