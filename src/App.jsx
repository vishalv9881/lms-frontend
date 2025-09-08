import { Route, Routes } from "react-router-dom";
import Navbar from "./components/student/Navbar";

import AuthForm from "./components/AuthForm";
import RegisterPage from "./components/RegisterPage";
import CourseDetails from "./pages/students/CourseDetails";
import CourseList from "./pages/students/CourseList";
import Home from "./pages/students/Home";
import MyEnrolled from "./pages/students/MyEnrollment";
import Player from "./pages/students/Player";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player/:courseId" element={<Player />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/enroll" element={<MyEnrolled />} />

          {/* ✅ Auth Routes */}
          <Route path="/login" element={<AuthForm />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
