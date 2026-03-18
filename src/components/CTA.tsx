"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const CTA = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.8, 1], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);

    return (
        <section className="py-16 px-4 overflow-hidden bg-white">
            <motion.div
                style={{ scale, opacity }}
                className="max-w-7xl mx-auto relative rounded-[2rem] md:rounded-[3rem] bg-slate-900 overflow-hidden group"
            >
                {/* Dynamic Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/sarvies-images/travel-transportation-support.jpg"
                        alt="Safe transportation support for participants"
                        className="w-full h-full object-cover opacity-20 grayscale transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/40" />
                </div>

                {/* Content Grid */}
                <div className="relative z-10 px-6 py-16 md:px-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl text-center md:text-left">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-7xl font-black !text-white leading-tight mb-8 tracking-tighter"
                        >
                            Your Journey to <br />
                            <span className="text-white italic">Better Care</span> Starts Here
                        </motion.h2>

                        <p className="!text-white text-base md:text-xl mb-12 max-w-lg leading-relaxed font-bold font-display">
                            Whether you are exploring your options, transitioning providers, or starting your care plan, we are here to guide you with patience and expertise. No pressure. No jargon. Just honest, caring support.
                        </p>

                        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-white text-slate-900 px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-secondary hover:text-white transition-all duration-300"
                                >
                                    Book Free Consultation
                                </motion.button>
                            </Link>
                        </div>
                    </div>

                    {/* Minimalist Dynamic Accent */}
                    <div className="flex items-center justify-center p-4">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, 0]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="w-40 h-40 md:w-64 md:h-64 rounded-full border-2 border-white/10 flex items-center justify-center relative"
                        >
                            <div className="absolute inset-4 rounded-full border border-white/20 animate-spin-slow"></div>
                            <div className="w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
                            <span className="absolute -top-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-[10px] uppercase font-bold tracking-widest">
                                Trusted Care
                            </span>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;
