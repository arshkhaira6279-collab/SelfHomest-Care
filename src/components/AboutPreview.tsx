"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const AboutPreview = () => {
    const highlights = [
        "Dedicated Disability Support",
        "Truly Personalised Care Plans",
        "Qualified & Compassionate Team",
        "24/7 Quality Care & Support",
    ];

    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[120px] -ml-48 -mt-48" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl opacity-10 -z-10" />
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10" />

                        <div className="rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white relative">
                            <img
                                src="/sarvies-images/aifaceswap-raw_cbfbec88ddafafb7db5bd6eab672efc6.png"
                                alt="Safe Homenest Care — Support worker helping participant with cooking skills"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-8 -right-4 md:-right-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 hidden sm:flex flex-col items-center justify-center"
                        >
                            <p className="text-3xl font-black text-primary mb-0.5 tracking-tighter">500+</p>
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] text-center leading-tight">Participants<br />Supported</p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-5">
                            <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">About Us</span>
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 !leading-tight tracking-tight">
                                Dedicated To{" "}
                                <span className="text-gradient">Enriching Lives</span>
                            </h2>
                            <p className="text-slate-800 text-base md:text-lg leading-relaxed font-bold">
                                At Safe Homenest Care, our purpose is to empower individuals living with disability
                                to lead independent, meaningful, and fulfilling lives through person-centred
                                support services that promote dignity, choice, safety, and community inclusion.
                            </p>
                            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                                We believe that quality care should never feel clinical or impersonal.
                                Behind every care plan is a life worth celebrating, a story worth hearing,
                                and a future worth building.
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + idx * 0.08 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 size={14} className="text-secondary" />
                                    </div>
                                    <span className="font-semibold text-slate-800 text-sm">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-2">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] text-sm"
                            >
                                More About Us
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
