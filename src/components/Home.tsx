import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight, Star, Clock, UtensilsCrossed, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100">
      <section className="relative overflow-hidden pt-10 pb-20">

        {/* Background Decorations */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-br from-fuchsia-100/50 to-indigo-100/50 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-orange-100/40 to-rose-100/40 rounded-full blur-[100px] -z-10"></div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 shadow-sm animate-in fade-in slide-in-from-left-4 duration-700">
              <Star size={14} className="fill-indigo-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">The Ultimate Food Destination</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter text-slate-900">
              Premium <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600">
                Dining Space
              </span>
            </h1>

            <p className="max-w-md text-lg text-slate-500 font-medium leading-relaxed">
              Experience the finest Indian cuisine with a modern twist. Quality ingredients, lightning-fast delivery, and an unforgettable taste journey.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/products"
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold shadow-2xl shadow-slate-200 hover:bg-indigo-600 hover:shadow-indigo-200 hover:-translate-y-1 active:scale-95 transition-all duration-300"
              >
                Explore Menu
                <ShoppingBag size={20} className="group-hover:rotate-12 transition-transform" />
              </Link>

              <Link
                to="/about"
                className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
              >
                Our Story
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-10 flex flex-wrap items-center gap-8 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-800 border border-slate-100">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900">Verified</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Secure Kitchen</p>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">25k+</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Happy Customers</span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">4.9/5</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">User Rating</span>
              </div>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="relative lg:ml-10">
            {/* Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-fuchsia-500 rounded-[4rem] rotate-6 scale-95 opacity-10 blur-2xl"></div>

            {/* Main Image Container */}
            <div className="relative z-10 aspect-[4/5] sm:aspect-square rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] group">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000"
                alt="Premium Food Selection"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Floating Interaction Cards */}
            <div className="absolute -top-6 -right-6 z-20 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-white animate-float hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900">Express Delivery</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Under 15 Mins</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 z-20 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-white animate-float-delayed hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-200">
                  <UtensilsCrossed size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900">Hygenic Prep</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">100% Organic</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Modern Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}