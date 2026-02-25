import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      console.log("Login successful!");
      nav("/"); // लॉगिन के बाद होम पेज पर भेजें
    } catch (err: any) {
      alert("Login failed: " + err.message);
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
            <h2 className="text-3xl font-bold text-slate-800">Welcome Back</h2>
            <p className="text-slate-500">Login to your Apna Thikana account.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input
                required
                type="email"
                className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
                placeholder="email@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input
                required
                type="password"
                className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
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
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-slate-600">
            Don't have an account?{" "}
            <span onClick={() => nav("/signup")} className="text-orange-600 font-bold cursor-pointer underline">
              Sign Up
            </span>
          </p>
        </div>

        {/* राईट साइड वाला डिज़ाइन */}
        <div className="hidden md:flex flex-col items-center justify-center bg-orange-50 rounded-3xl p-10 text-center">
          <div className="w-64 h-64 bg-orange-200 rounded-full mb-6 flex items-center justify-center">
            <span className="text-6xl">🍕</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">Hungry?</h3>
          <p className="text-slate-600 mt-2">Log in to track your orders and get exclusive discounts.</p>
        </div>

      </div>
    </div>
  );
}