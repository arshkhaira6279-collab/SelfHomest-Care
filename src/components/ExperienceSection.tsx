"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const ExperienceSection = () => {
    return (
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[2rem] overflow-hidden min-h-[600px] flex items-center"
                >
                    {/* Background Image with Gradient Overlay */}
                    <div className="absolute inset-0">
                        <img
                            alt="Compassionate Care"
                            className="w-full h-full object-cover"
                            src="/sarvies-images/travel-transportation-support.jpg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    </div>

                    {/* Content Component */}
                    <div className="relative z-10 w-full lg:w-1/2 p-8 md:p-16 lg:p-20 text-white">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                            <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">Why Choose Us</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight"
                        >
                            The Safe Homenest <br />
                            <span className="text-secondary italic">Difference</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-bold font-display max-w-lg"
                        >
                            No two people are the same, and neither are our care plans. We take the time to understand your life, your preferences, and your goals before creating a plan that fits you perfectly.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {[
                                "Truly Personalised Care Plans",
                                "Qualified & Compassionate Team",
                                "Transparent Communication Always",
                                "Available When You Need Us",
                            ].map((item, idx) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                        <Check size={12} className="text-white" strokeWidth={4} />
                                    </div>
                                    <span className="text-sm font-black tracking-tight">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                        >
                            <Link href="/about">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-slate-900 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-secondary hover:text-white transition-all"
                                >
                                    Learn More About Us
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48" />
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;
