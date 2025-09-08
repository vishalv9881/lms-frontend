import { CheckCircle, PlayCircle } from "lucide-react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { dummyCourses } from "../../assets/assets";

const Player = () => {
  // pick the first course for demo
  const course = dummyCourses[0];
  const lectures = course.courseContent.flatMap((chapter) => chapter.chapterContent);

  const [currentLecture, setCurrentLecture] = useState(lectures[0]);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Video Section */}
      <div className="flex-1 bg-black flex flex-col">
        <ReactPlayer
          url={currentLecture.lectureUrl}
          controls
          width="100%"
          height="70%"
        />

        <div className="p-4 bg-gray-900 text-white flex justify-between items-center">
          <h2 className="text-lg font-semibold">{currentLecture.lectureTitle}</h2>
          <span className="text-sm text-gray-400">
            Duration: {currentLecture.lectureDuration} mins
          </span>
        </div>

        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800">Course Description</h3>
          <p
            className="text-gray-600 mt-2 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: course.courseDescription }}
          />
        </div>
      </div>

      {/* Right Sidebar - Course Content */}
      <div className="w-full md:w-96 bg-white border-l p-4 overflow-y-auto">
        <h3 className="text-lg font-bold mb-4">Course Content</h3>
        <ul className="space-y-3">
          {lectures.map((lecture) => (
            <li
              key={lecture.lectureId}
              onClick={() => setCurrentLecture(lecture)}
              className={`p-3 rounded-lg cursor-pointer flex items-center justify-between transition ${
                currentLecture.lectureId === lecture.lectureId
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                {currentLecture.lectureId === lecture.lectureId ? (
                  <PlayCircle size={18} />
                ) : (
                  <CheckCircle size={18} className="text-green-500" />
                )}
                <span className="text-sm font-medium">{lecture.lectureTitle}</span>
              </div>
              <span className="text-xs">{lecture.lectureDuration} mins</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Player;
