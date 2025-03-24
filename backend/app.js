import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://bhargav3516:Bhargav1635@cluster0.p7zjr.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

// Learning Path Schema
const LearningPathSchema = new mongoose.Schema({
  userId: String,
  branch: String,
  year: String,
  skills: String,
  skillLevel: String,
  learningPath: [
    {
      stepNumber: Number,
      title: String,
      completed: Boolean,
    },
  ],
  jobs: [String],
  companies: [String],
  salaries: [String],
});

const LearningPath = mongoose.model("LearningPath", LearningPathSchema);

// Signup API
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.json({ success: false, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.json({ success: true, message: "Signup successful" });
  } catch (error) {
    res.json({ success: false, message: "Error signing up" });
  }
});

// Login API
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.json({ success: false, message: "Invalid credentials" });

    res.json({
      success: true,
      message: "Login successful",
      userId: user._id,
      userEmail: user.email,
    });
  } catch (error) {
    res.json({ success: false, message: "Error logging in" });
  }
});

// Generate Learning Data API
app.post("/generate-learning-data", async (req, res) => {
  const { branch, year, skills, skillLevel } = req.body;

  // Replace this with your AI logic (e.g., using a language model API)
  const learningPath = [
    { stepNumber: 1, title: `Master ${skills} fundamentals`, completed: false },
    { stepNumber: 2, title: `Advanced concepts in ${skills}`, completed: false },
  ];
  const jobs = [`${skills} Developer`, `${skills} Engineer`];
  const companies = ["Tech Company A", "Tech Company B"];
  const salaries = ["$80,000", "$90,000"];

  res.json({ success: true, learningPath, jobs, companies, salaries });
});

// Save Learning Path API
app.post("/save-learning-path", async (req, res) => {
  const {
    userEmail,
    branch,
    year,
    skills,
    skillLevel,
    learningPath,
    jobs,
    companies,
    salaries,
  } = req.body;
  try {
    const user = await User.findOne({ email: userEmail });
    if (!user) return res.json({ success: false, message: "User not found" });

    const formattedPath = learningPath.map((title, index) => ({
      stepNumber: index + 1,
      title,
      completed: false,
    }));

    const newPath = new LearningPath({
      userId: user._id,
      branch,
      year,
      skills,
      skillLevel,
      learningPath: formattedPath,
      jobs,
      companies,
      salaries,
    });
    await newPath.save();

    res.json({ success: true, message: "Learning path saved" });
  } catch (error) {
    res.json({
      success: false,
      message: "Error saving learning path",
      error: error.message,
    });
  }
});

// Get Learning Path by Email API
app.get("/get-learning-path/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    const path = await LearningPath.findOne({ userId: user._id }).sort({
      _id: -1,
    });
    if (!path)
      return res.json({ success: false, message: "No learning path found" });

    res.json({ success: true, learningPath: path });
  } catch (error) {
    res.json({ success: false, message: "Error fetching learning path" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));