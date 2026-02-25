import React from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50/50 pt-16 pb-24">
      <div className="container mx-auto px-6">

        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">
            Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Touch</span>
          </h1>
          <p className="text-slate-500 font-medium text-lg italic">
            Have a question or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">

          {/* Info Cards Column */}
          <div className="lg:col-span-1 space-y-4">
            <ContactInfoCard
              icon={<Mail className="text-indigo-600" />}
              title="Email Us"
              detail="support@apnathikana.com"
              subDetail="Online support 24/7"
            />
            <ContactInfoCard
              icon={<Phone className="text-violet-600" />}
              title="Call Us"
              detail="+91 8094994017"
              subDetail="Mon–Sat, 9am to 7pm"
            />
            <ContactInfoCard
              icon={<MapPin className="text-fuchsia-600" />}
              title="Visit Us"
              detail="24 Simrole, Indore"
              subDetail="Madhya Pradesh, 452020"
            />
            <div className="p-6 bg-slate-900 rounded-[2rem] text-white shadow-xl overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                <Clock size={80} />
              </div>
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <Clock size={18} className="text-indigo-400" /> Business Hours
              </h4>
              <div className="space-y-1 relative z-10">
                <p className="text-sm text-slate-300">Mon–Sat: <span className="text-white font-bold">9:00 AM - 7:00 PM</span></p>
                <p className="text-xs text-slate-400 mt-2 italic">Closed on Sundays & Public Holidays</p>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <MessageSquare size={20} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Send us a Message</h3>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Order Inquiry / Feedback"
                    className="w-full bg-slate-50 border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you today?"
                    className="w-full bg-slate-50 border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-300 resize-none"
                  ></textarea>
                </div>

                <button className="w-full md:w-auto px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 group">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Helper Component for Info Cards
function ContactInfoCard({ icon, title, detail, subDetail }) {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-50 shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">{title}</p>
          <p className="text-sm font-bold text-slate-800">{detail}</p>
          <p className="text-[11px] text-slate-400 font-medium">{subDetail}</p>
        </div>
      </div>
    </div>
  );
}