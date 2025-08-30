import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <>
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 text-center">
        Learn <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">anything</span>, 
        anytime, anywhere 🚀
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-center">
        Join millions of learners from around the world already learning on{" "}
        <span className="font-semibold text-gray-800">EduPlatform</span>.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition">
          Learn More 
          <img src={assets.arrow_icon} alt="arrow_icon" className="h-5" />
        </button>
      </div>
    </>
  );
};

export default CallToAction;
