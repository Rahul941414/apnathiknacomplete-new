import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Home from "@/components/Home";
import Products from "@/components/Products";
import Cart from "@/components/Cart";
import Checkout from "@/components/Checkout";
import OrderConfirmation from "@/components/OrderConfirmation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Terms from "@/components/Terms";
import Privacy from "@/components/Privacy";
import RefundCancellation from "@/components/RefundCancellation";
import ShippingDelivery from "@/components/ShippingDelivery";
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import Profile from "@/components/Profile";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider, useAuth } from "@/context/AuthContext";

// Auth Guard component
function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth(); //
  const loc = useLocation(); //

  if (isLoading) return null; //

  // अगर यूजर लॉगिन नहीं है, तो उसे लॉगिन पेज पर भेजें
  if (!user) return <Navigate to="/login" state={{ from: loc }} replace />; //

  return <>{children}</>; //
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-dvh flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              {/* सार्वजनिक रूट्स - कोई भी देख सकता है */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/refund-cancellation" element={<RefundCancellation />} />
              <Route path="/shipping-delivery" element={<ShippingDelivery />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* ✅ सुरक्षित रूट्स - सिर्फ लॉगिन के बाद ही खुलेंगे */}
              {/* अब बिना लॉगिन के कोई Products या Cart नहीं देख पाएगा */}
              <Route path="/products" element={<RequireAuth><Products /></RequireAuth>} />
              <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
              <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
              <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />

              {/* पेमेंट रसीद - इसे भी सुरक्षित रखना बेहतर है */}
              <Route path="/confirmation" element={<RequireAuth><OrderConfirmation /></RequireAuth>} />

              {/* Fallback to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}