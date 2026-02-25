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
    try {
      const res = await fetch("/api/payment/payu/initiate", {
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

      if (!res.ok) throw new Error("PayU initialization failed");
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
      alert(err.message);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree || !name || !phone || !address || totalPrice <= 0) {
      alert("Please complete all fields and accept Terms.");
      return;
    }
    // अब सीधे PayU फंक्शन कॉल होगा
    await payWithPayU();
  };

  return (
    <div className="container mx-auto px-4 py-10 grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 card p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Checkout Details</h2>

        <form onSubmit={submit} className="space-y-4">
          {/* Receiver Details */}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-1 tracking-wider">Receiver Name</label>
            <input required className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-1 tracking-wider">Phone Number</label>
            <input required className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-1 tracking-wider">Delivery Address</label>
            <textarea required className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Complete Address" rows={3} value={address} onChange={e => setAddress(e.target.value)} />
          </div>

          {/* Payment Method - Only PayU Displayed */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-wider">Payment Method</p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="font-semibold text-slate-700">PayU Secure Checkout (Live)</span>
            </div>
          </div>

          <label className="flex items-start gap-3 text-sm text-slate-600 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 cursor-pointer">
            <input type="checkbox" className="mt-1 w-4 h-4 accent-emerald-600" checked={agree} onChange={e => setAgree(e.target.checked)} />
            <span>I agree to the <a className="underline font-bold text-emerald-700" href="/terms" target="_blank">Terms</a> and <a className="underline font-bold text-emerald-700" href="/privacy" target="_blank">Privacy Policy</a>.</span>
          </label>

          <button disabled={!agree || totalPrice <= 0} className="w-full bg-emerald-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-100 transition-all hover:bg-emerald-700 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:translate-y-0" type="submit">
            Pay ₹{totalPrice} & Place Order
          </button>
        </form>
        <PaymentSecurity />
      </div>

      {/* Summary Sidebar */}
      <aside className="card p-6 h-fit bg-slate-50 rounded-3xl border border-slate-200">
        <h3 className="text-xl font-bold mb-4 text-slate-800">Order Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between text-slate-600">
            <span className="font-medium">Subtotal</span>
            <span className="font-bold">₹{totalPrice}</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span className="font-medium">Delivery Fee</span>
            <span className="text-emerald-600 font-bold uppercase text-sm">Free</span>
          </div>
          <div className="h-px bg-slate-200 my-2"></div>
          <div className="flex justify-between text-2xl font-black text-slate-900">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>
        <div className="mt-8 p-4 bg-white rounded-2xl border border-slate-100 text-[10px] text-slate-400 text-center leading-relaxed">
          SECURE CHECKOUT ENABLED. BY PLACING THIS ORDER, YOU AGREE TO APNA THIKANA'S DELIVERY GUIDELINES.
        </div>
      </aside>
    </div>
  );
}