import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2, Printer, Home, Package, Download } from "lucide-react";

export default function OrderConfirmation() {
  const [searchParams] = useSearchParams();
  const txnid = searchParams.get("txnid");
  const amount = searchParams.get("amount");

  const handlePrint = () => {
    window.print(); // Browser print option
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 print:shadow-none print:border-none">

        {/* Success Header */}
        <div className="bg-emerald-600 p-10 text-white text-center">
          <CheckCircle2 size={60} className="mx-auto mb-4 animate-bounce" />
          <h2 className="text-3xl font-black uppercase tracking-tight">Payment Successful!</h2>
          <p className="opacity-90 font-medium mt-2 italic">Aapka khana jaldi hi pahuch jayega!</p>
        </div>

        {/* Invoice Body */}
        <div className="p-8 md:p-12 space-y-8">
          <div className="flex justify-between items-start border-b border-dashed pb-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-slate-800 tracking-tighter">APNA THIKANA</h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Order Receipt</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Date</p>
              <p className="font-bold text-slate-700">{new Date().toLocaleDateString()}</p>
            </div>
          </div>

          {/* Transaction Info */}
          <div className="grid grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Transaction ID</p>
              <p className="text-sm font-mono font-bold text-slate-700 break-all">{txnid || "AT_98453210"}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Payment Status</p>
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">Confirmed</span>
            </div>
          </div>

          {/* Amount Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center text-slate-600 font-medium">
              <span>Food Items Subtotal</span>
              <span>₹{amount}</span>
            </div>
            <div className="flex justify-between items-center text-slate-600 font-medium">
              <span>Delivery Charges</span>
              <span className="text-emerald-600 font-bold uppercase text-sm">FREE</span>
            </div>
            <div className="pt-4 border-t-2 border-slate-100 flex justify-between items-center">
              <span className="text-lg font-black text-slate-800">Total Amount Paid</span>
              <span className="text-3xl font-black text-slate-900">₹{amount}</span>
            </div>
          </div>

          <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 text-center">
            <p className="text-xs text-emerald-800 font-semibold leading-relaxed">
              Order ki details aapke registered mobile number par bhej di gayi hain.
            </p>
          </div>
        </div>

        {/* Actions - Print mein hide honge */}
        <div className="p-8 bg-slate-50 flex flex-col md:flex-row gap-4 print:hidden">
          <button
            onClick={handlePrint}
            className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
          >
            <Download size={20} /> Download Receipt
          </button>
          <Link
            to="/profile"
            className="flex-1 bg-white border border-slate-200 text-slate-700 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
          >
            <Package size={20} /> Track Order
          </Link>
        </div>

        <div className="h-3 bg-emerald-600"></div>
      </div>

      <div className="text-center mt-8 space-y-2 print:hidden">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-600 font-bold text-sm transition-colors">
          <Home size={16} /> Back to Home
        </Link>
        <p className="text-[10px] text-slate-300 font-black uppercase tracking-[0.2em]">Apna Thikana Inc.</p>
      </div>
    </div>
  );
}