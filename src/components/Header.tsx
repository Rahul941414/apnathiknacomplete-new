import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, UserRound, LogOut, X, ChevronDown, ShoppingBag, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { totalQty } = useCart();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-semibold transition-all duration-300 ${isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
    } group`;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "pt-2" : "pt-0"}`}>
      <header
        className={`mx-auto transition-all duration-500 ${isScrolled
          ? "max-w-[95%] md:max-w-[85%] bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-2xl border border-white/20"
          : "max-w-full bg-white border-b border-slate-100"
          }`}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo - Modern Typography */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center group-hover:rotate-[10deg] transition-transform duration-300">
              <ShoppingBag size={20} className="text-white" />
            </div>
            <span className="font-black text-xl tracking-tighter text-slate-900">
              APNA<span className="text-slate-400 font-light italic">THIKANA</span>
            </span>
          </Link>

          {/* Desktop Nav - Minimalist */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={navLinkStyle} end>
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </NavLink>
            <NavLink to="/products" className={navLinkStyle}>
              Menu
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </NavLink>
            <NavLink to="/about" className={navLinkStyle}>About</NavLink>
            <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">

            {/* Search - Icon Only */}
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors hidden sm:block">
              <Search size={20} />
            </button>

            {/* Cart with Premium Badge */}
            <Link to="/cart" className="group relative p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-all">
              <ShoppingCart size={22} strokeWidth={2} />
              {totalQty > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-5 w-5 bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full ring-2 ring-white animate-in zoom-in">
                  {totalQty}
                </span>
              )}
            </Link>

            <div className="w-[1px] h-6 bg-slate-200 mx-1 hidden md:block" />

            {/* User Auth Section */}
            {user ? (
              <div className="hidden md:flex items-center gap-2">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 p-1 pr-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-all border border-transparent hover:border-slate-300"
                >
                  <div className="h-8 w-8 bg-slate-900 rounded-full flex items-center justify-center shadow-inner">
                    <span className="text-white text-xs font-bold">{user?.name?.charAt(0)}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">{user?.name?.split(" ")[0]}</span>
                </Link>
                <button
                  onClick={() => { logout(); nav("/"); }}
                  className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-4">
                <Link to="/login" className="text-sm font-bold text-slate-600 hover:text-slate-900">Login</Link>
                <Link to="/signup" className="px-5 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all">
                  Join Now
                </Link>
              </div>
            )}

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 bg-slate-100 rounded-xl text-slate-900"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Animated Slide Down */}
        {open && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 absolute w-full top-full left-0 overflow-hidden shadow-2xl rounded-b-3xl animate-in slide-in-from-top-2 duration-300">
            <div className="p-6 space-y-4">
              <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
              <MobileLink to="/products" onClick={() => setOpen(false)}>All Products</MobileLink>
              <MobileLink to="/about" onClick={() => setOpen(false)}>Our Story</MobileLink>
              <MobileLink to="/contact" onClick={() => setOpen(false)}>Support</MobileLink>

              <div className="pt-6 border-t border-slate-100">
                {user ? (
                  <div className="grid grid-cols-2 gap-4">
                    <Link to="/profile" className="flex items-center justify-center gap-2 p-4 bg-slate-100 rounded-2xl font-bold text-slate-900">
                      <UserRound size={18} /> Profile
                    </Link>
                    <button onClick={() => { logout(); setOpen(false); nav("/"); }} className="flex items-center justify-center gap-2 p-4 bg-red-50 rounded-2xl font-bold text-red-600">
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Link to="/signup" className="w-full py-4 bg-slate-900 text-white text-center rounded-2xl font-bold shadow-lg">Create Account</Link>
                    <Link to="/login" className="w-full py-4 bg-slate-100 text-slate-900 text-center rounded-2xl font-bold">Sign In</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

function MobileLink({ to, children, onClick }) {
  return (
    <NavLink to={to} onClick={onClick} className="block text-2xl font-black text-slate-900 hover:opacity-70 transition-opacity">
      {children}
    </NavLink>
  );
}