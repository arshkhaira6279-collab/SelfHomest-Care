"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const careInAction = [
    {
        title: "Travel & Transportation Support",
        description: "Safe travel assistance for medical visits, therapy, shopping, and education.",
        tags: ["Disability Support", "Transport"],
        status: "Featured",
        image: "/sarvies-images/Travel & Transportation Support.jpg",
    },
    {
        title: "Life Skills Development",
        description: "Building independence through cooking, budgeting, communication, and personal organisation.",
        tags: ["Independence", "Skills"],
        status: "",
        image: "/sarvies-images/Life Skills Development.jpg",
    },
    {
        title: "Assistance with Daily Living",
        description: "Compassionate support with everyday personal care and meal preparation.",
        tags: ["Daily Care", "Meals"],
        status: "Available Now",
        image: "/sarvies-images/Assistance with Daily Living.jpg",
    },
];

const HomesGallery = () => {
    return (
        <section className="py-12 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
                    <div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-secondary font-semibold text-xs md:text-sm uppercase tracking-widest mb-3"
                        >
                            Our Care in Action
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-3xl font-bold mb-2"
                        >
                            Real <span className="text-secondary">Support</span>, Real Lives
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-500 text-sm md:text-base"
                        >
                            See how we empower individuals to live independent and meaningful lives every day.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/services" className="text-primary font-semibold hover:underline text-sm md:text-base">
                            View All Services &rarr;
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {careInAction.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-slate-200 transition-all duration-500 cursor-pointer group"
                        >
                            <div className="h-48 sm:h-64 md:h-72 overflow-hidden relative">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.8 }}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700"
                                    src={item.image}
                                />
                                {item.status && (
                                    <div className={`absolute top-4 left-4 text-[8px] md:text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest ${item.status === "Featured" ? "bg-primary text-white" : "bg-white text-primary-900"}`}>
                                        {item.status}
                                    </div>
                                )}
                            </div>
                            <div className="p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary-900 tracking-tight leading-tight">{item.title}</h3>
                                <p className="text-slate-500 text-sm mb-4 md:mb-6 leading-relaxed">{item.description}</p>
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                                    {item.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 md:px-4 md:py-1.5 bg-slate-50 text-slate-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest rounded-full border border-slate-100 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomesGallery;
