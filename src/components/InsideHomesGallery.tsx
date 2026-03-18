"use client";

import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
    {
        src: "/sarvies-images/travel-transportation-support.jpg",
        alt: "Caregiver assisting with wheelchair transport",
    },
    {
        src: "/sarvies-images/life-skills-development.jpg",
        alt: "Life skills development cooking support",
    },
    {
        src: "/sarvies-images/activity-participation.jpg",
        alt: "Activity participation and community engagement",
    },
];

const InsideHomesGallery = () => {
    return (
        <section className="py-14 md:py-18 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-6xl font-black font-display text-center mb-16 tracking-tight text-slate-900 leading-tight"
                >
                    Our <span className="text-primary italic">Gallery</span>
                </motion.h2>

                {/* 3 photos in a row — matching reference */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
                    {galleryImages.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="overflow-hidden rounded-lg group cursor-pointer"
                        >
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-56 md:h-64 object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InsideHomesGallery;
