"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        quote: "Safe Homenest Care has been a blessing for our family. The team treats my mother with such genuine respect and warmth. For the first time in years, she looks forward to her days again. They do not just care for her — they care about her.",
        name: "Priya M.",
    },
    {
        quote: "I was nervous about having support workers in my home, but from the very first visit, they made me feel completely at ease. They listen, they adapt, and they truly understand what independence means to me. I could not ask for better care.",
        name: "James R.",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-14 md:py-18 px-4 md:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
                {/* Navigation arrows + content */}
                <div className="flex items-center gap-4 md:gap-8">
                    {/* Left arrow */}
                    <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors shrink-0">
                        <ChevronLeft size={20} />
                    </button>

                    {/* 2 testimonial cards */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        {testimonials.map((t, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.12, duration: 0.5 }}
                                className="text-center"
                            >
                                {/* Quote icon */}
                                <Quote size={28} className="text-primary/30 mx-auto mb-4" />

                                {/* Name */}
                                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-3">
                                    {t.name}
                                </h4>

                                {/* Quote text */}
                                <p className="text-slate-500 text-sm leading-relaxed italic">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors shrink-0">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
