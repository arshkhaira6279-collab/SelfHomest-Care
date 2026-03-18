"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Target,
    Eye,
    Award,
    Verified,
    ShieldCheck,
    CheckCircle,
    ArrowRight,
    Sparkles
} from "lucide-react";

const values = [
    {
        title: "Dignity First",
        description: "Every interaction respects your choices, your privacy, and your right to live life on your own terms.",
    },
    {
        title: "Genuine Connection",
        description: "We do not just provide services. We build relationships rooted in trust, empathy, and real understanding.",
    },
    {
        title: "Excellence in Care",
        description: "From our trained professionals to our tailored care plans, we hold ourselves to the highest standard because you deserve nothing less.",
    },
    {
        title: "Cultural Respect",
        description: "We honour diverse backgrounds and deliver culturally respectful care tailored to each participant.",
    },
];

const certifications = [
    "Dedicated Disability Support",
    "Person-Centred Approach",
    "Cultural Competency Standards",
    "Quality & Safety Compliant",
];

export default function AboutPage() {
    return (
        <div className="pt-20">
            {/* Hero Header */}
            <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/sarvies-images/aifaceswap-raw_cbfbec88ddafafb7db5bd6eab672efc6.png"
                        alt="Safe Homenest Care Team"
                        fill
                        priority
                        className="object-cover object-top opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50/20 via-slate-50/40 to-slate-50"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-extrabold font-display text-slate-900 mb-8 tracking-tighter"
                    >
                        Care Built On <span className="text-primary italic">Trust</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-2xl text-slate-700 font-display font-bold max-w-3xl mx-auto leading-relaxed"
                    >
                        Safe Homenest Care was founded on the belief that quality care should never feel clinical or impersonal. We are a dedicated team of professionals who bring warmth, expertise, and heart into every home we serve.
                    </motion.p>
                </div>
            </section>

            {/* Our Purpose */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/5 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Our Purpose</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
                            Empowering <span className="text-primary italic">Independent Lives</span>
                        </h2>
                        <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-bold max-w-3xl mx-auto">
                            At Safe Homenest Care, our purpose is to empower individuals living with disability to lead independent, meaningful, and fulfilling lives. We deliver person-centred support services that promote dignity, choice, safety, and community inclusion. Our commitment is to provide compassionate, culturally respectful, and high-quality care tailored to each participant&apos;s unique goals and needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 md:p-14 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-500 group flex flex-col items-center text-center"
                        >
                            <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Target size={40} />
                            </div>
                            <h2 className="text-3xl font-black font-display text-slate-900 mb-6 tracking-tight">Our Mission</h2>
                            <p className="text-slate-700 text-lg leading-relaxed font-bold">
                                Safe Homenest Care is committed to delivering high-quality, person-centred NDIS support services that promote independence, wellbeing, and social inclusion. We work in partnership with participants and families to provide safe, compassionate, and culturally respectful care tailored to each individual&apos;s unique goals and needs.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-10 md:p-14 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-500 group flex flex-col items-center text-center"
                        >
                            <div className="w-20 h-20 bg-slate-100 text-slate-900 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Eye size={40} />
                            </div>
                            <h2 className="text-3xl font-black font-display text-slate-900 mb-6 tracking-tight">Our Vision</h2>
                            <p className="text-slate-700 text-lg leading-relaxed font-bold">
                                To create an inclusive community where individuals living with disability feel empowered, respected, and supported to live independent and meaningful lives with dignity and choice.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Why We Care */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100"
                        >
                            <img
                                src="/sarvies-images/aboutus.webp"
                                alt="Support worker helping participant with cooking and life skills"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="space-y-3">
                                <span className="text-primary font-bold uppercase text-[10px] tracking-widest">Why We Care</span>
                                <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 leading-tight tracking-tight">
                                    Person-Centred, <br />
                                    <span className="text-primary italic">Culturally Respectful</span>
                                </h2>
                            </div>
                            <p className="text-slate-700 text-lg leading-relaxed font-bold">
                                We started Safe Homenest Care because we saw too many people receiving care that overlooked the most important thing: the person.
                            </p>
                            <p className="text-slate-600 text-base leading-relaxed font-medium">
                                Behind every care plan is a life worth celebrating, a story worth hearing, and a future worth building. That is what drives us every single day. Our approach is simple: we listen first, understand deeply, and deliver care that genuinely transforms lives.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/5 mb-4"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Our Values</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">What We <span className="text-primary italic">Stand For</span></h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg font-bold">
                            Our values guide every interaction, every care plan, and every relationship we build.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-white rounded-3xl border border-slate-200 p-8 hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <CheckCircle size={24} />
                                </div>
                                <h3 className="text-lg font-bold font-poppins text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed font-medium">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications & Accreditation */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Subtle Background Decoration */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-50"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/5"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Our Accreditation</span>
                                </motion.div>
                                <h2 className="text-4xl md:text-6xl font-black font-display text-slate-900 leading-tight tracking-tight">
                                    Fully Accredited & <br />
                                    <span className="text-primary italic">Quality Verified</span>
                                </h2>
                            </div>

                            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium max-w-xl">
                                We take quality and safety seriously, committed to rigorous standards and audits to meet highest national benchmarks. Reliability is our core promise.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {certifications.map((cert, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex gap-4 items-center group"
                                    >
                                        <div className="w-12 h-12 bg-white border border-slate-100 shadow-sm rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <span className="font-bold text-slate-800 text-sm tracking-tight">{cert}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Cert Badges Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { title: "Quality Assured", icon: Verified, color: "text-blue-500", bg: "bg-blue-50" },
                                { title: "Quality Certified", icon: Award, color: "text-amber-500", bg: "bg-amber-50" },
                                { title: "Safety Compliant", icon: ShieldCheck, color: "text-green-500", bg: "bg-green-50" },
                                { title: "Person-Centred", icon: CheckCircle, color: "text-rose-500", bg: "bg-rose-50" },
                            ].map((badge, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -8, rotate: i % 2 === 0 ? 1 : -1 }}
                                    className="group aspect-square bg-white rounded-[2.5rem] flex flex-col items-center justify-center p-8 gap-5 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 relative"
                                >
                                    <div className={`w-20 h-20 ${badge.bg} ${badge.color} rounded-3xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                                        <badge.icon size={42} strokeWidth={1.5} />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Standard</p>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-primary transition-colors">{badge.title}</h4>
                                    </div>
                                    {/* Decorative Dot */}
                                    <div className="absolute top-6 right-6 w-2 h-2 rounded-full border-2 border-slate-100"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-6xl mx-auto bg-slate-50 rounded-[3rem] p-12 md:p-20 text-center border border-slate-100 shadow-sm relative overflow-hidden">
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-slate-950">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-700 font-display font-medium max-w-2xl mx-auto">
                            Whether you are exploring your options, transitioning providers, or starting your care plan,
                            we are here to guide you with patience and expertise.
                        </p>
                        <div className="flex justify-center pt-4">
                            <Link
                                href="/contact"
                                className="bg-white text-slate-950 border border-slate-200 px-10 py-5 rounded-full font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all flex items-center gap-3 text-lg"
                            >
                                Book a Consultation
                                <ArrowRight size={22} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
