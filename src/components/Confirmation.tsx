import React from "react";
import { useSearchParams } from "react-router-dom";
import { FileText, Download, CheckCircle2 } from "lucide-react";

export default function Confirmation() {
  const [searchParams] = useSearchParams();
  const txnid = searchParams.get("txnid");

  const printReceipt = () => {
    window.print(); // Browser ka print dialog khulega
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 print:shadow-none print:border-none">
        
        {/* Receipt Header */}
        <div className="bg-emerald-600 p-8 text-white text-center">
          <CheckCircle2 size={48} className="mx-auto mb-2" />
          <h2 className="text-2xl font-black uppercase tracking-tight">Payment Receipt</h2>
          <p className="opacity-80 text-sm">Apna Thikana - Khana Wahi, Sukoon Jahan</p>
        </div>

        {/* Receipt Body */}
        <div className="p-8 space-y-6">
          <div className="flex justify-between items-center border-b pb-4 border-dashed">
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Date</p>
              <p className="font-bold text-slate-700">{new Date().toLocaleDateString()}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Order ID</p>
              <p className="font-mono font-bold text-slate-700">{txnid || "N/A"}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-800 uppercase flex items-center gap-2">
              <FileText size={16} className="text-emerald-600" /> Order Details
            </h4>
            <div className="flex justify-between text-slate-600 text-sm italic">
              <span>Food Items Subtotal</span>
              <span>Online Payment</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex justify-between items-center">
              <span className="font-bold text-slate-500 uppercase text-xs">Total Amount Paid</span>
              <span className="text-2xl font-black text-slate-900">₹{searchParams.get("amount") || "Paid"}</span>
            </div>
          </div>

          {/* User Info */}
          <div className="text-[11px] text-slate-400 leading-relaxed border-t pt-4">
            <p className="font-bold text-slate-500 mb-1 uppercase">Delivery to:</p>
            <p>{searchParams.get("address") || "Saved Address"}</p>
          </div>
        </div>

        {/* Print Button (Ye print mein nahi dikhega) */}
        <div className="p-6 bg-slate-50 flex gap-3 print:hidden">
          <button 
            onClick={printReceipt}
            className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition"
          >
            <Download size={18} /> Download PDF
          </button>
          <button 
            onClick={() => window.location.href = "/"}
            className="flex-1 border border-slate-200 text-slate-600 py-3 rounded-xl font-bold hover:bg-white transition"
          >
            Back to Home
          </button>
        </div>

        {/* Footer Design */}
        <div className="h-2 bg-emerald-600"></div>
      </div>
      <p className="text-center mt-6 text-slate-400 text-xs font-medium uppercase tracking-widest">
        Thank you for choosing Apna Thikana!
      </p>
    </div>
  );
}