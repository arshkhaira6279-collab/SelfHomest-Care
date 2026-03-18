import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import CommunitySection from "@/components/CommunitySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import InsideHomesGallery from "@/components/InsideHomesGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactCards from "@/components/ContactCards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safe Homenest Care — Care That Feels Like Home | NDIS Support Perth",
  description: "Safe Homenest Care provides personalised NDIS support and home care services in Perth, WA. Assistance with daily living, community participation, support coordination, and more.",
  alternates: {
    canonical: "https://safehomenest.com.au",
  },
  openGraph: {
    title: "Safe Homenest Care — Care That Feels Like Home",
    description: "Personalised NDIS support and home care services in Perth, WA. Person-centred disability support promoting independence, dignity, and comfort.",
    url: "https://safehomenest.com.au",
  },
};

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <ServicesPreview />
      <CommunitySection />
      <WhyChooseUs />
      <InsideHomesGallery />
      <TestimonialsSection />
      <ContactCards />
    </main>
  );
}
