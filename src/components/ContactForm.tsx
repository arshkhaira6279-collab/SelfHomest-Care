"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            await emailjs.sendForm(
                "service_4ljc5r9",
                "template_50751rp",
                formRef.current!,
                "A0E7xigqv43aKHWqy"
            );
            setStatus("success");
            formRef.current?.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
            setErrorMessage("Something went wrong. Please try again.");
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
                        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={40} />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900">Message Sent!</h3>
                        <p className="text-slate-600 max-w-sm mx-auto font-medium">
                            Thank you for reaching out. A member of our team will contact you shortly.
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
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="space-y-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 px-1 uppercase tracking-[0.2em]">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    name="from_name"
                                    placeholder="John Doe"
                                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-primary transition-all outline-none text-slate-900 font-bold placeholder:text-slate-200"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 px-1 uppercase tracking-[0.2em]">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    name="from_email"
                                    placeholder="john@example.com"
                                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-primary transition-all outline-none text-slate-900 font-bold placeholder:text-slate-200"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 px-1 uppercase tracking-[0.2em]">Phone Number</label>
                            <input
                                required
                                type="tel"
                                name="phone"
                                placeholder="+61 400 000 000"
                                className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-primary transition-all outline-none text-slate-900 font-bold placeholder:text-slate-200"
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 px-1 uppercase tracking-[0.2em]">How can we help?</label>
                            <textarea
                                required
                                name="message"
                                rows={4}
                                placeholder="Tell us about your needs..."
                                className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-primary transition-all outline-none text-slate-900 font-bold placeholder:text-slate-200 resize-none"
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

                        <div className="pt-4">
                            <button
                                disabled={status === "loading"}
                                type="submit"
                                className="group inline-flex items-center gap-4 bg-slate-950 text-white px-10 py-5 rounded-full font-bold text-sm hover:bg-primary transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:scale-100 shadow-xl shadow-slate-900/10"
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
