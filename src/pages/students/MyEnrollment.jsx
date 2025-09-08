import { PlayCircle } from "lucide-react";
import { dummyCourses, dummyStudentEnrolled } from "../../assets/assets";
import Footer from "../../components/educators/Footer";

const MyEnrollment = () => {
  const loggedInUserId = "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V";

  const enrolledCourseTitles = dummyStudentEnrolled
    .filter((enrollment) => enrollment.student._id === loggedInUserId)
    .map((enrollment) => enrollment.courseTitle);

  const enrolledCourses = dummyCourses.filter((course) =>
    enrolledCourseTitles.includes(course.courseTitle)
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Content */}
      <main className="flex-1 px-6 md:px-20 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          My Enrollments
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course) => (
              <div
                key={course._id}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
              >
                <img
                  src={course.courseThumbnail}
                  alt={course.courseTitle}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {course.courseTitle}
                  </h2>
                  <p className="text-sm text-gray-500 mb-3">
                    {course.educator === "675ac1512100b91a6d9b8b24"
                      ? "by GreatStack"
                      : "by Instructor"}
                  </p>

                  <div className="w-full bg-gray-200 h-2 rounded-full mb-3">
                    <div
                      className="h-2 bg-blue-600 rounded-full"
                      style={{ width: `40%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">Progress: 40%</p>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                    <PlayCircle size={18} /> Continue Learning
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              You are not enrolled in any courses yet.
            </p>
          )}
        </div>
      </main>

      {/* Footer - sticks to bottom */}
      <footer className="bg-gray-900 text-gray-300 mt-10">
        <Footer />
      </footer>
    </div>
  );
};

export default MyEnrollment;
