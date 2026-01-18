import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { ShieldCheck, Sparkles, CheckCircle } from "lucide-react";

const VerifyOpt = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const verifyOtp = async () => {
    if (!otp) {
      toast.error("Please enter OTP!");
      return;
    }

    if (otp.length !== 6) {
      toast.error("OTP must be 6 digits!");
      return;
    }

    setLoading(true);
    try {
      const data = JSON.parse(localStorage.getItem("signupData"));

      await api.post("/auth/register", {
        ...data,
        otp
      });

      toast.success("🎉 Account created successfully!", {
        position: "top-center",
        autoClose: 2000,
      });

      localStorage.removeItem("signupData");
      
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } catch (err) {
      toast.error("❌ OTP verification failed. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") verifyOtp();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-100 flex items-center justify-center px-6 py-12">
  <div className="w-full max-w-md">
    
    {/* Card */}
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-cyan-200">

      {/* Header */}
      <div className="text-center mb-8">
        <div className="relative inline-flex items-center justify-center mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl blur-md opacity-50"></div>
          <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-xl">
            <ShieldCheck className="w-7 h-7 text-white" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800">
          Verify OTP
        </h2>

        <p className="text-gray-500 mt-2 flex items-center justify-center gap-2 text-sm">
          <span>Enter the code sent to your email</span>
          <Sparkles className="w-4 h-4 text-amber-500" />
        </p>
      </div>

      {/* OTP Input */}
      <div className="space-y-6">

        <div className="relative">
          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
            onKeyPress={handleKeyPress}
            maxLength={6}
            className="w-full py-4 px-4 rounded-lg border border-cyan-300 bg-cyan-50 
              text-center text-2xl font-semibold tracking-widest text-gray-800
              placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
          />
        </div>

        {/* Verify Button */}
        <button
          onClick={verifyOtp}
          disabled={loading}
          className="relative w-full py-3.5 rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 
            text-white font-semibold text-lg hover:opacity-90 transition
            disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span className="flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5" />
            {loading ? "Verifying..." : "Verify & Signup"}
          </span>
        </button>

      </div>
    </div>
  </div>
</div>

  );
};

export default VerifyOpt;