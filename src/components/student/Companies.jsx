import { assets } from "../../assets/assets";

const Companies = () => {
  return (
    <div className="py-16 bg-gray-50">
      {/* Heading */}
      <p className="text-lg md:text-xl font-semibold text-gray-700 text-center">
        Trusted by learners and professionals from
      </p>

      {/* Logos */}
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-8 md:gap-16 flex-wrap mt-8">
        <img
          src={assets.microsoft_logo}
          alt="Microsoft"
          className="w-24 md:w-32 opacity-70 hover:opacity-100 hover:scale-105 transition duration-300"
        />
        <img
          src={assets.walmart_logo}
          alt="Walmart"
          className="w-24 md:w-32 opacity-70 hover:opacity-100 hover:scale-105 transition duration-300"
        />
        <img
          src={assets.accenture_logo}
          alt="Accenture"
          className="w-24 md:w-32 opacity-70 hover:opacity-100 hover:scale-105 transition duration-300"
        />
        <img
          src={assets.adobe_logo}
          alt="Adobe"
          className="w-24 md:w-32 opacity-70 hover:opacity-100 hover:scale-105 transition duration-300"
        />
        <img
          src={assets.paypal_logo}
          alt="PayPal"
          className="w-24 md:w-32 opacity-70 hover:opacity-100 hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  );
};

export default Companies;
