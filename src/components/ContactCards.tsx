"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactCards = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

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
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
                            <p className="text-slate-600 text-sm font-medium">We will get back to you within 24 hours.</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="text-primary font-bold text-xs uppercase tracking-widest hover:underline mt-2"
                            >
                                Send another
                            </button>
                        </div>
                    ) : (
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="from_name"
                                required
                                placeholder="Full Name"
                                className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all"
                            />
                            <input
                                type="tel"
                                name="phone"
                                required
                                placeholder="Mobile Number"
                                className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all"
                            />
                            <input
                                type="email"
                                name="from_email"
                                required
                                placeholder="Email ID"
                                className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all"
                            />
                            <textarea
                                name="message"
                                required
                                placeholder="Message"
                                rows={4}
                                className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                            />

                            {status === "error" && (
                                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm font-bold">
                                    <AlertCircle size={16} />
                                    Something went wrong. Please try again.
                                </div>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status === "loading"}
                                type="submit"
                                className="w-full sm:w-auto px-10 py-3.5 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-primary transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
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
