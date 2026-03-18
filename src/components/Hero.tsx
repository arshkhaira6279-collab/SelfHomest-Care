"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            {/* ── MOBILE: Unique Typography Layout ── */}
            <div className="block md:hidden relative w-full h-[85vh] min-h-[550px]">
                <Image
                    src="/sarvies-images/aifaceswap-raw_cbfbec88ddafafb7db5bd6eab672efc6.png"
                    alt="Safe Homenest Care — Home care and disability support"
                    fill
                    priority
                    className="object-cover object-top"
                    quality={100}
                />

                {/* Clean white-wash overlay */}
                <div className="absolute inset-0 bg-white/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10"
                >
                    <h1 className="text-4xl leading-[1.2] font-normal tracking-tight mb-10 text-slate-900 max-w-[320px] mx-auto">
                        Providing the best
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#065AA2] to-[#60922B] font-bold mx-1">
                            home care
                        </span>
                        for your independence
                    </h1>
                    <Link href="/contact" className="flex justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-10 py-4 bg-primary text-white text-base font-bold rounded-full transition-all shadow-xl"
                        >
                            Enquire Now
                        </motion.button>
                    </Link>
                </motion.div>
            </div>

            {/* ── DESKTOP: Unique Typography Layout ── */}
            <div className="hidden md:block relative overflow-hidden" style={{ minHeight: "min(90vh, 850px)" }}>
                <Image
                    src="/sarvies-images/aifaceswap-raw_cbfbec88ddafafb7db5bd6eab672efc6.png"
                    alt="Safe Homenest Care — Home care and disability support"
                    fill
                    priority
                    className="object-cover object-center"
                    quality={100}
                    style={{ zIndex: 1 }}
                />

                {/* Elegant central gradient */}
                <div
                    className="absolute inset-0"
                    style={{
                        zIndex: 2,
                        background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.9) 45%, rgba(255,255,255,0.9) 55%, rgba(255,255,255,0.05) 100%)",
                    }}
                />

                {/* Content — centered */}
                <div
                    className="relative flex items-center justify-center min-h-[min(90vh, 850px)] px-14 lg:px-20"
                    style={{ zIndex: 3 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="max-w-5xl text-center py-24"
                    >
                        <h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] text-4xl font-normal tracking-tight mb-14 text-slate-900">
                            Providing the best
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#065AA2] to-[#60922B] font-bold px-1">
                                home care
                            </span>
                            for your independence
                        </h1>
                        <Link href="/contact" className="flex justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-14 py-6 bg-primary text-white font-bold rounded-full transition-all shadow-[0_20px_60px_rgba(22,120,95,0.3)] hover:shadow-[0_30px_80px_rgba(22,120,95,0.4)] text-xl transition-all duration-300"
                            >
                                Enquire Now
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
