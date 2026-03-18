"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Assistance with Daily Living",
        description: "Supporting participants with everyday personal care and routine activities to maintain comfort, safety, and independence.",
        image: "/sarvies-images/assistance-with-daily-living.jpg",
    },
    {
        title: "Community Participation",
        description: "Helping participants stay connected and engaged within their community through social events, activities, and volunteering.",
        image: "/sarvies-images/community-participation.jpg",
    },
    {
        title: "Travel & Transportation Support",
        description: "Safe and reliable assistance with travel so participants can attend medical appointments, therapy, and community activities.",
        image: "/sarvies-images/travel-transportation-support.jpg",
    },
    {
        title: "Domestic Assistance",
        description: "Supporting participants to maintain a clean, safe, and healthy home environment with cleaning, laundry, and organisation.",
        image: "/sarvies-images/woman-with-laundry-basket-smiling-camera.jpg.jpeg",
    },
    {
        title: "Life Skills Development",
        description: "Building practical skills to increase independence and confidence — from budgeting to cooking and personal organisation.",
        image: "/sarvies-images/life-skills-development.jpg",
    },
    {
        title: "Activity Participation",
        description: "Supporting involvement in structured and meaningful activities that promote wellbeing, confidence, and social connection.",
        image: "/sarvies-images/activity-participation.jpg",
    },
    {
        title: "Support Coordination",
        description: "Assisting participants in understanding and implementing their NDIS plans by connecting them with suitable service providers.",
        image: "/sarvies-images/support-coordination.jpg",
    },
];

const ServicesPreview = () => {
    return (
        <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-3"
                    >
                        What We Offer
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-black font-display tracking-tight text-slate-900 mb-4"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-700 max-w-2xl mx-auto text-lg font-bold"
                    >
                        Person-centred NDIS support services designed to promote independence, dignity, and meaningful community participation.
                    </motion.p>
                </div>

                {/* Service Cards — image-based, 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500"
                        >
                            {/* Card image */}
                            <div className="h-44 overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.07 }}
                                    transition={{ duration: 0.7 }}
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Card body */}
                            <div className="p-5">
                                <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-sm font-bold leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center mt-10"
                >
                    <Link
                        href="/services"
                        className="group inline-flex items-center gap-3 bg-white text-slate-950 border border-slate-200 px-10 py-5 rounded-full font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all text-lg"
                    >
                        <span>View All Services</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesPreview;
