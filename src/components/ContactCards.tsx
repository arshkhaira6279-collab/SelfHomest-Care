"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

const ContactCards = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
            setErrorMessage("All fields are required.");
            setStatus("error");
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({ fullName: "", email: "", phone: "", message: "" });
            } else {
                throw new Error(data.error || "Something went wrong.");
            }
        } catch (error: any) {
            console.error("Submission error:", error);
            setStatus("error");
            setErrorMessage(error.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <section className="py-16 md:py-20 px-4 md:px-8 bg-slate-50">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black font-display text-center mb-10 md:mb-14 tracking-tight text-slate-900 leading-tight"
                >
                    Contact <span className="text-primary italic">Us</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                >
                    {/* Map — Left */}
                    <div className="rounded-xl overflow-hidden h-72 md:h-full min-h-[300px]">
                        <iframe
                            title="Safe Homenest Care Location - Perth"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.10282671!2d115.8605!3d-31.9505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32966cd1ecfc39%3A0x504f930a4221dd0!2sPerth%20WA%2C%20Australia!5e0!3m2!1sen!2sin!4v1709500000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Form — Right */}
                    {status === "success" ? (
                        <div className="flex flex-col items-center justify-center gap-4 text-center py-8">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center"
                            >
                                <CheckCircle size={32} />
                            </motion.div>
                            <h3 className="text-xl font-bold text-slate-900">Thank You!</h3>
                            <p className="text-slate-600 text-sm font-medium">We&apos;ll get back to you within 24 hours.</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="text-primary font-bold text-xs uppercase tracking-widest hover:underline mt-2"
                            >
                                Send another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    disabled={status === "loading"}
                                    placeholder="Full Name"
                                    className="w-full bg-white border-[1.5px] border-slate-200 px-4 py-3.5 rounded-[10px] text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all disabled:bg-slate-50 disabled:text-slate-400 min-h-[44px]"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">
                                    Mobile Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    disabled={status === "loading"}
                                    placeholder="Mobile Number"
                                    className="w-full bg-white border-[1.5px] border-slate-200 px-4 py-3.5 rounded-[10px] text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all disabled:bg-slate-50 disabled:text-slate-400 min-h-[44px]"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={status === "loading"}
                                    placeholder="Email ID"
                                    className="w-full bg-white border-[1.5px] border-slate-200 px-4 py-3.5 rounded-[10px] text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all disabled:bg-slate-50 disabled:text-slate-400 min-h-[44px]"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={status === "loading"}
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full bg-white border-[1.5px] border-slate-200 px-4 py-3.5 rounded-[10px] text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none disabled:bg-slate-50 disabled:text-slate-400"
                                />
                            </div>

                            {status === "error" && (
                                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm font-bold">
                                    <AlertCircle size={16} />
                                    {errorMessage || "Something went wrong. Please try again."}
                                </div>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status === "loading"}
                                type="submit"
                                className="w-full px-10 py-3.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="animate-spin" size={16} />
                                        Sending...
                                    </>
                                ) : (
                                    "Submit"
                                )}
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactCards;
