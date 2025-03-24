import React, { useState } from "react";

function Paths() {
  const [userEmail, setUserEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [skills, setSkills] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [learningPath, setLearningPath] = useState([]);

  const generateLearningPath = () => {
    if (!branch || !year || !skills || !skillLevel) {
      alert("Please fill all fields.");
      return;
    }

    const aiGeneratedPath = [
      { stepNumber: 1, title: `Master ${skills} fundamentals`, completed: false },
      { stepNumber: 2, title: `Advanced concepts in ${skills}`, completed: false },
      { stepNumber: 3, title: `Build real-world projects with ${skills}`, completed: false },
      { stepNumber: 4, title: `Prepare for ${skills} job interviews`, completed: false },
      { stepNumber: 5, title: `Apply for top ${skills}-related roles`, completed: false },
    ];

    setLearningPath(aiGeneratedPath);

    fetch("http://localhost:5000/save-learning-path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail, branch, year, skills, skillLevel, learningPath: aiGeneratedPath }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("learningPath", JSON.stringify(aiGeneratedPath));
        } else {
          alert("Error saving learning path");
        }
      });
  };

  return (
    <div>
      <h1>AI-Powered Learning Paths</h1>
      <input type="text" placeholder="Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
      <br/>
      <input type="text" placeholder="Branch" value={branch} onChange={(e) => setBranch(e.target.value)} />
      <br/>
      <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
      <br/>
      <input type="text" placeholder="Skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
      <br/>
      <select onChange={(e) => setSkillLevel(e.target.value)}>
        <option value="">Select Level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
      <br/>
      <button onClick={generateLearningPath}>Generate Learning Path</button>

      {learningPath.length > 0 && (
        <div>
          <h2>Generated Learning Path:</h2>
          <ul>
            {learningPath.map((step) => (
              <li key={step.stepNumber}>{step.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Paths;
