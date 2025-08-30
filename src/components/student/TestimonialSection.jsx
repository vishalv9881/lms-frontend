import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialSection = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-gradient-to-b from-blue-50 to-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Learners Say
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Hear from learners who transformed their careers with our platform.
        </p>
      </div>

      {/* Grid of Testimonials */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 text-center"
          >
            {/* Profile */}
            <div className="flex flex-col items-center">
              <img
                className="h-16 w-16 rounded-full object-cover border-2 border-blue-500"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <h3 className="mt-3 text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>

            {/* ⭐ Star Rating */}
            <div className="flex justify-center mt-3">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  className="h-4 w-4"
                  src={
                    i < Math.floor(testimonial.rating)
                      ? assets.star
                      : assets.star_blank
                  }
                  alt="star"
                />
              ))}
            </div>

            {/* Feedback */}
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              "{testimonial.feedback}"
            </p>

            {/* Read More */}
            <a
              href="#"
              className="text-blue-600 text-sm mt-4 inline-block font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
