import React from "react";
import { Truck, Zap, AlertTriangle, ShieldCheck, MapPin, Clock, Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function ShippingDelivery() {
  const deliveryTime = "5-6 Hours";
  const deliveryFee = "₹49";

  return (
    <div className="min-h-screen bg-[#fafafa] pt-20 pb-24 selection:bg-amber-100">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Animated Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-600 shadow-sm animate-bounce">
            <Zap size={16} className="fill-amber-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Ultra Fast Delivery</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9]">
            Same Day <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-600 to-red-600">
              Delivery Express
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-slate-500 font-medium text-lg">
            At <span className="text-slate-900 font-bold">Apna Thikana</span>, we prioritize freshness. Our logistics network is optimized to bring your favorite flavors to your doorstep in record time.
          </p>
        </div>

        <div className="grid gap-8">

          {/* Main Delivery Promise Card */}
          <div className="bg-white p-1 rounded-[3rem] shadow-2xl shadow-amber-100/50 overflow-hidden group border border-slate-100">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-[2.8rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
              {/* Background Track Animation */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100 overflow-hidden">
                <div className="h-full bg-amber-500 w-1/3 animate-track-slide"></div>
              </div>

              <div className="relative">
                <div className="h-32 w-32 bg-amber-500 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl shadow-amber-200 group-hover:rotate-6 transition-transform duration-500">
                  <Truck size={60} strokeWidth={1.5} />
                </div>
                <div className="absolute -bottom-4 -right-4 h-12 w-12 bg-white rounded-2xl shadow-lg flex items-center justify-center text-amber-600 border border-amber-50">
                  <Clock size={24} />
                </div>
              </div>

              <div className="flex-1 space-y-6 text-center md:text-left">
                <div className="space-y-2">
                  <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tight">Rapid Shipping</h2>
                  <p className="text-slate-500 font-medium">Your order will be delivered within:</p>
                </div>
                <div className="inline-block bg-slate-900 text-white px-8 py-4 rounded-3xl text-4xl font-black tracking-tighter shadow-xl">
                  {deliveryTime}
                </div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Across All Major Indore Zones</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-4">
            {/* Delivery Fee Info */}
            <div className="bg-amber-500 p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-125 transition-transform duration-700">
                <Info size={120} />
              </div>
              <h3 className="text-xl font-black tracking-tight uppercase italic mb-4 flex items-center gap-2">
                <ShieldCheck /> Delivery Fee
              </h3>
              <p className="text-amber-50 text-sm leading-relaxed mb-6">
                To maintain the speed and safety of Same Day Delivery, a nominal flat fee applies to all orders:
              </p>
              <div className="text-5xl font-black mb-2">{deliveryFee}*</div>
              <p className="text-xs text-amber-100 font-medium italic">
                *Fee may vary slightly based on location and order volume during peak hours.
              </p>
            </div>

            {/* Damaged Packages Section */}
            <div className="bg-white p-10 rounded-[3rem] border-2 border-dashed border-slate-200 hover:border-red-200 transition-colors group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-50 rounded-2xl text-red-600 group-hover:animate-shake">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase italic">Tampered Packages</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Your safety is our priority. If the package seal is broken or appeared damaged:
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700 bg-slate-50 p-3 rounded-2xl">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div> Do not accept the delivery
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700 bg-slate-50 p-3 rounded-2xl">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div> Contact support immediately
                </div>
              </div>
            </div>
          </div>

          {/* Location Support CTA */}
          <div className="mt-12 bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                <MapPin size={32} />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-900">Check Availability</h4>
                <p className="text-sm text-slate-500 font-medium">Currently serving Simrole, Indore & nearby areas.</p>
              </div>
            </div>
            <Link to="/contact" className="w-full md:w-auto px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-amber-600 transition-all text-center">
              Support Center
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes track-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .animate-track-slide {
          animation: track-slide 3s linear infinite;
        }
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}