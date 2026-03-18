import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us — Our Mission, Vision & Values",
    description: "Learn about Safe Homenest Care's mission to deliver high-quality, person-centred NDIS support services that promote independence, wellbeing, and social inclusion in Perth, WA.",
    alternates: {
        canonical: "https://safehomenest.com.au/about",
    },
    openGraph: {
        title: "About Us — Safe Homenest Care",
        description: "Empowering individuals living with disability to lead independent, meaningful, and fulfilling lives through person-centred support services.",
        url: "https://safehomenest.com.au/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
