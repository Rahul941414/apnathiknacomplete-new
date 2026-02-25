import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext"; // Profile link check ke liye

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { user } = useAuth(); // Auth context ka use
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="relative mt-20 bg-slate-900 text-slate-300 overflow-hidden border-t border-slate-800">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-600/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="font-black text-2xl tracking-tighter text-white uppercase">
                APNA<span className="text-emerald-500 font-light italic">THIKANA</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              IIT Indore ka apna swad. Experience the perfect blend of tradition and modern taste delivered straight to your hostel.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialIcon icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialIcon icon={<Twitter size={18} />} href="https://twitter.com" />
              <SocialIcon icon={<Youtube size={18} />} href="https://youtube.com" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/products">Menu</FooterLink></li>
              {/* Login hai toh Profile dikhao, varna Login */}
              {user ? (
                <li><FooterLink to="/profile">My Account</FooterLink></li>
              ) : (
                <li><FooterLink to="/login">Login / Signup</FooterLink></li>
              )}
              <li><FooterLink to="/about">About Us</FooterLink></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><FooterLink to="/privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink to="/terms">Terms of Service</FooterLink></li>
              <li><FooterLink to="/refund-cancellation">Refund Policy</FooterLink></li>
              <li><FooterLink to="/shipping-delivery">Shipping Info</FooterLink></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Special Offers</h4>
            <p className="text-sm text-slate-400">Join our newsletter to get updates on seasonal menus and discounts.</p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button
                type="submit"
                className={`absolute right-2 top-1.5 p-2 rounded-xl transition-all ${subscribed ? 'bg-emerald-500' : 'bg-emerald-600 hover:bg-emerald-500'} text-white`}
              >
                {subscribed ? <CheckCircle2 size={16} /> : <Send size={16} />}
              </button>
            </form>
            {subscribed && <p className="text-[10px] text-emerald-500 font-bold animate-pulse">THANK YOU FOR SUBSCRIBING!</p>}
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-slate-800 text-sm">
          <ContactItem icon={<MapPin size={18} />} text="Gate 1 B, IIT Indore, Simrol, MP 453252" />
          <ContactItem icon={<Phone size={18} />} text="+91 8094994017" />
          <ContactItem icon={<Mail size={18} />} text="support@apnathikana.shop" />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-wider uppercase text-slate-500">
          <p>© {currentYear} APNA THIKANA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <p className="hover:text-emerald-500 cursor-default transition-colors">SECURE PAYMENTS BY PAYU</p>

          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Components
function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-emerald-600 hover:text-white transition-all duration-300">
      {icon}
    </a>
  );
}

function FooterLink({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <Link to={to} className="hover:text-emerald-500 hover:translate-x-1 inline-block transition-all duration-300">
      {children}
    </Link>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-3 group cursor-default">
      <div className="p-2 bg-slate-800 rounded-lg text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <span className="group-hover:text-white transition-colors">{text}</span>
    </div>
  );
}