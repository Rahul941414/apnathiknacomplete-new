import React, { createContext, useContext, useEffect, useState } from "react";

// 1. User टाइप में 'address' जोड़ा गया है
export type User = {
  name: string;
  email: string;
  phone?: string;
  address?: string; // नया फील्ड
  token: string;
};

type Ctx = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, phone: string, password: string) => Promise<void>;
  updateProfile: (updatedData: { name: string; phone: string; address: string }) => Promise<void>; // नया फंक्शन
  logout: () => void;
};

const Context = createContext<Ctx | null>(null);

const API_URL = "https://backend.apnathikan.shop/api/auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.msg || "Login failed");

    // बैकएंड से आने वाले पूरे डेटा को स्टोर करें
    const u = {
      name: data.user.name,
      email: data.user.email,
      phone: data.user.phone || "",
      address: data.user.address || "", // डेटाबेस से एड्रेस लें
      token: data.token
    };

    localStorage.setItem("user", JSON.stringify(u));
    setUser(u);
  };

  const signup = async (name: string, email: string, phone: string, password: string) => {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, phone }) // फोन भी भेज रहे हैं
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.msg || "Signup failed");

    const u = {
      name,
      email,
      phone,
      address: "", // नया यूजर है तो एड्रेस खाली होगा
      token: data.token || ""
    };

    localStorage.setItem("user", JSON.stringify(u));
    setUser(u);
  };

  // 2. प्रोफाइल अपडेट करने के लिए नया फंक्शन
  const updateProfile = async (updatedData: { name: string; phone: string; address: string }) => {
    if (!user?.token) throw new Error("No token found");

    const res = await fetch(`${API_URL}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user.token}` // सुरक्षा के लिए टोकन
      },
      body: JSON.stringify(updatedData)
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.msg || "Update failed");

    // स्टेट और लोकल स्टोरेज अपडेट करें
    const newUser = { ...user, ...updatedData };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Context.Provider value={{ user, isLoading, login, signup, updateProfile, logout }}>
      {children}
    </Context.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}