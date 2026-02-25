import React from "react";
import { Scale, CreditCard, Ban, ShieldAlert, Gavel, CheckCircle2 } from "lucide-react";

export default function Terms() {
  const lastUpdated = "February 2026";

  return (
    <div className="min-h-screen bg-slate-50/50 pt-16 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Legal Agreement
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">
            Terms & <span className="text-indigo-600">Conditions</span>
          </h1>
          <p className="text-slate-500 font-medium">
            Effective from: <span className="text-slate-900">{lastUpdated}</span>
          </p>
        </div>

        <div className="space-y-6">

          {/* Introduction Card */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm leading-relaxed text-slate-600">
            <p>
              By accessing or using <span className="font-bold text-slate-900">Apna Thikana</span>, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before making any transaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Payments Section */}
            <TermCard
              icon={<CreditCard className="text-blue-600" />}
              title="Payments & Pricing"
              color="border-l-blue-500"
            >
              All prices are listed in <span className="font-bold text-slate-900">INR</span>. Applicable taxes are charged as per government regulations. We accept UPI, Debit/Credit Cards, and Netbanking through our secure payment gateway partners.
            </TermCard>

            {/* Cancellations Section */}
            <TermCard
              icon={<Ban className="text-rose-600" />}
              title="Cancellations"
              color="border-l-rose-500"
            >
              Orders can only be cancelled <span className="underline decoration-rose-200 decoration-2">before they are processed or shipped</span>. Once the preparation starts or the order is out for delivery, cancellations may not be eligible for a full refund.
            </TermCard>
          </div>

          {/* Liability Section */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <ShieldAlert size={120} />
            </div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="h-12 w-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
                <ShieldAlert size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-slate-900 italic uppercase tracking-tight">Limitation of Liability</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Apna Thikana shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services, or for any interruptions beyond our reasonable control, including server downtimes or delivery delays due to weather.
                </p>
              </div>
            </div>
          </div>

          {/* Jurisdiction Section */}
          <div className="bg-slate-900 p-8 md:p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-indigo-500/10">
              <Scale size={150} />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
              <div className="space-y-4 max-w-md">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-widest">
                  Legal Jurisdiction
                </div>
                <h3 className="text-2xl font-black tracking-tight">Governing Law & Disputes</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  These terms are governed by the laws of <span className="text-white font-bold">India</span>. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in <span className="text-indigo-400 font-bold">Indore, Madhya Pradesh</span>.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 text-center">
                <Gavel size={40} className="text-indigo-400 mb-2" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Legal Subject</span>
                <p className="font-bold text-lg">Indore, MP</p>
              </div>
            </div>
          </div>

          {/* Confirmation Footer */}
          <div className="flex items-center justify-center gap-2 py-10">
            <CheckCircle2 size={18} className="text-emerald-500" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">End of Terms & Conditions</span>
          </div>

        </div>
      </div>
    </div>
  );
}

// Helper Card Component
function TermCard({ icon, title, children, color }) {
  return (
    <div className={`bg-white p-8 rounded-[2.5rem] border border-slate-100 border-l-4 ${color} shadow-sm hover:shadow-md transition-all group`}>
      <div className="h-12 w-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight uppercase italic">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed font-medium">
        {children}
      </p>
    </div>
  );
}