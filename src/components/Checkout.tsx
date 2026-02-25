import React, { useState, useEffect } from "react";
import PaymentSecurity from "./PaymentSecurity";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const nav = useNavigate();
  const { clear, totalPrice } = useCart();
  const { user } = useAuth();

  const [agree, setAgree] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  // ऑटो-फिल यूजर डिटेल्स
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setPhone(user.phone || "");
      setAddress(user.address || "");
    }
  }, [user]);

  // PayU पेमेंट गेटवे इंटीग्रेशन
  const payWithPayU = async () => {
    setLoading(true);
    try {
      // ✅ Live Backend URL का उपयोग (CORS और 405 एरर से बचने के लिए)
      const res = await fetch("https://backend.apnathikan.shop/api/payment/payu/initiate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user?.token}` // सुरक्षा के लिए JWT टोकन
        },
        body: JSON.stringify({
          amount: totalPrice,
          name,
          phone,
          email: user?.email,
          address
        })
      });

      if (!res.ok) {
        if (res.status === 401) {
          alert("Session expired. Please login again.");
          nav("/login");
          return;
        }
        throw new Error("PayU initialization failed");
      }

      const { url, data } = await res.json();

      // PayU के लिए ऑटो-सबमिट फॉर्म बनाएँ
      const form = document.createElement("form");
      form.method = "POST";
      form.action = url;

      Object.keys(data).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = data[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (err: any) {
      console.error("Payment Error:", err);
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree || !name || !phone || !address || totalPrice <= 0) {
      alert("Please complete all fields and accept Terms.");
      return;
    }
    await payWithPayU();
  };

  return (
    <div className="container mx-auto px-4 py-10 grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 card p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100">
        <h2 className="text-3xl font-black mb-8 text-slate-800 tracking-tighter uppercase italic">
          Checkout <span className="text-emerald-600">Details</span>
        </h2>

        <form onSubmit={submit} className="space-y-6">
          {/* Receiver Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-[0.2em]">Receiver Name</label>
              <input required className="w-full border-2 border-slate-50 bg-slate-50/50 px-5 py-4 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-slate-700" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-[0.2em]">Phone Number</label>
              <input required className="w-full border-2 border-slate-50 bg-slate-50/50 px-5 py-4 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-slate-700" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-[0.2em]">Delivery Address (IIT Indore)</label>
            <textarea required className="w-full border-2 border-slate-50 bg-slate-50/50 px-5 py-4 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-slate-700" placeholder="Hostel, Room No, Landmark..." rows={3} value={address} onChange={e => setAddress(e.target.value)} />
          </div>

          {/* Payment Method - Only PayU Displayed */}
          <div className="p-6 bg-emerald-50/50 rounded-3xl border-2 border-dashed border-emerald-100 flex justify-between items-center">
            <div>
              <p className="text-[10px] font-black text-emerald-600 mb-1 uppercase tracking-widest">Payment Method</p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="font-black text-slate-800 uppercase text-sm">PayU Secure Checkout</span>
              </div>
            </div>
            <img src="https://www.payu.in/wp-content/uploads/2023/06/PayU-logo-1.svg" alt="PayU" className="h-6 opacity-80" />
          </div>

          <label className="flex items-start gap-4 text-sm text-slate-500 bg-slate-50 p-5 rounded-2xl cursor-pointer hover:bg-slate-100 transition-colors">
            <input type="checkbox" className="mt-1 w-5 h-5 accent-emerald-600 rounded-lg" checked={agree} onChange={e => setAgree(e.target.checked)} />
            <span className="text-xs font-medium leading-relaxed uppercase tracking-tight">
              I agree to the <a className="underline font-black text-emerald-700" href="/terms" target="_blank">Terms</a> and <a className="underline font-black text-emerald-700" href="/privacy" target="_blank">Privacy Policy</a>.
            </span>
          </label>

          <button 
            disabled={!agree || totalPrice <= 0 || loading} 
            className="w-full bg-emerald-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-emerald-100 transition-all hover:bg-emerald-700 hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 uppercase tracking-[0.2em]" 
            type="submit"
          >
            {loading ? "Processing..." : `Pay ₹${totalPrice} & Place Order`}
          </button>
        </form>
        <PaymentSecurity />
      </div>

      {/* Summary Sidebar */}
      <aside className="p-8 h-fit bg-slate-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden sticky top-10">
        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full"></div>
        <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-6 italic tracking-tighter uppercase">Order <span className="text-emerald-400">Summary</span></h3>
        <div className="space-y-5">
          <div className="flex justify-between text-slate-400">
            <span className="font-black text-[10px] uppercase tracking-widest">Subtotal</span>
            <span className="font-bold text-white">₹{totalPrice}</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span className="font-black text-[10px] uppercase tracking-widest">Delivery</span>
            <span className="text-emerald-400 font-black text-[10px] uppercase tracking-widest">Free</span>
          </div>
          <div className="h-px bg-white/10 my-4"></div>
          <div className="flex justify-between items-end">
             <div>
                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-1">Total Payable</p>
                <span className="text-5xl font-black italic tracking-tighter">₹{totalPrice}</span>
             </div>
          </div>
        </div>
        <div className="mt-12 p-5 bg-white/5 rounded-2xl border border-white/10 text-[9px] text-slate-500 text-center leading-relaxed font-black uppercase tracking-[0.15em]">
          Secure encrypted checkout enabled. By placing order, you agree to delivery guidelines.
        </div>
      </aside>
    </div>
  );
}