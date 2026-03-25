"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const ContactForm = () => {
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
                throw new Error(data.error || "Failed to send message");
            }
        } catch (error: any) {
            console.error("Form Submission Error:", error);
            setStatus("error");
            setErrorMessage(error.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <div className="bg-transparent">
            <AnimatePresence mode="wait">
                {status === "success" ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-12 space-y-6"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                            className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <CheckCircle size={40} />
                        </motion.div>
                        <h3 className="text-3xl font-bold text-slate-900">Thank You!</h3>
                        <p className="text-slate-600 max-w-sm mx-auto font-medium">
                            We&apos;ll get back to you within 24 hours.
                        </p>
                        <button
                            onClick={() => setStatus("idle")}
                            className="font-bold text-primary hover:underline uppercase tracking-widest text-[10px]"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    disabled={status === "loading"}
                                    className="w-full px-4 py-3.5 bg-white border-[1.5px] border-slate-200 rounded-[10px] focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400 disabled:bg-slate-50 disabled:text-slate-400 min-h-[44px]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    disabled={status === "loading"}
                                    className="w-full px-4 py-3.5 bg-white border-[1.5px] border-slate-200 rounded-[10px] focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400 disabled:bg-slate-50 disabled:text-slate-400 min-h-[44px]"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+61 400 000 000"
                                disabled={status === "loading"}
                                className="w-full px-4 py-3.5 bg-white border-[1.5px] border-slate-200 rounded-[10px] focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400 disabled:bg-slate-50 disabled:text-slate-400 min-h-[44px]"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">
                                How can we help? <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                required
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Tell us about your needs..."
                                disabled={status === "loading"}
                                className="w-full px-4 py-3.5 bg-white border-[1.5px] border-slate-200 rounded-[10px] focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400 resize-none disabled:bg-slate-50 disabled:text-slate-400"
                            ></textarea>
                        </div>

                        {status === "error" && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl"
                            >
                                <AlertCircle size={20} />
                                <span className="text-sm font-bold">{errorMessage}</span>
                            </motion.div>
                        )}

                        <div className="pt-2">
                            <button
                                disabled={status === "loading"}
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-primary-700 hover:-translate-y-0.5 transition-all active:scale-[0.98] disabled:opacity-70 disabled:translate-y-0 disabled:scale-100 shadow-lg shadow-primary/20"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactForm;
