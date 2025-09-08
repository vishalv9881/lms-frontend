import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import { assets } from "../../assets/assets";
import CallToAction from "./CallToAction";
import Companies from "./Companies";
import SearchBar from "./SearchBar";
import TestimonialSection from "./TestimonialSection";

const Hero = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:8082/api/courses");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-cyan-50 to-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 md:px-20 pt-20 pb-28 min-h-[80vh]">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-snug text-gray-800">
            Improve your future with{" "}
            <span className="text-blue-600">courses made for you</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Learn from expert instructors, gain real-world skills, and build a
            career you love.
          </p>
          <div className="mt-8 flex justify-center">
            <SearchBar />
          </div>
        </div>
        <div className="relative mt-10">
          <img
            src={assets.sketch}
            alt="Learning Illustration"
            className="drop-shadow-lg max-w-xs mx-auto"
          />
        </div>
      </section>

      {/* Companies Section */}
      <section className="bg-white">
        <Companies />
      </section>

      {/* Courses Section */}
      <section className="bg-gray-50 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20">
          {userData && userData.length > 0 ? (
            userData.map((course) => (
              <Link
                key={course.id || course._id || course.title}
                to={`/courses/${course.id || course._id}`} // Route to course details
                className="bg-white rounded-lg shadow-md p-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                {course.imageUrl ? (
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  {course.name || "Untitled Course"}
                </h3>
                <p className="text-gray-600 mb-2">
                  {course.description || "No description available."}
                </p>

                <span className="text-sm text-gray-500">
                  Price: {course.coursePrice || "N/A"} min
                </span>
                <span className="text-sm text-gray-500">
                  Review: {course.reviews || "N/A"} min
                </span>
              </Link>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No Courses are available.
            </p>
          )}
        </div>

        {/* Show All Courses Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/courses")}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            Show All Courses
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white">
        <TestimonialSection />
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <CallToAction />
      </section>
    </div>
  );
};

export default Hero;
