import { useContext } from "react";
import { Link } from "react-router-dom";
import { assets, dummyEducatorData } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext);

  // calculate discounted price safely
  const discountedPrice = course.coursePrice
    ? (course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)
    : "0.00";

  return (
    <Link
      to={`/course/${course.courseId}`} // 👈 navigate to Course Details page
      className="block"
    >
      <div className="border rounded-lg shadow p-4 hover:shadow-lg transition bg-white text-black cursor-pointer h-[300px] flex flex-col">
        {/* Thumbnail with reduced height */}
        <img
          src={course.courseThumbnail || assets.course_1_thumbnail}
          alt={course.courseTitle}
          className="w-full h-32 object-cover rounded"
        />

        {/* Content Section */}
        <div className="mt-3 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold line-clamp-1">{course.courseTitle}</h3>
          <p className="text-sm text-gray-500">
            {dummyEducatorData?.name || "Unknown Instructor"}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={assets.star} alt="star" className="w-4 h-4" />
            ))}
            <p className="text-gray-600 text-sm">(120)</p>
          </div>

          {/* Price at bottom */}
          <p className="mt-auto font-bold text-gray-800">
            {currency} {discountedPrice}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
