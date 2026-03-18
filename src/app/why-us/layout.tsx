import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Why Choose Us — Quality & Safeguarding Commitment",
    description: "Discover why families and participants trust Safe Homenest Care. Truly personalised care, qualified team, transparent communication, and 24/7 availability in Perth, WA.",
    alternates: {
        canonical: "https://safehomenest.com.au/why-us",
    },
    openGraph: {
        title: "Why Choose Safe Homenest Care?",
        description: "Committed to delivering high-quality, compliant, and person-centred supports that empower you while ensuring safety, dignity, and respect.",
        url: "https://safehomenest.com.au/why-us",
    },
};

export default function WhyUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
