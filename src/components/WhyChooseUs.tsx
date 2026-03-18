"use client";

import { motion } from "framer-motion";
import { Heart, Users, MessageSquare, Clock } from "lucide-react";

const reasons = [
    {
        title: "Truly Personalised Care",
        description: "No two people are the same, and neither are our care plans. We take the time to understand your life, your preferences, and your goals before creating a plan that fits you perfectly.",
        icon: Heart,
    },
    {
        title: "Qualified and Compassionate Team",
        description: "Every member of our team is carefully selected not just for their qualifications, but for their genuine desire to make a difference. Ongoing training ensures we always deliver care at the highest standard.",
        icon: Users,
    },
    {
        title: "Transparent Communication",
        description: "You will always know what is happening and why. We keep you, your family, and your care team informed every step of the way with clear, honest, and timely communication.",
        icon: MessageSquare,
    },
    {
        title: "Available When You Need Us",
        description: "Life does not follow a schedule, and neither do we. Our flexible care arrangements and responsive support team ensure you always have someone to rely on when it matters most.",
        icon: Clock,
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-slate-50">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-6xl font-black font-display text-center mb-16 tracking-tight text-slate-900 leading-tight"
                >
                    Why Choose <span className="text-primary italic">Us</span>
                </motion.h2>

                {/* 2×2 Grid — matching reference */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {reasons.map((reason, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08, duration: 0.5 }}
                            className="flex items-start gap-4"
                        >
                            <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center shrink-0 text-primary">
                                <reason.icon size={22} />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2 leading-tight">
                                    {reason.title}
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-bold">
                                    {reason.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
