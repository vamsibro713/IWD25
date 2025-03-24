import React, { useState, useEffect } from "react";

function Tasks() {
  const email = localStorage.getItem("userEmail");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    const savedPath = JSON.parse(localStorage.getItem("learningPath"));
    if (savedPath) {
      setTasks(savedPath);
    } else {
      fetch(`http://localhost:5000/get-learning-path/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setTasks(data.learningPath);
            localStorage.setItem("learningPath", JSON.stringify(data.learningPath));
          } else {
            alert("No learning path found.");
          }
        });
    }
  }, [email]);

  const handleTaskComplete = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: true } : task
      )
    );
    setCompletedTasks((prev) => prev + 1);

    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: true } : task
    );
    localStorage.setItem("learningPath", JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <h1>AI-Powered Learning Tasks</h1>
      <div style={{ width: "100%", backgroundColor: "#ddd" }}>
        <div style={{ width: `${(completedTasks / tasks.length) * 100}%`, backgroundColor: "#27ae60", height: "20px" }}></div>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.title} {task.completed ? "✔" : <button onClick={() => handleTaskComplete(index)}>Complete</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
