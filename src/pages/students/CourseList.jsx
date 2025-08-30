import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/educators/Footer";
import CourseCard from "../../components/student/CourseCard";
import SearchBar from "../../components/student/SearchBar";
import { AppContext } from "../../context/AppContext";

const CourseList = () => {
  const navigate = useNavigate();
  const { allCourses } = useContext(AppContext);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    setFilteredCourses(allCourses || []);
  }, [allCourses]);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredCourses(allCourses);
    } else {
      setFilteredCourses(
        allCourses.filter((course) =>
          course.courseTitle.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  const handleShowAll = () => {
    setFilteredCourses(allCourses);
  };

  return (
    <>
      <div className="p-6">
        {/* Top Section with Title & Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Course List</h1>
            <p className="text-gray-500 mt-2">
              <span
                onClick={() => navigate("/")}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Home
              </span>{" "}
              / <span className="text-gray-700">Course List</span>
            </p>
          </div>

          {/* Right: Search + Show All */}
          <div className="flex gap-3 items-center w-full md:w-auto">
            <div className="w-full md:w-72 lg:w-96">
              <SearchBar onSearch={handleSearch} />
            </div>
            <button
              onClick={handleShowAll}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full text-sm shadow-sm transition"
            >
              Show All
            </button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredCourses && filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No courses found.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseList;
