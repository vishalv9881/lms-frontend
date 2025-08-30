import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  const { allCourses, fetchAllCourses } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        await fetchAllCourses();

        // 👇 Add one demo course manually
        const extraCourse = {
          courseId: 999,
          courseTitle: "React & Spring Boot Fullstack",
          coursePrice: 499,
          discount: 20,
          courseThumbnail: "https://img.youtube.com/vi/CBWnBi-awSA/maxresdefault.jpg",
        };

        setCourses([...allCourses, extraCourse]); // merge fetched + extra
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, [allCourses]);

  return (
    <div className="w-full bg-gradient-to-br from-cyan-50 to-blue-50 px-6 md:px-20 py-16 rounded-2xl shadow-sm">
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Learn from the <span className="text-blue-600">Best Courses</span>
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-sm md:text-base text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover our top-rated courses and start your learning journey today!
          Gain skills with expert instructors, flexible learning schedules, and 
          hands-on projects to shape your future career.
        </p>
      </div>

      {/* Course List */}
      {loading ? (
        <p className="mt-10 text-gray-500 text-center">Loading courses...</p>
      ) : courses && courses.length > 0 ? (
        <div className="grid gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id || course.courseId} className="transform transition duration-300 hover:scale-105">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-red-500 text-center">No courses available</p>
      )}

      {/* Button */}
      <div className="text-center">
        <Link
          to="/courses"
          onClick={() => window.scrollTo(0, 0)}
          className="mt-12 inline-block bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default CourseSection;
