import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { User, Mail, Phone, MapPin, Edit2, Check, X, Package, Clock, IndianRupee } from "lucide-react";

export default function Profile() {
    const { user, updateProfile } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [orders, setOrders] = useState([]); // Orders store karne ke liye
    const [loadingOrders, setLoadingOrders] = useState(true);

    const [formData, setFormData] = useState({
        name: user?.name || "",
        phone: user?.phone || "",
        address: user?.address || ""
    });

    // ✅ Backend se orders fetch karna
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await fetch("/api/payment/myorders", {
                    headers: {
                        "Authorization": `Bearer ${user?.token}`
                    }
                });
                if (res.ok) {
                    const data = await res.json();
                    setOrders(data);
                }
            } catch (err) {
                console.error("Orders load karne mein error:", err);
            } finally {
                setLoadingOrders(false);
            }
        };

        if (user?.token) fetchOrders();
    }, [user]);

    const handleSave = async () => {
        try {
            await updateProfile(formData);
            setIsEditing(false);
            alert("Profile updated successfully!");
        } catch (err: any) {
            alert("Update failed: " + err.message);
        }
    };

    if (!user) return <div className="text-center py-20 font-bold text-slate-500">Please login to view profile.</div>;

    return (
        <div className="min-h-screen bg-slate-50 py-10">
            <div className="container mx-auto px-4 max-w-2xl space-y-6">

                {/* Profile Card */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100">
                    <div className="bg-emerald-600 p-8 text-white relative text-center">
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="absolute right-6 top-6 bg-white/20 p-2 rounded-xl hover:bg-white/30 transition"
                        >
                            {isEditing ? <X size={20} /> : <Edit2 size={20} />}
                        </button>

                        <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold border-4 border-white/30">
                            {user.name ? user.name[0].toUpperCase() : "U"}
                        </div>
                        <h2 className="text-2xl font-bold">{user.name}</h2>
                        <p className="opacity-80">Member since {new Date().getFullYear()}</p>
                    </div>

                    <div className="p-8 space-y-6">
                        <h3 className="text-lg font-bold text-slate-800 border-b pb-2 flex items-center gap-2">
                            Personal Information
                        </h3>

                        <div className="grid gap-6">
                            {/* Name */}
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-slate-100 rounded-xl text-slate-600"><User size={20} /></div>
                                <div className="flex-1">
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Full Name</p>
                                    {isEditing ? (
                                        <input className="w-full border-b-2 border-emerald-200 py-1 outline-none focus:border-emerald-500 font-medium" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                    ) : (
                                        <p className="text-slate-800 font-semibold">{user.name}</p>
                                    )}
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-slate-100 rounded-xl text-slate-600"><Phone size={20} /></div>
                                <div className="flex-1">
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Phone Number</p>
                                    {isEditing ? (
                                        <input className="w-full border-b-2 border-emerald-200 py-1 outline-none focus:border-emerald-500 font-medium" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                                    ) : (
                                        <p className="text-slate-800 font-semibold">{user.phone || "Not provided"}</p>
                                    )}
                                </div>
                            </div>

                            {/* Delivery Address */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-100 rounded-xl text-slate-600"><MapPin size={20} /></div>
                                <div className="flex-1">
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Saved Address</p>
                                    {isEditing ? (
                                        <textarea className="w-full border-2 border-slate-100 rounded-xl p-3 mt-2 outline-none focus:border-emerald-500 font-medium text-sm" rows={2} value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder="Hostel/Room/Flat details..." />
                                    ) : (
                                        <p className="text-slate-700 font-medium mt-1 text-sm leading-relaxed">{user.address || "No address saved."}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {isEditing && (
                            <button onClick={handleSave} className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition shadow-lg mt-4 shadow-emerald-100">
                                <Check size={20} /> Save Profile Changes
                            </button>
                        )}
                    </div>
                </div>

                {/* ✅ Order History Section */}
                <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                            <Package className="text-emerald-600" size={22} /> My Order History
                        </h3>
                        <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-500 rounded-full">
                            {orders.length} Orders
                        </span>
                    </div>

                    <div className="p-6">
                        {loadingOrders ? (
                            <div className="text-center py-10 text-slate-400 animate-pulse font-medium">Loading your orders...</div>
                        ) : orders.length > 0 ? (
                            <div className="space-y-4">
                                {orders.map((order: any) => (
                                    <div key={order.txnid} className="group p-4 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all">
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Transaction ID</p>
                                                <p className="text-xs font-mono font-bold text-slate-600">{order.txnid}</p>
                                            </div>
                                            <div className={`text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-wider ${order.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                                                }`}>
                                                {order.status}
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-end">
                                            <div className="flex gap-4">
                                                <div className="flex items-center gap-1 text-slate-500 text-sm">
                                                    <Clock size={14} />
                                                    <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                                                </div>
                                                <div className="flex items-center gap-1 text-slate-900 font-bold">
                                                    <IndianRupee size={14} />
                                                    <span>{order.amount}</span>
                                                </div>
                                            </div>
                                            <button className="text-emerald-600 text-xs font-bold hover:underline">View Receipt</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                                    <Package size={32} />
                                </div>
                                <p className="text-slate-400 font-medium mb-4">You haven't ordered anything yet.</p>
                                <button onClick={() => nav('/')} className="text-emerald-600 font-bold text-sm border border-emerald-600 px-6 py-2 rounded-full hover:bg-emerald-600 hover:text-white transition">Order Now</button>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}