"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Search, ClipboardList, Users, Home, Route as RouteIcon } from "lucide-react";

const steps = [
    { id: 1, title: "Reach out to our friendly team by phone, email, or the form on our website.", label: "Get in Touch", icon: Phone },
    { id: 2, title: "We meet you to understand your needs, goals, and preferences.", label: "Initial Consultation", icon: Search },
    { id: 3, title: "Together, we build a personalised care plan tailored to your life.", label: "Care Planning", icon: ClipboardList },
    { id: 4, title: "We match you with the right support workers who fit your personality and needs.", label: "Team Matching", icon: Users },
    { id: 5, title: "Your care begins — and we check in regularly to ensure everything is right.", label: "Care Begins", icon: Home },
];

const ProcessSection = () => {
    return (
        <section className="py-14 md:py-20 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-6"
                >
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200">
                        <RouteIcon size={14} className="text-secondary" />
                        <span className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">How It Works</span>
                    </div>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-5 tracking-tight"
                >
                    Getting Started Is <span className="text-gradient">Simple</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-500 text-center max-w-xl mx-auto mb-16 text-base md:text-lg"
                >
                    Our process is designed to be stress-free and transparent from the very first conversation.
                </motion.p>

                {/* Desktop */}
                <div className="relative hidden lg:flex items-start justify-between gap-4 pb-8">
                    <svg className="absolute top-16 left-0 w-full h-32 -z-0" viewBox="0 0 1200 120" fill="none" preserveAspectRatio="none">
                        <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            d="M 50,60 C 200,20 300,100 450,60 C 600,20 700,100 850,60 C 950,30 1050,60 1150,60"
                            stroke="url(#gradient-line)"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                        />
                        <defs>
                            <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#7B3FE4" stopOpacity="0.2" />
                                <stop offset="50%" stopColor="#0FB9B1" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#7B3FE4" stopOpacity="0.2" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.12, duration: 0.5 }}
                            className={`text-center w-48 relative z-10 ${idx % 2 === 0 ? "mt-0" : "mt-16"}`}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-white mb-4 ${idx === 0
                                    ? "bg-gradient-to-br from-primary-500 to-primary-600 ring-4 ring-primary/15"
                                    : "bg-gradient-to-br from-primary-500 to-primary-600"
                                    }`}
                            >
                                <step.icon size={24} strokeWidth={2.5} />
                            </motion.div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-100">
                                <h4 className="font-bold text-primary text-sm mb-1">{step.label}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{step.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile */}
                <div className="lg:hidden flex flex-col gap-6 relative pl-8 border-l-2 border-dashed border-primary/20 ml-4">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="absolute -left-[41px] top-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl border-4 border-white flex items-center justify-center"
                            >
                                <span className="text-white text-xs font-bold">{step.id}</span>
                            </motion.div>
                            <h4 className="font-bold text-lg text-slate-900">{step.label}</h4>
                            <p className="text-slate-500 text-sm">{step.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
