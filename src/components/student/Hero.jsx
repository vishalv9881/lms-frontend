import { assets } from "../../assets/assets";
import CallToAction from "./CallToAction";
import Companies from "./Companies";
import CourseSection from "./CourseSection";
import SearchBar from "./SearchBar";
import TestimonialSection from "./TestimonialSection";

const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-b from-cyan-50 to-white">
  {/* Hero Section */}
  <section className="relative flex flex-col items-center justify-center text-center px-6 md:px-20 pt-20 pb-28 min-h-[80vh]">
    {/* Center Content */}
    <div className="max-w-2xl">
      <h1 className="text-4xl md:text-6xl font-bold leading-snug text-gray-800">
        Improve your future with{" "}
        <span className="text-blue-600">courses made for you</span>
      </h1>

      <p className="mt-6 text-gray-600 text-lg">
        Learn from expert instructors, gain real-world skills, and build a career you love.
      </p>

      <div className="mt-8 flex justify-center">
        <SearchBar />
      </div>
    </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={assets.sketch}
            alt="Learning Illustration"
            className="drop-shadow-lg"
          />
        </div>
      </section>

      {/* Companies Section */}
      <section className="bg-white">
        <Companies />
      </section>

      {/* Courses Section */}
      <section className="bg-gray-50">
        <CourseSection />
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
