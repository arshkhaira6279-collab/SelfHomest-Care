"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function ContactPage() {
    const contactInfo = [
        {
            icon: Phone,
            title: "Call Us",
            details: "+61 493 012 435",
            sub: "Mon - Fri, 9am - 5pm",
            href: "tel:+61493012435",
            color: "text-primary",
            bg: "bg-primary/5",
        },
        {
            icon: Mail,
            title: "Email Us",
            details: "info@safehomenestcare.com.au",
            sub: "We respond within 24h",
            href: "mailto:info@safehomenestcare.com.au",
            color: "text-secondary-600",
            bg: "bg-secondary-600/5",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            details: "Aveley, Perth WA",
            sub: "Australia",
            href: "#",
            color: "text-accent",
            bg: "bg-accent/5",
        },
        {
            icon: Clock,
            title: "24/7 Support",
            details: "After-hours Emergency",
            sub: "Available for participants",
            href: "tel:+61493012435",
            color: "text-primary-400",
            bg: "bg-primary-400/5",
        },
    ];

    return (
        <div className="pt-32 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100 mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">Contact</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-bold text-slate-950 tracking-tight leading-tight mb-8"
                    >
                        Let&apos;s Start <br />
                        <span className="text-slate-400 italic font-light">The Conversation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-600 max-w-2xl font-medium leading-relaxed"
                    >
                        Our friendly team typically responds within 24 hours.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left: Contact Info */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="space-y-6">
                            {contactInfo.map((item, idx) => (
                                <motion.a
                                    key={idx}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.05 }}
                                    className="flex items-start gap-4 group p-4 rounded-xl hover:bg-slate-50 transition-all"
                                >
                                    <div className={`mt-0.5 flex-shrink-0 w-10 h-10 rounded-lg ${item.bg} ${item.color} flex items-center justify-center`}>
                                        <item.icon size={20} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm tracking-tight mb-1">{item.title}</h4>
                                        <p className="text-slate-800 font-bold text-base group-hover:text-primary transition-colors">{item.details}</p>
                                        <p className="text-[11px] text-slate-400 mt-0.5 uppercase tracking-wider font-bold">{item.sub}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-8 border-t border-slate-100">
                            <p className="text-[10px] uppercase tracking-widest font-black text-slate-300 mb-4">Follow Us</p>
                            <div className="flex gap-6">
                                {["LinkedIn", "Facebook", "Instagram"].map((social) => (
                                    <a key={social} href="#" className="text-xs font-bold text-slate-500 hover:text-primary transition-colors">
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-8">
                        <div
                            className="bg-white p-8 md:p-10 rounded-2xl relative overflow-hidden"
                            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)", borderRadius: "16px" }}
                        >
                            {/* Subtle Background Decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32" />
                            <div className="relative z-10">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
