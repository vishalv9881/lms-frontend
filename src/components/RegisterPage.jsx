import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      const response = await fetch("http://localhost:8085/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      if (!response.ok) throw new Error("Registration failed");

      alert("Registration successful 🎉");

      // ✅ Redirect to login page after success
      navigate("/login");  

      return true;
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
      return false;
    }
  };

  return <AuthForm mode="register" onSubmit={handleRegister} />;
};

export default RegisterPage;
