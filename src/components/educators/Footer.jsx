import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-20 lg:px-36 py-12 w-full mt-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-gray-700 pb-12">
        {/* Logo & About */}
        <div className="flex flex-col gap-4 md:max-w-sm text-left">
  <div className="flex items-start">
    <img
      src={assets.logo_dark}
      alt="logo"
      className="h-12 w-auto object-contain"
    />
  </div>
  <p className="text-sm leading-relaxed text-gray-400">
    <span className="font-semibold text-white">Learn. Grow. Succeed.</span> <br />
    Your journey starts here. Lorem ipsum has been the industry’s
    standard dummy text for years.
  </p>
</div>


        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">Courses</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              Email:{" "}
              <a
                href="mailto:support@gratstack.com"
                className="text-blue-400 hover:underline"
              >
                support@gratstack.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+91-9876543210"
                className="text-blue-400 hover:underline"
              >
                +91 98765 43210
              </a>
            </li>
            <li>Location: Prayagraj, India</li>
          </ul>
        </div>

        {/* Subscription Box */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Subscribe to our Newsletter
          </h3>
          <p className="text-sm mb-4 text-gray-400">
            Get the latest updates, courses, and learning tips delivered straight
            to your inbox.
          </p>
          <form className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-sm bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500 mt-8">
        <p>
          © 2025{" "}
          <span className="text-white font-semibold">GratStack</span>. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
