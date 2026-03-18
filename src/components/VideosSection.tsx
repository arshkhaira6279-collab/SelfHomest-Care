"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
    {
        title: "Types and Services for Disability Support",
        thumbnail: "/sarvies-images/Community Participation.jpg",
    },
    {
        title: "The Importance of Person-Centred Care",
        thumbnail: "/sarvies-images/Support Coordination.jpg",
    },
];

const VideosSection = () => {
    return (
        <section className="py-14 md:py-18 px-4 md:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 tracking-tight"
                >
                    Videos
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {videos.map((video, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.12, duration: 0.5 }}
                            className="group cursor-pointer"
                        >
                            {/* Video thumbnail with play button */}
                            <div className="relative overflow-hidden rounded-lg mb-3">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-48 md:h-56 object-cover"
                                />
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                                {/* Play button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Play size={22} className="text-slate-900 ml-1" fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                            {/* Caption */}
                            <p className="text-sm text-slate-700 font-medium text-center">
                                {video.title}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideosSection;
