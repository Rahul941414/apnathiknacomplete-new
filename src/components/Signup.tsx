import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const nav = useNavigate();

  // States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // ✅ फोन स्टेट जोड़ी गई
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // AuthContext को डेटा भेज रहे हैं
      await signup(fullName, email, phone, password);

      console.log("Signup success!");
      nav("/");
    } catch (err: any) {
      alert("Signup failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center max-w-5xl bg-white p-8 rounded-3xl shadow-xl">

        {/* फॉर्म वाला हिस्सा */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Create Account</h2>
            <p className="text-slate-500">Join Apna Thikana and order your favorites.</p>
          </div>

          <form onSubmit={submit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input
                required
                className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition"
                placeholder="Enter your name"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input
                required
                type="email"
                className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition"
                placeholder="email@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            {/* Phone - ✅ नई इनपुट फील्ड */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <input
                required
                type="tel"
                className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition"
                placeholder="Enter phone number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input
                required
                type="password"
                className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <button
              disabled={loading}
              className={`w-full py-3 rounded-xl text-white font-semibold transition ${loading ? 'bg-slate-400' : 'bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-200'
                }`}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-slate-600">
            Already have an account?{" "}
            <span onClick={() => nav("/login")} className="text-orange-600 font-bold cursor-pointer underline">
              Login
            </span>
          </p>
        </div>

        {/* राईट साइड वाला डिज़ाइन */}
        <div className="hidden md:flex flex-col items-center justify-center bg-orange-50 rounded-3xl p-10 text-center">
          <div className="w-64 h-64 bg-orange-200 rounded-full mb-6 flex items-center justify-center">
            <span className="text-6xl">🍔</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">Apna Thikana</h3>
          <p className="text-slate-600 mt-2">
            The fastest food delivery in your city. Save your details and checkout faster next time.
          </p>
        </div>

      </div>
    </div>
  );
}