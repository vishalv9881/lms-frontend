import { BookOpen, Clock, PlayCircle } from "lucide-react";

const MyEnrollment = () => {
  const enrollments = [
    {
      id: 1,
      title: "Java Spring Boot for Beginners",
      instructor: "John Doe",
      progress: 65,
      thumbnail:
        "https://img.freepik.com/free-vector/java-programming-concept-illustration_114360-739.jpg",
      duration: "12h 30m",
      lastAccessed: "2 days ago",
    },
    {
      id: 2,
      title: "React.js Complete Guide",
      instructor: "Jane Smith",
      progress: 40,
      thumbnail:
        "https://img.freepik.com/free-vector/react-native-concept-illustration_114360-7863.jpg",
      duration: "18h 45m",
      lastAccessed: "5 days ago",
    },
    {
      id: 3,
      title: "MySQL & Database Design",
      instructor: "Alex Johnson",
      progress: 85,
      thumbnail:
        "https://img.freepik.com/free-vector/database-technology-concept-illustration_114360-799.jpg",
      duration: "9h 10m",
      lastAccessed: "1 week ago",
    },
  ];

  return (
    <div className="px-6 md:px-20 py-10 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        My Enrollments
      </h1>

      {/* Courses Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {enrollments.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            {/* Thumbnail */}
            <img
              src={course.thumbnail}
              alt={course.title}
              className="h-40 w-full object-cover"
            />

            {/* Course Info */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {course.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                by {course.instructor}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-2 rounded-full mb-3">
                <div
                  className="h-2 bg-blue-600 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mb-3">
                Progress: {course.progress}%
              </p>

              {/* Extra Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen size={14} /> Last: {course.lastAccessed}
                </span>
              </div>

              {/* Button */}
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                <PlayCircle size={18} /> Continue Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEnrollment;
