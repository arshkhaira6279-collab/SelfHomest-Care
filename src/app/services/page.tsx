"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Heart,
    Users,
    Home,
    Car,
    BookOpen,
    ClipboardCheck,
    Palette,
    CheckCircle2,
    ArrowRight,
    HandHelping
} from "lucide-react";

const services = [
    {
        title: "Assistance with Daily Living (ADLs)",
        description: "We support participants with everyday personal care and routine activities to maintain comfort, safety, and independence. Our team ensures respectful, private, and culturally sensitive care at all times.",
        icon: HandHelping,
        highlights: ["Showering, Grooming & Dressing", "Toileting & Hygiene Support", "Meal Preparation & Feeding", "Medication Reminders", "Mobility & Transfers"],
        image: "/sarvies-images/assistance-with-daily-living.jpg"
    },
    {
        title: "Community Participation",
        description: "We help participants stay connected and engaged within their community. Our goal is to reduce isolation and build confidence in social settings.",
        icon: Users,
        highlights: ["Social Events & Cultural Programs", "Recreational Activities", "Visiting Friends & Family", "Clubs, Classes & Volunteering", "Confidence Building"],
        image: "/sarvies-images/community-participation.jpg"
    },
    {
        title: "Travel & Transportation Support",
        description: "We provide safe and reliable assistance with travel so participants can get where they need to be safely and comfortably.",
        icon: Car,
        highlights: ["Medical Appointments", "Therapy Sessions", "Community Activities", "Shopping Trips", "Work or Education Programs"],
        image: "/sarvies-images/travel-transportation-support.jpg"
    },
    {
        title: "Domestic Assistance",
        description: "We support participants to maintain a clean, safe, and healthy home environment. We encourage participants to be involved where possible to build independence.",
        icon: Home,
        highlights: ["Light Cleaning", "Laundry", "Dishwashing", "Changing Bed Linens", "Basic Household Organisation"],
        image: "/sarvies-images/woman-with-laundry-basket-smiling-camera.jpg.jpeg"
    },
    {
        title: "Life Skills Development",
        description: "We help participants build practical skills to increase independence and confidence. We focus on capacity building tailored to each participant's goals.",
        icon: BookOpen,
        highlights: ["Budgeting & Money Management", "Cooking & Meal Planning", "Personal Organisation", "Communication Skills", "Decision-Making Skills"],
        image: "/sarvies-images/life-skills-development.jpg"
    },
    {
        title: "Activity Participation",
        description: "We support involvement in structured and meaningful activities that promote wellbeing. These activities enhance confidence, independence, and social connection.",
        icon: Palette,
        highlights: ["Creative Programs", "Fitness & Wellbeing Activities", "Cultural Programs", "Skill-Based Workshops", "Social Connection"],
        image: "/sarvies-images/activity-participation.jpg"
    },
    {
        title: "Support Coordination",
        description: "We assist participants in understanding and implementing their NDIS plans. We work closely with participants and families to make the process simple and stress-free.",
        icon: ClipboardCheck,
        highlights: ["Connecting with Service Providers", "Coordinating Supports", "Monitoring Progress Toward Goals", "Ensuring Services Meet Needs", "Plan Implementation"],
        image: "/sarvies-images/support-coordination.jpg"
    },
];

export default function ServicesPage() {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/sarvies-images/aifaceswap-raw_cbfbec88ddafafb7db5bd6eab672efc6.png"
                        alt="Safe Homenest Care Services"
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
                        className="text-4xl md:text-7xl font-extrabold font-display mb-6 text-slate-900 tracking-tighter"
                    >
                        Our <span className="text-primary italic">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-2xl text-slate-700 font-display font-bold max-w-3xl mx-auto leading-relaxed"
                    >
                        Person-centred NDIS support services designed to promote independence,
                        dignity, and meaningful community participation.
                    </motion.p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col lg:flex-row gap-8 md:gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Image */}
                                <div className="lg:w-1/2 relative">
                                    <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] -z-10" />
                                    <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="lg:w-1/2 space-y-6">
                                    <div className="w-16 h-16 gradient-brand rounded-2xl flex items-center justify-center text-white mb-4">
                                        <service.icon size={32} />
                                    </div>
                                    <h2 className="text-2xl md:text-5xl font-black font-display text-slate-900 tracking-tight">{service.title}</h2>
                                    <p className="text-slate-700 text-lg leading-relaxed font-bold">{service.description}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-slate-100">
                                        {service.highlights.map((h, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                                                </div>
                                                <span className="font-bold text-slate-800 text-sm">{h}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all text-lg group"
                                        >
                                            Enquire About This Service
                                            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-6xl mx-auto bg-slate-50 rounded-[3rem] p-12 md:p-20 text-center border border-slate-100 shadow-sm relative overflow-hidden">
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-slate-950">
                            Need Help With Your Care Plan?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-700 font-display font-bold max-w-3xl mx-auto leading-relaxed">
                            Whether you are exploring your options, transitioning providers, or starting your NDIS plan, we are here to guide you with patience and expertise. No jargon. Just honest, caring support.
                        </p>
                        <div className="flex justify-center pt-4">
                            <Link
                                href="/contact"
                                className="bg-white text-slate-950 border border-slate-200 px-10 py-5 rounded-full font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all flex items-center gap-3 text-lg group"
                            >
                                Contact Our Team
                                <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
