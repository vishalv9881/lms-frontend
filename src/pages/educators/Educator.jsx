import { Star } from "lucide-react";
import { useMemo } from "react";
import { dummyCourses, dummyDashboardData, dummyEducatorData, dummyTestimonial } from "../../assets/assets";
import Footer from "../../components/educators/Footer";

const Educator = () => {
  const educator = dummyEducatorData;

  // ✅ Filter courses created by this educator
  const educatorCourses = useMemo(
    () => dummyCourses.filter((course) => course.educator === educator._id),
    [educator._id]
  );

  // ✅ Unique enrolled students count
  const enrolledStudentsCount = new Set(
    educatorCourses.flatMap((course) => course.enrolledStudents)
  ).size;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-1 px-6 md:px-20 py-12">
        {/* Educator Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <img
            src={educator.imageUrl}
            alt={educator.name}
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900">{educator.name}</h1>
            <p className="text-gray-600">{educator.email}</p>
            <p className="text-sm text-gray-500 mt-2">
              Member since {new Date(educator.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-blue-600">
              {educatorCourses.length}
            </h2>
            <p className="text-gray-600">Courses</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-blue-600">
              {enrolledStudentsCount}
            </h2>
            <p className="text-gray-600">Students</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-blue-600">
              ${dummyDashboardData.totalEarnings}
            </h2>
            <p className="text-gray-600">Total Earnings</p>
          </div>
        </div>

        {/* Courses Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Courses by {educator.name}</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {educatorCourses.map((course) => (
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
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {course.courseTitle}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 mb-3 line-clamp-2">
                    {course.courseDescription.replace(/<[^>]+>/g, "").slice(0, 100)}...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold">${course.coursePrice}</span>
                    <span className="text-sm text-gray-500">
                      {course.enrolledStudents.length} students
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Testimonials</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dummyTestimonial.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.round(testimonial.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Educator;
