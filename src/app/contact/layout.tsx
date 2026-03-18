import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us — Get in Touch",
    description: "Contact Safe Homenest Care for NDIS support and disability care services in Perth, WA. Call +61 493 012 435 or email info@safehomenest.com.au. We respond within 24 hours.",
    alternates: {
        canonical: "https://safehomenest.com.au/contact",
    },
    openGraph: {
        title: "Contact Us — Safe Homenest Care",
        description: "Have questions about our disability support services? Our friendly team is here to guide you with care and expertise.",
        url: "https://safehomenest.com.au/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
