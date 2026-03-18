"use client";

import React from "react";
import { motion } from "framer-motion";

const CommunitySection = () => {
    return (
        <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    {/* Text — Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-black font-display mb-6 tracking-tight text-slate-900">About Us</h2>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                            We, Safe Homenest Care, are dedicated to providing quality and respectful support for individuals living with disability across Australia. With a team of qualified professionals, we are driven to nurture each person&apos;s growth in a spirit of commitment, trust, and transparency.
                        </p>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                            We create a friendly, caring, and family-like atmosphere where our participants can thrive, build independence, and share their joys. Our person-centred approach ensures every care plan is tailored to your unique needs, preferences, and goals.
                        </p>
                    </motion.div>

                    {/* Image — Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="md:w-1/2"
                    >
                        <img
                            src="/sarvies-images/community-participation.jpg"
                            alt="Compassionate care support at Safe Homenest"
                            className="w-full h-auto rounded-xl object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
