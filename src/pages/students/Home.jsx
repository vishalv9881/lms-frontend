import Footer from "../../components/educators/Footer";
import Hero from "../../components/student/Hero";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
        <Hero />  <br/>
        <br/>
        <Footer/>      
    </div>
  );
};

export default Home;
