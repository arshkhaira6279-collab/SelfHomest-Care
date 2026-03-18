"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    CheckCircle2,
    ShieldCheck,
    UserCheck,
    MessageSquare,
    Heart,
    Clock,
    ArrowRight,
    Shield,
    Users,
    Award,
    Sparkles,
    HandHeart,
    ClipboardCheck,
    Lock
} from "lucide-react";

const features = [
    {
        title: "Truly Personalised Care",
        description: "No two people are the same, and neither are our care plans. We take the time to understand your life, your preferences, and your goals before creating a plan that fits you perfectly.",
        icon: UserCheck,
    },
    {
        title: "Qualified and Compassionate Team",
        description: "Every member of our team is carefully selected not just for their qualifications, but for their genuine desire to make a difference. Ongoing training ensures we always deliver care at the highest standard.",
        icon: ShieldCheck,
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
    }
];

const commitments = [
    "Worker Screening Checks",
    "Tailored & Measurable Support Plans",
    "Incident Management & Reporting",
    "Participant Feedback & Complaints Handling",
    "Privacy & Confidentiality Guaranteed",
    "Continuous Service Improvement",
];

export default function WhyUsPage() {
    return (
        <div className="pt-20">
            {/* ── Hero ── */}
            <section className="py-24 md:py-32 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-primary font-bold text-xs uppercase tracking-[0.25em] mb-6"
                    >
                        Why Choose Us
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-slate-900 mb-8 leading-[1.05]"
                    >
                        Care you can <span className="text-primary italic">trust</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
                    >
                        We are committed to delivering high-quality, person-centred support. Our services empower you while ensuring safety, dignity, and respect at every stage.
                    </motion.p>
                </div>
            </section>

            {/* ── Divider ── */}
            <div className="max-w-7xl mx-auto px-4"><div className="border-t border-slate-100" /></div>

            {/* ── Features ── */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="flex gap-5"
                            >
                                <div className="w-11 h-11 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                                    <feature.icon size={20} strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Numbers ── */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 gap-8 text-center">
                        {[
                            { value: "100%", label: "Person-centred approach" },
                            { value: "24/7", label: "Support available" },
                            { value: "20+", label: "Skilled carers" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-3xl md:text-5xl font-black text-slate-900 font-display tracking-tighter mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Quality Commitments ── */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black font-display tracking-tight text-slate-900 mb-4"
                        >
                            Quality & <span className="text-primary italic">Safeguarding</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-slate-500 text-lg font-medium max-w-xl mx-auto"
                        >
                            We maintain strong policies and rigorous standards to ensure the highest level of care for every participant.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {commitments.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50"
                            >
                                <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                                <span className="text-sm font-bold text-slate-700">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── How We Work ── */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black font-display tracking-tight text-slate-900 mb-4"
                        >
                            How we <span className="text-primary italic">work</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { step: "01", title: "Listen & Understand", description: "We start by listening to you — your needs, your goals, your preferences. No assumptions." },
                            { step: "02", title: "Plan & Connect", description: "We create a personalised care plan and connect you with the right support team." },
                            { step: "03", title: "Deliver & Evolve", description: "We deliver consistent, compassionate care and adapt as your needs evolve." },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.12 }}
                                className="text-center"
                            >
                                <div className="text-5xl md:text-6xl font-black text-slate-100 font-display mb-4 tracking-tighter">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight text-slate-900">
                            Ready to get started?
                        </h2>
                        <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
                            Whether you are exploring your options or looking to transition providers, our team is here to guide you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-primary transition-all hover:scale-[1.02] text-sm group"
                            >
                                Book a Free Consultation
                                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-10 py-4 rounded-full font-bold hover:border-slate-300 transition-all text-sm"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
