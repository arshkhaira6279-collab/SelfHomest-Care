"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Family Member",
        text: "The care Safe Homenest provides for my mother is exceptional. They are professional, punctual, and truly care about her well-being. We finally feel at peace.",
        rating: 5,
    },
    {
        name: "David Wilson",
        role: "Care Participant",
        text: "I've tried several providers, but Safe Homenest stands out. Their support coordination helped me get the most out of my plan and build real independence.",
        rating: 5,
    },
    {
        name: "Emily Reed",
        role: "Support Coordinator",
        text: "I highly recommend Safe Homenest to all my clients. Their team is skilled, reliable, and genuinely compassionate in everything they do.",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 md:py-28 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/[0.02] rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 space-y-5">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm"
                    >
                        <Quote size={14} className="text-primary" />
                        <span className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">Real Stories</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight"
                    >
                        What Our <span className="text-gradient">Clients Say</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="bg-white p-8 md:p-10 rounded-3xl shadow-card hover:shadow-hover border border-slate-100 relative group transition-all cursor-pointer"
                        >
                            <div className="absolute top-8 right-8 text-slate-100 group-hover:text-primary/10 transition-colors">
                                <Quote size={36} />
                            </div>
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-slate-800 mb-8 italic leading-relaxed text-[15px] relative z-10 font-bold">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>
                            <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                                    <p className="text-[10px] text-primary font-bold uppercase tracking-[0.15em]">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
