import React from "react";
import { RefreshCcw, Clock, Ban, HelpCircle, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function RefundCancellation() {
  const lastUpdated = "February 2026";

  return (
    <div className="min-h-screen bg-slate-50/50 pt-20 pb-24 selection:bg-rose-100">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-sm">
            <RefreshCcw size={14} className="animate-spin-slow" />
            Customer Protection
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900">
            Refund & <span className="text-rose-600">Cancellation</span>
          </h1>
          <p className="text-slate-500 font-medium">
            Effective from: <span className="text-slate-900">{lastUpdated}</span>
          </p>
        </div>

        <div className="grid gap-8">

          {/* Timeline Section - Premium Card */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 text-slate-50 opacity-10 group-hover:scale-110 transition-transform">
              <Clock size={150} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="h-20 w-20 bg-rose-50 rounded-[2rem] flex items-center justify-center text-rose-600 shrink-0 shadow-inner">
                <Clock size={32} />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase italic">Refund Timelines</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Eligible refunds are credited to your <span className="text-slate-900 font-bold underline decoration-rose-300 decoration-4">original payment method</span> within <span className="bg-rose-100 px-2 py-0.5 rounded-lg text-rose-700 font-black">5–7 business days</span> after the request is approved.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-4">
            {/* Non-Refundable Section */}
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute -bottom-6 -right-6 text-white/5 group-hover:rotate-12 transition-transform">
                <Ban size={120} />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-rose-500 rounded-2xl shadow-lg shadow-rose-500/30">
                  <Ban size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-black tracking-tight uppercase italic">Non-Refundable</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Please note that certain items cannot be returned or refunded once processed:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-bold">
                  <CheckCircle size={16} className="text-rose-500" /> Perishable Food Items
                </li>
                <li className="flex items-center gap-3 text-sm font-bold">
                  <CheckCircle size={16} className="text-rose-500" /> Customized/Personalized Orders
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-500 italic">
                  *After kitchen processing starts
                </li>
              </ul>
            </div>

            {/* How to Request Section */}
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600">
                  <HelpCircle size={20} />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase italic">How to Request</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                For a faster resolution, please follow these steps and reach out to our team:
              </p>
              <div className="space-y-4">
                <RequestStep number="01" text="Order ID & Details" />
                <RequestStep number="02" text="Reason for Refund" />
                <RequestStep number="03" text="Relevant Photos (Optional)" />
              </div>
            </div>
          </div>

          {/* Support CTA */}
          <div className="mt-12 bg-gradient-to-r from-indigo-600 to-violet-700 rounded-[2.5rem] p-10 text-white text-center relative overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 space-y-6">
              <ShieldCheck size={48} className="mx-auto text-indigo-200 mb-2" />
              <h3 className="text-3xl font-black tracking-tight">Need immediate assistance?</h3>
              <p className="text-indigo-100 max-w-xl mx-auto font-medium">
                Our support team is available from 9 AM to 7 PM to help you with your order issues and refund status.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link to="/contact" className="px-10 py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>

          {/* Policy Note Footer */}
          <div className="flex items-center justify-center gap-2 py-10 opacity-40">
            <CheckCircle size={16} className="text-slate-400" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">End of Refund Policy</span>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}

// Helper Step Component
function RequestStep({ number, text }) {
  return (
    <div className="flex items-center gap-4 group">
      <span className="text-xs font-black text-indigo-200 group-hover:text-indigo-500 transition-colors">{number}</span>
      <div className="h-px flex-1 bg-slate-100 group-hover:bg-indigo-100 transition-colors"></div>
      <span className="text-sm font-bold text-slate-700">{text}</span>
    </div>
  );
}