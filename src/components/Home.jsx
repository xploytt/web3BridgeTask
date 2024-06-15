import React, { useEffect, useState } from "react";
import TaskWidget from "./TaskWidget";

function Home(props) {
  const [task, setTask] = useState("");
  const [showTaskWidget, setShowTaskWidget] = useState(false);

  const performTask = (e) => {
    setTask(e.target.dataset.task);
    setShowTaskWidget(true);
  };
  return (
    <div>
      <h1>Search Platform</h1>
      <h3>Click the task you'd like to perform..</h3>

      {showTaskWidget ? (
        <TaskWidget task={task} setShowTaskWidget={setShowTaskWidget} />
      ) : (
        <div>
          <button data-task="add" onClick={performTask}>
            Add
          </button>
          <button data-task="read" onClick={performTask}>
            Read
          </button>
          <button data-task="update" onClick={performTask}>
            Update
          </button>
          <button data-task="delete" onClick={performTask}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
