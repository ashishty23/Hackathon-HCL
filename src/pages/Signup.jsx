import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import {
  UserPlus,
  Mail,
  Lock,
  User as UserIcon,
  Phone,
  MapPin,
  Sparkles,
  Send
} from "lucide-react";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendOtp = async () => {
    const { name, email, password, phone, address } = form;

    if (!name || !email || !password || !phone || !address) {
      toast.error("Please fill all fields!");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return;
    }

    setLoading(true);
    try {
      await api.post("/otp/send", { email });

      localStorage.setItem("signupData", JSON.stringify(form));

      toast.success("OTP sent to your email");

      window.location.href = "/verify";
    } catch (err) {
      toast.error("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4 w-14 h-14 rounded-full bg-primary/10">
              <UserPlus className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Create Account
            </h2>
            <p className="text-gray-500 mt-2 flex items-center justify-center gap-2 text-sm">
              <span>Join PizzaHub today</span>
              <Sparkles className="w-4 h-4 text-primary" />
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">

            {/* Name */}
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                name="password"
                type="password"
                placeholder="Password (min 6 characters)"
                value={form.password}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            {/* Address */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            {/* Send OTP */}
            <button
              onClick={sendOtp}
              disabled={loading}
              className="w-full py-2.5 rounded-md bg-primary text-white font-medium hover:opacity-90 transition disabled:opacity-60"
            >
              <span className="flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                {loading ? "Sending OTP..." : "Send OTP"}
              </span>
            </button>

            {/* Login */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-primary font-medium hover:underline">
                Login here
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
