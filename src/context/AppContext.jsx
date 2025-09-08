import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
const navigate =useNavigate();

  const currency = import.meta.env.VITE_CURRENCY || "₹";

  const [allCourses, setAllCourses] = useState([]);
  
const [isEducator, setIsEducator] = useState(false);

  // Fetch dummy courses when the app loads
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    fetchAllCourses, // expose if you want to refresh courses later
    setAllCourses,navigate , isEducator, setIsEducator
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
