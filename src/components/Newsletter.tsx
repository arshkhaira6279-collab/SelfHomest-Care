"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
    return (
        <section className="py-10 px-4 md:px-8 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-slate-100 text-center relative overflow-hidden"
            >
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px] -mr-12 -mt-12" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-[50px] -ml-8 -mb-8" />

                <div className="relative z-10">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl font-bold mb-2 text-slate-900 tracking-tight"
                    >
                        Stay Connected with <span className="text-gradient">Safe Homenest Care</span>
                    </motion.h3>
                    <p className="text-slate-700 text-sm md:text-base mb-8 max-w-lg mx-auto font-medium">
                        Receive care tips, community updates, and helpful disability support resources straight to your inbox.
                    </p>
                    <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
                        <input
                            className="flex-1 bg-slate-50 border border-slate-200 placeholder-slate-400 text-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 focus:outline-none text-sm font-medium px-5 py-4 rounded-xl transition-all"
                            placeholder="Your email address..."
                            type="email"
                        />
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-primary text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-600 transition-all font-bold text-sm whitespace-nowrap"
                        >
                            <span>Subscribe</span>
                            <ArrowRight size={18} />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Newsletter;
