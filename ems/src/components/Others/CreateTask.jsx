import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, settaskTitle] = useState("");
  const [taskDesription, settaskDesription] = useState("");
  const [taskdate, setTaskdate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [Category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDesription,
      assignTo,
      taskdate,
      Category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = JSON.parse(localStorage.getItem("employees"));

    data.forEach((elem) => {
      if (elem.firstName === assignTo) {
        elem.tasks.push(newTask);
      }
    });

    localStorage.setItem("employees", JSON.stringify(data));

    setAssignTo("");
    setCategory("");
    setTaskdate("");
    settaskDesription("");
    settaskTitle("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex w-full flex-wrap items-start justify-between"
      >
        <div className="w-1/2 ">
          <div>
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                type="text"
                placeholder="Make Ui Desing"
                value={taskTitle}
                onChange={(e) => {
                  settaskTitle(e.target.value);
                }}
              />
            </div>
            <h3 className="text-sm text-gray-300 mb-1 mt-1">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="date"
              name=""
              id=""
              value={taskdate}
              onChange={(e) => {
                setTaskdate(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1 mt-1 ">Assign To</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="Emp Name"
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1 mt-1 ">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="Desing ya Dev"
              value={Category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-1 mt-1 ">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols="30"
            rows="10"
            value={taskDesription}
            onChange={(e) => {
              settaskDesription(e.target.value);
            }}
          ></textarea>
          <button className="bg-emerald-500 py-3 px-4 rounded mt-4 text-sm w-full hover:bg-emerald-600">
            Crate Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
