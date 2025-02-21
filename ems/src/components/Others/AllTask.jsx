import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  console.log(authData.employee);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 ">
      <div className="bg-[#282828] mb-2 py-2 px-4 flex justify-between rounded border-2 border-emerald-300">
        <h2 className="w-1/5 text-white-600 font-bold">Employee Name</h2>
        <h3 className="w-1/5 text-blue-600 font-bold">New Task</h3>
        <h5 className="w-1/5 text-yellow-400 font-bold">Active Task</h5>
        <h5 className="w-1/5 text-green-600 font-bold">Completed</h5>
        <h5 className="w-1/5 text-red-600 font-bold">Failed</h5>
      </div>
      <div className="overflow-auto ">
        {authData.employee.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="bg-[#282828] mb-2 py-2 px-4 flex justify-between rounded border-2 border-emerald-600"
            >
              <h2 className="w-1/5 text-white-600 font-bold">
                {elem.firstName}
              </h2>
              <h3 className="w-1/5 text-blue-600 font-bold">
                {elem.taskSummary.newTask}
              </h3>
              <h5 className="w-1/5 text-yellow-400 font-bold">
                {elem.taskSummary.active}
              </h5>
              <h5 className="w-1/5 text-green-600 font-bold">
                {elem.taskSummary.completed}
              </h5>
              <h5 className="w-1/5 text-red-600 font-bold">
                {elem.taskSummary.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
