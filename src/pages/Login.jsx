// import { useState } from "react";
// import api from "../services/api";
// import { useNavigate } from "react-router-dom";
// const Login = () => {
//     const navigate=useNavigate();   
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const login = async () => {
    
//     try {
//     const res = await api.post(
//   "/auth/login",
//   { email, password }

// );

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));
// navigate("/");
//       alert("Login successful");
//     } catch (err) {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 flex items-center justify-center">
//       <div className="bg-gray-900 p-8 rounded-xl w-96 space-y-4">
//         <h2 className="text-2xl text-white text-center">
//           Login
//         </h2>

//         <input
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 rounded bg-gray-800 text-white"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 rounded bg-gray-800 text-white"
//         />

//         <button
//           onClick={login}
//           className="w-full bg-blue-600 hover:bg-blue-500 p-2 rounded"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LogIn, Mail, Lock, Sparkles, ArrowRight } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email || !password) {
      toast.error("Please fill all fields!");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
      toast.success("🎉 Login successful! Welcome back!", {
        position: "top-center",
        autoClose: 2000,
      });
      
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      toast.error("❌ Invalid credentials. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") login();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
  <div className="w-full max-w-md">
    {/* Card */}
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">

      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center mb-4 w-14 h-14 rounded-full bg-primary/10">
          <LogIn className="w-7 h-7 text-primary" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome Back
        </h2>

        <p className="text-gray-500 mt-2 flex items-center justify-center gap-2 text-sm">
          <span>Login to continue</span>
          <Sparkles className="w-4 h-4 text-primary" />
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-4">

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-11 pr-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-11 pr-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Button */}
        <button
          onClick={login}
          disabled={loading}
          className="w-full py-2.5 rounded-md bg-primary text-white font-medium hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span className="flex items-center justify-center gap-2">
            <span>{loading ? "Logging in..." : "Login"}</span>
            {!loading && <ArrowRight className="w-4 h-4" />}
          </span>
        </button>

        {/* Signup */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="text-primary font-medium hover:underline"
            >
              Signup here
            </a>
          </p>
        </div>

      </div>
    </div>
  </div>
</div>

  );
};

export default Login;