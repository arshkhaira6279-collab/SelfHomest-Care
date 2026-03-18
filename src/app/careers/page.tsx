"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Briefcase,
    Users,
    Heart,
    Star,
    CheckCircle2,
    ArrowRight,
    Search
} from "lucide-react";

export default function CareersPage() {
    const benefits = [
        {
            title: "Supportive Culture",
            description: "Join a team that values your contribution and supports your professional growth in a compassionate environment.",
            icon: Heart
        },
        {
            title: "Flexibility",
            description: "We offer flexible working arrangements to help you maintain a healthy work-life balance.",
            icon: Users
        },
        {
            title: "Competitive Pay",
            description: "We recognize talent and commitment with competitive remuneration and rewards for excellence.",
            icon: Star
        },
        {
            title: "Purpose-Driven Work",
            description: "Make a real difference in the lives of people living with disability every single day.",
            icon: Briefcase
        }
    ];

    return (
        <div className="pt-20">
            {/* Header */}
            <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/sarvies-images/aifaceswap-raw_cbfbec88ddafafb7db5bd6eab672efc6.png"
                        alt="Careers at Safe Homenest Care"
                        fill
                        priority
                        className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50/20 via-slate-50/40 to-slate-50"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8 border border-primary/20"
                    >
                        <Search size={32} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black font-display mb-6 text-slate-900 tracking-tighter"
                    >
                        Join Our <span className="text-primary italic">Compassionate Team</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-slate-700 font-display font-medium max-w-3xl mx-auto leading-relaxed"
                    >
                        Are you passionate about making a positive impact? We're looking for dedicated professionals who share our values of respect, dignity, and care.
                    </motion.p>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black font-display text-slate-900 mb-6">Why Work With Us?</h2>
                        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                            Experience a career that offers more than just a job — join a family dedicated to excellence in care.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6">
                                    <benefit.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Info */}
            <section className="py-24 bg-white text-slate-900 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight mb-6">
                                Start Your Journey <span className="text-primary italic">With Us</span>
                            </h2>
                            <p className="text-lg text-slate-700 font-bold">
                                We're always looking for talented Support Workers, Registered Nurses, and Coordinators to join our growing team.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Ongoing professional development",
                                    "Supportive management and team environment",
                                    "Meaningful work with diverse participants",
                                    "Focus on health, safety, and wellbeing"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                            <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                                        </div>
                                        <span className="font-bold text-slate-800 text-sm">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="relative rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl aspect-[4/3]">
                                <Image
                                    src="/sarvies-images/assistance-with-daily-living.jpg"
                                    alt="Our Team"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-6xl mx-auto bg-slate-50 rounded-[3rem] p-12 md:p-20 text-center border border-slate-100 shadow-sm relative overflow-hidden">
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black font-display text-slate-950 tracking-tight leading-tight">
                            Ready to Apply?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-bold font-display">
                            Send your resume and a brief introduction to our recruitment team today. We can't wait to meet you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <a
                                href="mailto:info@safehomenest.com.au"
                                className="bg-white text-slate-950 border border-slate-200 px-10 py-5 rounded-full font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg group"
                            >
                                Send Your Resume
                                <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
                            </a>
                            <Link
                                href="/contact"
                                className="bg-white text-slate-950 border border-slate-200 px-10 py-5 rounded-full font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg group"
                            >
                                Contact Recruitment
                                <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
