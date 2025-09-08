import AuthForm from "./AuthForm";

const LoginPage = () => {
  const handleLogin = async (formData) => {
    try {
      const response = await fetch("http://localhost:8085/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        alert("Invalid credentials ❌");
        return null;
      }

      const user = await response.json(); // 👈 API se user object return hoga (role included hona chahiye)
      console.log("✅ Logged in user:", user);
      return user;
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
      return null;
    }
  };

  return <AuthForm mode="login" onSubmit={handleLogin} />;
};

export default LoginPage;
