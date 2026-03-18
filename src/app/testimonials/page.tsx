"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Star,
    Quote,
    MessageCircle,
    Heart,
    Users,
    ClipboardCheck,
    ArrowRight
} from "lucide-react";

const testimonials = [
    {
        quote: "Safe Homenest Care has been a blessing for our family. The team treats my mother with such genuine respect and warmth. For the first time in years, she looks forward to her days again. They do not just care for her — they care about her.",
        author: "Priya M.",
        role: "Daughter of Participant",
        category: "Family Feedback"
    },
    {
        quote: "I was nervous about having support workers in my home, but from the very first visit, they made me feel completely at ease. They listen, they adapt, and they truly understand what independence means to me. I could not ask for better care.",
        author: "James R.",
        role: "NDIS Participant",
        category: "Participant Story"
    },
    {
        quote: "As a support coordinator, I have referred many clients to Safe Homenest Care. The professionalism, communication, and genuine compassion they bring to every case sets them apart. My clients always feel heard and valued.",
        author: "Sarah K.",
        role: "Support Coordinator",
        category: "Professional Referral"
    }
];

export default function TestimonialsPage() {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/sarvies-images/aifaceswap-raw_cbfbec88ddafafb7db5bd6eab672efc6.png"
                        alt="Testimonials"
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
                        <MessageCircle size={32} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black font-display mb-6 text-slate-900 tracking-tighter"
                    >
                        Voices of <span className="text-primary italic">Care</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-slate-700 font-display font-medium max-w-3xl mx-auto leading-relaxed"
                    >
                        Discover how Safe Homenest Care is making a difference in the lives of participants and their families every single day.
                    </motion.p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="absolute top-10 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                                    <Quote size={60} />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} className="fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <p className="text-xl text-slate-900 font-bold leading-relaxed mb-8">
                                        "{t.quote}"
                                    </p>
                                    <div className="flex items-center gap-4 border-t border-slate-200 pt-8">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl">
                                            {t.author[0]}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900 leading-tight">{t.author}</h4>
                                            <p className="text-sm text-slate-500 font-bold">{t.role}</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        {t.category}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics / Impact Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-500"
                        >
                            <div className="text-5xl md:text-7xl font-black text-slate-900 mb-4 font-display tracking-tighter italic">100%</div>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Client Satisfaction</h4>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-500"
                        >
                            <div className="text-5xl md:text-7xl font-black text-slate-900 mb-4 font-display tracking-tighter italic">24/7</div>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Available Support</h4>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-500"
                        >
                            <div className="text-5xl md:text-7xl font-black text-slate-900 mb-4 font-display tracking-tighter italic">20+</div>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Skilled Carers</h4>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-6xl mx-auto bg-slate-50 rounded-[3rem] p-12 md:p-20 text-center border border-slate-100 shadow-sm relative overflow-hidden">
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black font-display text-slate-950 tracking-tight leading-tight mb-6">
                            Your Journey to Better Care <span className="text-primary italic">Starts Here</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-bold font-display mb-10">
                            Whether you are exploring your options, transitioning providers, or starting your plan, we are here to guide you with patience and expertise. No pressure. No jargon. Just honest, caring support.
                        </p>
                        <div className="flex justify-center pt-4">
                            <Link
                                href="/contact"
                                className="bg-white text-slate-950 border border-slate-200 px-10 py-5 rounded-full font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg"
                            >
                                Book Your Free Consultation
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
