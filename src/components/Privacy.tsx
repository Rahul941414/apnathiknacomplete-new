import React from "react";
import { ShieldCheck, Eye, Lock, Database, UserCheck, Mail, MapPin } from "lucide-react";

export default function Privacy() {
  const lastUpdated = "February 2026";

  return (
    <div className="min-h-screen bg-slate-50/30 pt-16 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Header Section */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 text-indigo-50 opacity-20 hidden md:block">
            <ShieldCheck size={180} />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="h-12 w-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
              <Lock size={24} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Privacy <span className="text-indigo-600">Policy</span>
            </h1>
            <p className="text-slate-500 font-medium">
              Last Updated: <span className="text-slate-900">{lastUpdated}</span>
            </p>
            <p className="max-w-2xl text-slate-600 leading-relaxed">
              At <span className="font-bold text-slate-900">Apna Thikana</span>, we respect your privacy and are committed to protecting your personal data. This policy explains how we handle your information.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-10">

          {/* Side Quick Links - Desktop Only */}
          <div className="hidden lg:block space-y-2 sticky top-24 h-fit">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 ml-4">Table of Contents</h4>
            <a href="#introduction" className="block px-4 py-2 text-sm font-bold text-slate-600 hover:text-indigo-600 hover:bg-white rounded-xl transition-all">Introduction</a>
            <a href="#data-collection" className="block px-4 py-2 text-sm font-bold text-slate-600 hover:text-indigo-600 hover:bg-white rounded-xl transition-all">Data Collection</a>
            <a href="#sharing" className="block px-4 py-2 text-sm font-bold text-slate-600 hover:text-indigo-600 hover:bg-white rounded-xl transition-all">Sharing & Retention</a>
            <a href="#cookies" className="block px-4 py-2 text-sm font-bold text-slate-600 hover:text-indigo-600 hover:bg-white rounded-xl transition-all">Cookies Policy</a>
            <a href="#grievance" className="block px-4 py-2 text-sm font-bold text-slate-600 hover:text-indigo-600 hover:bg-white rounded-xl transition-all">Grievance Officer</a>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">

            {/* Introduction Section */}
            <section id="introduction" className="bg-white rounded-3xl p-8 shadow-sm border border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Eye size={20} /></div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Introduction</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Your trust is our most important asset. This privacy policy explains what data we collect, how it's used, and the steps we take to ensure your personal information remains secure when you use the Apna Thikana platform.
              </p>
            </section>

            {/* Data Collection Section */}
            <section id="data-collection" className="bg-white rounded-3xl p-8 shadow-sm border border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Database size={20} /></div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Data We Collect</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs mt-1">1</div>
                  <p className="text-slate-600"><span className="font-bold text-slate-800">Contact Details:</span> Name, phone number, and delivery address required for order fulfillment and communication.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs mt-1">2</div>
                  <p className="text-slate-600"><span className="font-bold text-slate-800">Usage Analytics:</span> We use cookies and similar technologies to understand how you interact with our site to improve performance.</p>
                </li>
              </ul>
            </section>

            {/* Sharing & Retention Section */}
            <section id="sharing" className="bg-white rounded-3xl p-8 shadow-sm border border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><UserCheck size={20} /></div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Sharing & Retention</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We <span className="font-bold text-slate-900 underline decoration-amber-300">do not sell your personal data</span> to third parties. We only share information with partners necessary for delivery and payment processing. Order records are retained as required for tax and legal compliance purposes.
              </p>
            </section>

            {/* Grievance Officer Section */}
            <section id="grievance" className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 opacity-10 rotate-12">
                <Mail size={200} />
              </div>
              <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                <span className="h-8 w-1 bg-indigo-500 rounded-full"></span>
                Grievance Officer
              </h2>
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="h-10 w-10 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-400">
                      <UserCheck size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Officer Name</p>
                      <p className="font-bold">Rahul Meena</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="h-10 w-10 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Email Support</p>
                      <p className="font-bold">support@apnathikana.com</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Office Address</p>
                    <p className="text-sm leading-relaxed text-slate-300">
                      24 Simrole, Indore,<br />
                      Madhya Pradesh, 452020, India
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}